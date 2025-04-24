import React, { Component } from 'react'
import $ from 'jquery';
import ReactGA from 'react-ga4';

// Importing custom scripts
import { displayHackingEffect } from '../util components/hacking';

// Check if GA tracking ID is available
const isGAAvailable = process.env.NEXT_PUBLIC_TRACKING_ID !== undefined;

export class Terminal extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.child_directories = {
            root: ["books", "projects", "personal-documents", "skills", "languages", "education", "interests"],
            education: ["Diploma", "Bachelors"],
            books: ["Cybersecurity_Fundamentals.pdf", "Ethical_Hacking_Handbook.pdf", "AI_Machine_Learning_Guide.pdf", "Network_Security_Essentials.pdf"],
            skills: ["Penetration Testing", "Network Security", "AI & Machine Learning", "Vulnerability Assessment", "Data Encryption", "Risk Assessment"],
            projects: ["cybersecurity-awareness-program", "network-security-audit-system", "ai-threat-detection-tool", "mdabushalem-portfolio", "school-security-workshops", "red-team-simulator"],
            interests: ["Traveling", "Photography", "Hacking", "Editing"],
            languages: ["Python", "Java", "C++", "JavaScript"],
        };
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>
                <div className="flex w-full h-5">
                    <div className="flex">
                        <div className=" text-ubt-green">md@PC</div>
                        <div className="text-white mx-px font-medium">:</div>
                        <div className=" text-ubt-blue">{this.current_directory}</div>
                        <div className="text-white mx-px font-medium mr-1">$</div>
                    </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden">
                        <span id={`show-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`terminal-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                </div>
                <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
            </React.Fragment>
        );

    }

    focusCursor = (e) => {
        clearInterval(this.cursor);
        this.startCursor($(e.target).data("row-id"));
    }

    unFocusCursor = (e) => {
        this.stopCursor($(e.target).data("row-id"));
    }

    startCursor = (id) => {
        clearInterval(this.cursor);
        $(`input#terminal-input-${id}`).trigger("focus");
        // On input change, set current text in span
        $(`input#terminal-input-${id}`).on("input", function () {
            $(`#cmd span#show-${id}`).text($(this).val());
        });
        this.cursor = window.setInterval(function () {
            if ($(`#cursor-${id}`).css('visibility') === 'visible') {
                $(`#cursor-${id}`).css({ visibility: 'hidden' });
            } else {
                $(`#cursor-${id}`).css({ visibility: 'visible' });
            }
        }, 500);
    }

    stopCursor = (id) => {
        clearInterval(this.cursor);
        $(`#cursor-${id}`).css({ visibility: 'visible' });
    }

    removeCursor = (id) => {
        this.stopCursor(id);
        $(`#cursor-${id}`).css({ display: 'none' });
    }

    clearInput = (id) => {
        $(`input#terminal-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let terminal_row_id = $(e.target).data("row-id");
            let command = $(`input#terminal-input-${terminal_row_id}`).val().trim();
            if (command.length !== 0) {
                this.removeCursor(terminal_row_id);
                this.handleCommands(command, terminal_row_id);
            }
            else return;
            // push to history
            this.prev_commands.push(command);
            this.commands_index = this.prev_commands.length - 1;

            this.clearInput(terminal_row_id);
        }
        else if (e.key === "ArrowUp") {
            let prev_command;

            if (this.commands_index <= -1) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index--;
        }
        else if (e.key === "ArrowDown") {
            let prev_command;

            if (this.commands_index >= this.prev_commands.length) return;
            if (this.commands_index <= -1) this.commands_index = 0;

            if (this.commands_index === this.prev_commands.length) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index++;
        }
    }

    childDirectories = (parent) => {
        let files = [];
        files.push(`<div class="flex justify-start flex-wrap">`)
        this.child_directories[parent].forEach(file => {
            files.push(
                `<span class="font-bold mr-2 text-ubt-blue">'${file}'</span>`
            )
        });
        files.push(`</div>`)
        return files;
    }

    closeTerminal = () => {
        $("#close-terminal").trigger('click');
    }

    handleCommands = (command, rowId) => {
        let words = command.split(' ').filter(Boolean);
        let main = words[0];
        words.shift()
        let result = "";
        let rest = words.join(" ");
        rest = rest.trim();
        switch (main) {
            case "cd":
                if (words.length === 0 || rest === "") {
                    this.current_directory = "~";
                    this.curr_dir_name = "root"
                    break;
                }
                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }

                if (rest === "personal-documents") {
                    result = `bash /${this.curr_dir_name} : Permission denied 😏`;
                    break;
                }

                if (this.child_directories[this.curr_dir_name].includes(rest)) {
                    this.current_directory += "/" + rest;
                    this.curr_dir_name = rest;
                }
                else if (rest === "." || rest === ".." || rest === "../") {
                    result = "Type 'cd' to go back 😅";
                    break;
                }
                else {
                    result = `bash: cd: ${words}: No such file or directory`;
                }
                break;
            case "ls":
                let target = words[0];
                if (target === "" || target === undefined || target === null) target = this.curr_dir_name;

                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }
                if (target in this.child_directories) {
                    result = this.childDirectories(target).join("");
                }
                else if (target === "personal-documents") {
                    result = "Nope! 🙃";
                    break;
                }
                else {
                    result = `ls: cannot access '${words}': No such file or directory                    `;
                }
                break;
            case "mkdir":
                if (words[0] !== undefined && words[0] !== "") {
                    this.props.addFolder(words[0]);
                    result = "";
                } else {
                    result = "mkdir: missing operand";
                }
                break;
            case "pwd":
                let str = this.current_directory;
                result = str.replace("~", "/home/md")
                break;
            case "code":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("vscode");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands:[ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg]";
                }
                break;
            case "echo":
                result = this.xss(words.join(" "));
                break;
            case "spotify":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("spotify");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "chrome":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("chrome");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "todoist":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("todo-ist");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "trash":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("trash");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "about-md":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("about-md");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "terminal":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("terminal");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "settings":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("settings");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "sendmsg":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("gedit");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "clear":
                this.reStartTerminal();
                return;
            case "exit":
                this.closeTerminal();
                return;
            case "sudo":
                if (isGAAvailable) {
                    ReactGA.event({
                        category: "Sudo Access",
                        action: "lol",
                    });
                }
                result = "<img class=' w-2/5' src='./images/memes/used-sudo-command.webp' />";
                break;
            case "cyberscan":
                this.cyberscan();
                break;
            case "hack":
                this.hack();
                break;
            default:
                result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-md, todoist, trash, settings, sendmsg ]";
        }
        document.getElementById(`row-result-${rowId}`).innerHTML = result;
        this.appendTerminalRow();
    }

    cyberscan = () => {
        this.addOutput("<div class='text-green-500 font-bold mb-2'>Cybersecurity Scanning Utility v1.0</div>");
        this.addOutput("<div class='text-yellow-500 mb-1'>Developed by MD Abu Shalem Alam</div>");
        this.addOutput("<div class='text-gray-400 mb-4'>Starting comprehensive system scan...</div>");
        
        // Simulate a scanning process
        setTimeout(() => {
            this.addOutput("<div class='text-blue-400 ml-4'>Scanning network interfaces...</div>");
        }, 500);
        
        setTimeout(() => {
            this.addOutput("<div class='text-blue-400 ml-4'>Checking for open ports...</div>");
        }, 1200);
        
        setTimeout(() => {
            this.addOutput("<div class='text-blue-400 ml-4'>Analyzing file system permissions...</div>");
        }, 2000);
        
        setTimeout(() => {
            this.addOutput("<div class='text-blue-400 ml-4'>Detecting potential vulnerabilities...</div>");
        }, 3000);
        
        setTimeout(() => {
            this.addOutput("<div class='text-blue-400 ml-4'>Running threat model analysis...</div>");
        }, 4000);
        
        setTimeout(() => {
            this.addOutput("<div class='text-white mt-4 mb-2 font-bold'>Scan Complete:</div>");
            this.addOutput("<div class='bg-gray-800 p-3 rounded-lg mb-4'>");
            this.addOutput("<div class='flex justify-between mb-2'><span class='text-white'>Network Security:</span><span class='text-green-500'>GOOD</span></div>");
            this.addOutput("<div class='flex justify-between mb-2'><span class='text-white'>Firewall Status:</span><span class='text-green-500'>ACTIVE</span></div>");
            this.addOutput("<div class='flex justify-between mb-2'><span class='text-white'>Malware Detection:</span><span class='text-green-500'>NONE FOUND</span></div>");
            this.addOutput("<div class='flex justify-between mb-2'><span class='text-white'>System Patches:</span><span class='text-yellow-500'>2 UPDATES NEEDED</span></div>");
            this.addOutput("<div class='flex justify-between'><span class='text-white'>Password Security:</span><span class='text-red-500'>WEAK (UPDATE RECOMMENDED)</span></div>");
            this.addOutput("</div>");
            this.addOutput("<div class='text-gray-400'>Security Score: <span class='text-yellow-500 font-bold'>78/100</span> - Good protection but improvements needed</div>");
        }, 5000);
        
        if (isGAAvailable) {
            ReactGA.event({
                category: "Terminal Command",
                action: "cyberscan",
            });
        }
    }

    hack = () => {
        this.addOutput("<div class='text-red-600 font-bold mb-2'>SYSTEM BREACH SIMULATION</div>");
        this.addOutput("<div class='text-gray-400 mb-4'>For educational purposes only...</div>");
        
        setTimeout(() => {
            this.addOutput("<div class='text-yellow-500 mb-1'>Initializing hacking simulation...</div>");
            displayHackingEffect();
        }, 500);
        
        if (isGAAvailable) {
            ReactGA.event({
                category: "Terminal Command",
                action: "hack",
            });
        }
    }

    xss(str) {
        if (!str) return;
        return str.split('').map(char => {
            switch (char) {
                case '&':
                    return '&amp';
                case '<':
                    return '&lt';
                case '>':
                    return '&gt';
                case '"':
                    return '&quot';
                case "'":
                    return '&#x27';
                case '/':
                    return '&#x2F';
                default:
                    return char;
            }
        }).join('');
    }

    render() {
        return (
            <div className="h-full w-full bg-ub-drk-abrgn text-white text-sm font-bold" id="terminal-body">
                {
                    this.state.terminal
                }
            </div>
        )
    }
}

export default Terminal

export const displayTerminal = (addFolder, openApp) => {
    return <Terminal addFolder={addFolder} openApp={openApp}> </Terminal>;
}

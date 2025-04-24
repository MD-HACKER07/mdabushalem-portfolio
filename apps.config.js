import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutMD } from './components/apps/md';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-md",
        title: "About MD",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutMD,
    },
    {
        id: "vscode",
        title: "My VS Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "My Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "github",
        title: "GitHub",
        icon: './themes/Yaru/apps/github.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://github.com/MD-HACKER07",
        screen: () => {},
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        icon: './images/social/linkedin.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://in.linkedin.com/in/md-abu-shalem-alam-726a93292",
        screen: () => {},
    },
    {
        id: "instagram",
        title: "Instagram",
        icon: './images/social/instagram.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://www.instagram.com/iammd_18_",
        screen: () => {},
    }
]

export default apps;
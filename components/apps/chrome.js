import React, { Component } from 'react';

export class Chrome extends Component {
    constructor() {
        super();
        this.home_url = 'https://aidoctor.cloud';
        this.state = {
            url: 'https://aidoctor.cloud',
            display_url: "https://aidoctor.cloud",
            tabs: [
                { id: 1, url: 'https://aidoctor.cloud', display_url: 'https://aidoctor.cloud', title: 'AI Doctor', icon: './themes/Yaru/status/chrome_site_icon.svg' },
                { id: 2, url: 'https://traderai.cloud', display_url: 'https://traderai.cloud', title: 'Trader AI', icon: './themes/Yaru/status/chrome_site_icon.svg' },
                { id: 3, url: 'https://abushalem.site', display_url: 'https://abushalem.site', title: 'Abu Shalem', icon: './themes/Yaru/status/chrome_site_icon.svg' },
                { id: 4, url: 'https://linkedin.com/in/mdabushalem', display_url: 'https://linkedin.com/in/mdabushalem', title: 'LinkedIn', icon: './themes/Yaru/status/linkedin_icon.svg' },
                { id: 5, url: 'https://instagram.com', display_url: 'https://instagram.com', title: 'Instagram', icon: './themes/Yaru/status/instagram_icon.svg' }
            ],
            activeTab: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        let lastVisitedUrl = localStorage.getItem("chrome-url");
        let lastDisplayedUrl = localStorage.getItem("chrome-display-url");
        let activeTab = localStorage.getItem("chrome-active-tab");
        
        if (lastVisitedUrl !== null && lastVisitedUrl !== undefined) {
            this.setState({ 
                url: lastVisitedUrl, 
                display_url: lastDisplayedUrl,
                activeTab: activeTab ? parseInt(activeTab) : 1 
            }, this.refreshChrome);
        }
    }

    storeVisitedUrl = (url, display_url) => {
        localStorage.setItem("chrome-url", url);
        localStorage.setItem("chrome-display-url", display_url);
        localStorage.setItem("chrome-active-tab", this.state.activeTab);
    }

    refreshChrome = () => {
        this.setState({ isLoading: true });
        
        // Simulate loading
        setTimeout(() => {
            document.getElementById("chrome-screen").src += '';
            this.setState({ isLoading: false });
        }, 300);
    }

    goToHome = () => {
        this.setState({ url: this.home_url, display_url: "https://aidoctor.cloud", isLoading: true });
        
        setTimeout(() => {
            this.refreshChrome();
            this.setState({ isLoading: false });
        }, 300);
    }

    goBack = () => {
        const iframe = document.getElementById("chrome-screen");
        if (iframe && iframe.contentWindow.history) {
            iframe.contentWindow.history.back();
        }
    }

    goForward = () => {
        const iframe = document.getElementById("chrome-screen");
        if (iframe && iframe.contentWindow.history) {
            iframe.contentWindow.history.forward();
        }
    }

    switchTab = (tabId) => {
        const tab = this.state.tabs.find(t => t.id === tabId);
        if (tab) {
            this.setState({ 
                activeTab: tabId,
                url: tab.url,
                display_url: tab.display_url,
                isLoading: true
            }, () => {
                this.storeVisitedUrl(tab.url, tab.display_url);
                setTimeout(() => {
                    this.refreshChrome();
                    this.setState({ isLoading: false });
                }, 300);
            });
        }
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let url = e.target.value;
            let display_url = "";

            url = url.trim();
            if (url.length === 0) return;

            if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
                url = "https://" + url;
            }

            url = encodeURI(url);
            display_url = url;
            
            // Update the current tab's URL
            const updatedTabs = this.state.tabs.map(tab => 
                tab.id === this.state.activeTab 
                    ? {...tab, url, display_url} 
                    : tab
            );

            this.setState({ url, display_url, tabs: updatedTabs, isLoading: true });
            this.storeVisitedUrl(url, display_url);
            document.getElementById("chrome-url-bar").blur();
            
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 500);
        }
    }

    handleDisplayUrl = (e) => {
        this.setState({ display_url: e.target.value });
    }

    displayUrlBar = () => {
        return (
            <div className="w-full pt-0.5 pb-1 flex flex-col justify-start items-center text-white text-sm border-b border-gray-900">
                <div className="w-full flex mb-1 px-2">
                    {this.state.tabs.map(tab => (
                        <div 
                            key={tab.id}
                            onClick={() => this.switchTab(tab.id)} 
                            className={`px-3 py-1 mr-1 rounded-t-md cursor-pointer text-xs flex items-center ${this.state.activeTab === tab.id ? 'bg-gray-700' : 'bg-gray-800 opacity-80 hover:opacity-100'}`}
                        >
                            <img src={tab.icon || './themes/Yaru/status/chrome_site_icon.svg'} className="w-3 h-3 mr-1" alt="Site icon" />
                            <span className="truncate max-w-xs">{tab.title}</span>
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center bg-gray-800 rounded-md px-1 mx-2">
                    <div onClick={this.goBack} className="mx-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10 p-1" title="Go back">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div onClick={this.goForward} className="mx-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10 p-1" title="Go forward">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div onClick={this.refreshChrome} className="mx-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10 p-1" title="Refresh">
                        <img className="w-4 h-4" src="./themes/Yaru/status/chrome_refresh.svg" alt="Refresh" />
                    </div>
                    <div onClick={this.goToHome} className="mx-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10 p-1" title="Home">
                        <img className="w-4 h-4" src="./themes/Yaru/status/chrome_home.svg" alt="Home" />
                    </div>
                    <div className="relative flex-grow mx-2">
                        <input 
                            onKeyDown={this.checkKey} 
                            onChange={this.handleDisplayUrl} 
                            value={this.state.display_url} 
                            id="chrome-url-bar" 
                            className="outline-none bg-gray-700 rounded-full pl-3 py-1 w-full text-gray-300 focus:text-white text-sm" 
                            type="url" 
                            spellCheck={false} 
                            autoComplete="off" 
                        />
                        {this.state.isLoading && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                {this.displayUrlBar()}
                <div className="flex-grow relative">
                    <iframe 
                        src={this.state.url} 
                        className="w-full h-full" 
                        id="chrome-screen" 
                        frameBorder="0" 
                        title="Ubuntu Chrome Browser"
                    ></iframe>
                    {this.state.isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Chrome

export const displayChrome = () => {
    return <Chrome> </Chrome>;
}

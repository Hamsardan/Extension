Web Tracker 🌐
A simple Chrome extension to save and track URLs. You can save links from an input field or capture the URL of your current tab with a single click.

Features ✨
Save Input: Manually type or paste a URL into the input field and save it.

Save Tab: Save the URL of the currently active tab directly.

Persistent Storage: Your saved links are stored using localStorage, so they remain available even after you close the browser.

Clickable Links: All saved URLs are displayed as clickable links that open in a new tab.

Delete All: Clear your entire list of saved links with a double-click on the "Delete All" button.

How to Install and Use 🛠️
Since this extension is not on the Chrome Web Store, you can load it locally by following these steps:

Download the files: Clone or download this repository to your local machine.

Open Chrome Extensions: Open Google Chrome and navigate to chrome://extensions.

Enable Developer Mode: Turn on the "Developer mode" toggle, usually found in the top-right corner.

Load the Extension:

Click on the "Load unpacked" button.

Select the folder where you saved the project files (index.html, manifest.json, etc.).

Pin the Extension: Click the puzzle piece icon (🧩) in your toolbar, find "Web Tracker," and click the pin icon to make it easily accessible.

That's it! You can now click the extension icon to start saving links.

Project File Structure 📂
index.html: Defines the structure and content of the extension's popup window.

style.css: Contains all the styles for the popup, including layout, colors, and fonts.

index.js: The core logic of the extension. It handles button clicks, interacts with localStorage to save and retrieve data, and manipulates the DOM to display the saved links.

manifest.json: The configuration file for the Chrome extension. It specifies the extension's name, version, permissions, and popup file.

Technologies Used 💻
HTML

CSS

JavaScript (ES6)

Chrome Extension APIs (tabs, storage)

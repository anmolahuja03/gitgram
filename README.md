# gitgram


## Table of Content

 - Description & Features
 - Features
 - Tech Stack Used &Docs
 - Preview
 - Local Setup
 
## Descripton
Gitgram is a web app which allows the visitors to search github users and displays all the useful information about the user. Some of the functionalities of gitgram includes :
- The general information of the user - Headline, Location and Company.
- List of all the followers with their github links and user's github avatar.
- Search bar to search for any github user.
- Total no of repos, total followers, following and gists.
- Creates different types of beautiful charts to visualize 
    - Most used language
    - Most forked repository
    - Most popular language
 - In case the user does not exists, it displays the error message.

**Deployed Link :** https://anmol-gitgram.netlify.app/

## Tech Stack Used

- React Hooks
- React Router DOM - to set up pages and navigation -  [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)
-  Fusion Charts to display user repositories data  -  [Fusion Charts - Main Docs](https://www.fusioncharts.com/),  [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts), [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)
- Auth0 for Authentication -  [Auth0 - Main Docs](https://auth0.com/)
- GitHub API to retrieve data

**Deployed On :** Netlify
**Connections :**  EMail, Social

##  Preview

![LoginScreen](https://github.com/anmolahuja03/gitgram/blob/main/Preview%20Images/LoginScreen.png)

![Dashboard](https://github.com/anmolahuja03/gitgram/blob/main/Preview%20Images/Dashboard.png)

Error message shown if the user does not exists
![Error](https://github.com/anmolahuja03/gitgram/blob/main/Preview%20Images/Error.png)


## Local Setup & Available Scripts

In the project directory, you can run:
### `npm install`
Installs all dependencies required for the app to run
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

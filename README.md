# wordpress-theme-developer
Starter for developing WordPress themes using the `gulp` task runner and
`docker` to serve WordPress and your theme without the need for another
webserver (No MAMP/XAMP/LAMP!).

The HTML5Boilerplate theme is included but may be replaced with your own
starter theme. This project also works well for developing child themes.

Based on [wordpress-gulp-starter-kit](https://github.com/synapticism/wordpress-gulp-starter-kit)

## Setup
Instructions below assume you are using [yarn]() as your package manager. All
yarn commands may be substituted with [npm]() commands if you prefer npm.

### 1. Fork and clone this repository
* [Fork](https://help.github.com/articles/fork-a-repo/) this repository
* [Clone](https://help.github.com/articles/cloning-a-repository/) your fork to your local machine

### 2. Install dependencies
* [Install yarn](https://yarnpkg.com/en/docs/install)
* Install Docker: [Mac](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac), [Win](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows), [Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntu/#install-docker)
* Install gulp: `yarn global add gulp`
* Install project dependencies: `yarn install`
* Add your settings to `gulpconfig.js`. At the minimum, change the project name.

### 3. WordPress Setup
* Run your project: `gulp dev`
* Follow the WordPress setup instructions in the opened browser window (You may have to refresh the window manually if it times out the first time to give the docker image time to be ready).
* Activate your theme from WordPress admin panel

## Usage
Running `gulp dev` will serve your project and open it in a browser. Your theme files live in `/src`. As you make changes to your theme, they will be automatically rebuilt and displayed in the browser.

## Troubleshooting
### node-sass
If you get an error similar to `Error: ENOENT: no such file or directory, scandir '/wordpress-theme-developer/node_modules/node-sass/vendor'` run `npm rebuild node-sass`
to rebuild node-sass and try again. See [this issue](https://github.com/sass/node-sass/issues/1804) for more info.

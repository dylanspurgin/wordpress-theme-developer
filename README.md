# wordpress-theme-developer
Starter for developing WordPress themes using the `gulp` task runner and
`docker` to serve WordPress and your theme without the need for another
webserver (No MAMP/XAMP/LAMP). Keep your projects isolated and your system clean!

Features: SCSS processing, code linting, sourcemaps, minification.

The [HTML5 Blank WordPress theme](http://html5blank.com/) is included but may be replaced with your own
starter theme. This project also works well for developing child themes.

Based on [wordpress-gulp-starter-kit](https://github.com/synapticism/wordpress-gulp-starter-kit)

## Setup
Instructions below assume you are using [yarn](https://yarnpkg.com/) as your package manager. All
yarn commands may be substituted with [npm](https://www.npmjs.com/) commands if you prefer.

### 1. Fork and clone this repository
* [Fork](https://help.github.com/articles/fork-a-repo/#fork-an-example-repository) this repository by clicking the Fork button at the top of this page.
* [Clone](https://help.github.com/articles/cloning-a-repository/) your fork to your local machine: `git clone https://github.com/YOUR-USERNAME/YOUR-FORKED-REPOSITORY`

### 2. Install dependencies
* [Install yarn](https://yarnpkg.com/en/docs/install)
* Install Docker: [Mac](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac), [Win](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows), [Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntu/#install-docker)
* Install gulp: `yarn global add gulp`
* Install project dependencies: `yarn install`

### 3. Configuration
* Add your settings to `gulpconfig.js`. At the minimum, change the project name.
* Add your theme details to `src/scss/_config.scss`. (If you are building a child theme, set `theme-template` to the parent theme name)

### 4. WordPress Setup
* Run your project: `gulp dev`
* Follow the WordPress setup instructions in the opened browser window (You may have to refresh the window manually if it times out to give the docker image time to be ready).
* Activate your theme from WordPress admin panel

## Usage
### Development
Running `gulp dev` will serve your project and open it in a browser. Your theme files live in `/src`. As you make changes to your theme, they will be automatically rebuilt and displayed in the browser.

### Distribution
Running `gulp dist` will build your theme (including image minification with imagemin) and create a zip for release in the `dist` folder.

## Troubleshooting
### Stopping the `dev` task and/or docker instance
Sometimes the `gulp dev` task will not completely stop. Kill your terminal window then run `docker-compose down` in a new one.

### node-sass
If you get an error similar to `Error: ENOENT: no such file or directory, scandir '/wordpress-theme-developer/node_modules/node-sass/vendor'` run `npm rebuild node-sass`
to rebuild node-sass and try again. See [this issue](https://github.com/sass/node-sass/issues/1804) for more info.

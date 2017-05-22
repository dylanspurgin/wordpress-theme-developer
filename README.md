# wordpress-theme-developer
Starter for developing WordPress theme using the `gulp` task runner and
`php-connect` to serve WordPress and your theme without the need for another
webserver. HTML5Boiler plate theme is included but may be replaced with your own
starter theme. This project also works well for developing child themes.

Based on [wordpress-gulp-starter-kit](https://github.com/synapticism/wordpress-gulp-starter-kit)

## Setup
Instructions below assume you are using [yarn]() as your package manager. All
yarn commands may be substituted with [npm]() commands if you prefer npm.

### First, fork and clone this repository
* [Fork](https://help.github.com/articles/fork-a-repo/) this repository
* [Clone](https://help.github.com/articles/cloning-a-repository/) your fork to your local machine

### Setup your database
This repo includes `php-connect` for serving your WordPress instance locally but
you will still need to install a local copy of mysql and create a user and
database for your WordPress install.

### Then, do the following locally
* Install gulp globally if not already installed: `yarn global add gulp`
* `yarn install`
* Add your settings to `gulpconfig.js`
** Edit `gulpconfig.js` in the root of your project
** At the minimum, change the project name and add your database settings
* Run `gulp setup` to:
  * Install the latest version of WordPress locally
  * Create `wp-config.php` based on `gulpconfig.js` settings
  * Symlink your theme output to the WordPress themes directory
* run your project: `gulp dev`
* Follow the WordPress setup instructions in the opened browser window
* Activate your theme from WordPress admin panel

## Usage
Running `gulp dev` will serve your project and open it in a browser. As you make
changes to your theme, they will be automatically rebuilt and displayed in the
browser.

## Troubleshooting
### node-sass
If you get an error similar to `Error: ENOENT: no such file or directory, scandir '/wordpress-theme-developer/node_modules/node-sass/vendor'` run `npm rebuild node-sass`
to rebuild node-sass and try again. See [this issue](https://github.com/sass/node-sass/issues/1804) for more info.

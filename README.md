# wordpress-theme-developer
Starter for developing WordPress theme using webpack.

## Setup
### First, fork and clone this repository
* Fork this repository
* clone your fork to your local machine

### Setup your database
This repo includes php-connect for serving your WordPress instance locally but
you will still need to install a local copy of mysql and create a user and
database for your WordPress install.

### Then, do the following locally
* install gulp globally if not already installed (`npm install -g gulp`)
* `yarn install` (or `npm install`)
* Add your settings to `gulpconfig.js`
* Run `gulp setup` to:
** Install the latest version of WordPress locally
** Create `wp-config.php` based on `gulpconfig.js` settings
** Symlink your theme output to the WordPress themes directory
* run your project: `gulp dev`
* Follow the WordPress setup instructions in the opened browser window
* Activate your theme from WordPress admin panel

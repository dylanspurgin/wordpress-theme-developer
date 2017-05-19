<!doctype html>
<html <?php language_attributes(); ?>>
<head>

<!-- Meta Tags -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

<!-- Favicon -->
<?php //if(!empty($options['favicon'])) { ?>
	<link rel="shortcut icon" href="<?php //echo nectar_options_img($options['favicon']); ?>" />
<?php //} ?>


<title> <?php wp_title("|",true, 'right'); ?> <?php if (!defined('WPSEO_VERSION')) { bloginfo('name'); } ?></title>

<?php wp_head(); ?>

</head>

<?php
 global $post;
?>

<body <?php body_class(); ?> >

	<header>

		<!-- TODO - logo -->

		<div id="header-secondary-outer" data-full-width="<?php echo (!empty($options['header-fullwidth']) && $options['header-fullwidth'] == '1') ? 'true' : 'false' ; ?>">
			<div class="container">
				<nav>
					<?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
				</nav>
			</div>
		</div>

	</header>

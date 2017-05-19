<?php

    /* Disable WordPress Admin Bar */
    // show_admin_bar(false); // hide for everyone
    add_action('after_setup_theme', 'remove_admin_bar');
    function remove_admin_bar() {
        $current_user = wp_get_current_user();
        if ($current_user->user_login=='dylanspurgin') {
            show_admin_bar(false);
        }
    }


    function my_theme_enqueue_styles() {
        $parent_style = 'parent-style';

        wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
        wp_enqueue_style( 'child-style',
            get_stylesheet_directory_uri() . '/style.css',
            array( $parent_style ),
            wp_get_theme()->get('Version')
        );
    }
    add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');

    // Header menu
    function register_my_menus() {
        register_nav_menus(
            array(
              'header-menu' => __( 'Header Menu' ),
              'extra-menu' => __( 'Extra Menu' )
            )
        );
    }
    add_action( 'init', 'register_my_menus' );


    function theme_footer_js() {
        wp_enqueue_script('themeFooterJs', get_stylesheet_directory_uri().'/js/x-footer.js', array('jquery'), '0.9.3', TRUE);
    }
    add_action('wp_enqueue_scripts', 'theme_footer_js');

?>

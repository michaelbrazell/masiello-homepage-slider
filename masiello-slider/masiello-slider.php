<?php
/**
 * Plugin Name: Masiello Homepage Slider
 * Plugin URI: https://masielloarchitect.com/
 * Description: A simple plugin that adds a React Slider to the Homepage
 * Version: 1.0
 * Author: Mike Murray
 * Author URI: http://www.worcesterwebgroup.com
 */

/**
 * Include CSS files.
 */
function slider_scripts() {
  wp_register_style( 'slider-styles',  plugin_dir_url( __FILE__ ) . 'static/css/main.0339c0e3.chunk.css' );
  wp_enqueue_style( 'slider-styles' );

  wp_register_script( 'slider-script1',  plugin_dir_url( __FILE__ ) . 'static/js/2.8aa2fd2b.chunk.js', $deps = array(), $ver = false, $in_footer= true );
  wp_enqueue_script( 'slider-script1' );

  wp_register_script( 'slider-script2',  plugin_dir_url( __FILE__ ) . 'static/js/main.b8689bac.chunk.js', $deps = array(), $ver = false, $in_footer= true );
  wp_enqueue_script( 'slider-script2' );
}
add_action( 'wp_enqueue_scripts', 'slider_scripts' );
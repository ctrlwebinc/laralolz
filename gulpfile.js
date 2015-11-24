var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
	    .scripts([
	        'material.min.js'
	    ], 'public/js/app.js', 'node_modules/material-design-lite')
	    .version(['css/app.css', 'js/app.js']);
    	//.phpUnit();
});

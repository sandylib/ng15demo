"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
// var open = require('gulp-open'); //Open a URL in a web browser
// var browserify = require('browserify'); // Bundles JS
// var reactify = require('reactify');  // Transforms React JSX to JS
// var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
// var concat = require('gulp-concat'); //Concatenates files
// var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost'
	
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['app'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});



gulp.task('default', ['connect']);
'use strict';

var gulp = require('gulp'),
	rename = require('gulp-rename'),
	cdnizer = require('gulp-cdnizer');



gulp.task('cdnizer', function() {
	gulp.src('./main.html')
		.pipe(cdnizer([
				'google:angular',
				'google:angular-route',
				'cdnjs:jquery',
				'cdnjs:font-awesome',
				'jsdelivr:bootstrap',
				'cdnjs:webcomponentsjs:webcomponents-lite.js',
				{
					file: 'bower_components/polymer/polymer.html',
					package: 'polymer',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/polymer/polymer.html'
				}, {
					file: 'bower_components/paper-card/paper-card.html',
					package: 'paper-card',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-card/paper-card.html'
				}, {
					file: 'bower_components/paper-tabs/paper-tabs.html',
					package: 'paper-tabs',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-tabs/paper-tabs.html'
				}, {
					file: 'bower_components/paper-button/paper-button.html',
					package: 'paper-button',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-button/paper-button.html'
				}, {
					file: '/bower_components/devicon/devicon.min.css',
					cdn: '//cdn.rawgit.com/konpa/devicon/master/devicon.min.css'
				}, {
					file: 'css/normalize.css',
					cdn: '//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
				}
			]))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'))
})

gulp.task('default', ['scripts', 'sass'])
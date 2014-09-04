module.exports = function( grunt ) {
	"use strict";

	grunt.initConfig({
		vulcanize: {
			default: {
				options: {},
				files: {
					"demos/platform-based-built.html": "demos/platform-based.html",
					"demos/polymer-based-built.html": "demos/polymer-based.html"
				}
			}
		},
	});

	grunt.loadNpmTasks( "grunt-vulcanize" );
	grunt.registerTask( "default", [ "vulcanize" ]);
};
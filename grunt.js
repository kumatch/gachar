module.exports = function(grunt) {
    var version = require('./package.json').version;
    var sources = [
        './lib/gachar.js'
    ];

    grunt.initConfig({
        lint: {
            files : sources
        },
        min: {
            dist: {
                src: sources,
                dest: 'gachar-' + version + '.min.js'
            }
        }
    });

    grunt.registerTask('default', 'lint min');
};
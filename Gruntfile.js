'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options:{

            },
            files: ['./js/*.min.js', './index.html', './css/app.css.map', './css/app.css', './css/app.min.css']
        },
        jshint: {
            options: {
                reporterOutput: './jshint.txt'
            },
            files: ['js/*.js']
        },
        uglify: {
            development:{
                files: grunt.file.expandMapping(['js/*.js'], '', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.js', '.min.js');
                    }
                })
            },
           options:{
               mangle:true,
               compress: {
                   drop_console: true
               }
           }
        },
        htmlhint: {
            templates: {
                options: {
                    'attr-lower-case': true,
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'id-class-value': true,
                    'id-class-unique': true,
                    'src-not-empty': true,
                    'img-alt-required': true
                },
                src: ['./*.html']
            }
        },
        htmlmin: {
            dev: {
                options: {
                    removeEmptyAttributes: true,
                    removeEmptyElements: false,
                    removeRedundantAttributes: true,
                    removeComments: true,
                    removeOptionalTags: true,
                    collapseWhitespace: true
                },
                files: {
                    './index.html' : ['./_index.html']
                }
            }
        },
        csslint: {
            strict: {
                options: {

                },
                src: ['./css/_style.css']
            },
            laxed: {
                options: {
                    "zero-units": false
                },
                src: ['./css/_style.css']
            }
        },
        cssmin: {
            min: {
                options: {
                    "report": "gzip"
                },
                //files: {
                //    './css/main.css': ['./css/main.css']
                //}
                files: grunt.file.expandMapping(['css/main.css'], '', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.css', '.min.css');
                    }
                })
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },
        uncss: {
            dist: {
                files: {
                    'css/tidy.css': ['index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-htmlhint");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-uncss');


    grunt.registerTask("prod", ['clean','sass','jshint','htmlhint','csslint:laxed','uglify','htmlmin','cssmin']);
    grunt.registerTask("dev", ['clean','sass','jshint','htmlhint','csslint:laxed']);
    //grunt.registerTask("clean", ['clean']);

};
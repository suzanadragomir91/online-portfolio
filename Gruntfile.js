module.exports = function(grunt){
// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true
                },
                src: 'assets/css/src/core.less',
                dest: 'assets/css/dist/styles.css'
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                success: true,
                duration: 2,
                title: 'Online Portfolio',
            }
        },

        notify: {
            css: {
                options: {
                    title: 'ᕦ(ò_óˇ)ᕤ',
                    message: 'CSS successfully compiled'
                }
            }
        },

        watch: {
            css: {
                files: ['assets/css/src/*.less'],
                tasks: ['less']
            }
        }
    });

    // Load task(s).
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // Default task(s).
    grunt.registerTask('default', ['less', 'watch']);
};

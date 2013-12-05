module.exports = function(grunt){
    grunt.initConfig({
        karma: {
            options:{
                configFile: 'karma.conf.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-karma');
}
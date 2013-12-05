module.exports = function(grunt){
    grunt.initConfig({
        karma: {
            options:{ // shared config
                configFile: 'karma.conf.js'
            },
            unit:{
                options:{
                    singleRun: true // specific config example
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-karma');
}
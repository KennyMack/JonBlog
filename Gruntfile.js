module.exports = function(grunt) {
  var appcfg = {
    app: __dirname,
    src: 'src',
    build: 'build' 
  };


  var file = {
    appcfg: appcfg,
    // Clean Files to build
    clean: {
      main: {
        files: [{
          dot: true,
          src: [
            '<%= appcfg.build %>/{,*/}*',
            '!<%= appcfg.build %>/.git{,*/}*'
          ]
        }]
      }
    },
    // Copy Files to build
    copy: {
      api: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appcfg.src %>',
          dest: '<%= appcfg.build %>',
          src: [
            'server/*.js',
            'server/bin/www',
            'server/{,*/}*.js'
          ]
        }]
      }
    }
  };
  console.log(file);

  grunt.initConfig(file);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'clean:main', 
    'copy:api'
  ]);
};
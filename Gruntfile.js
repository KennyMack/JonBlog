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
      api: {
        files: [{
          dot: true,
          src: [
            '<%= appcfg.build %>/server/{,*/}*',
            '!<%= appcfg.build %>/.git{,*/}*'
          ]
        }]
      },
      client: {
        files: [{
          dot: true,
          src: [
            '<%= appcfg.build %>/client/{,*/}*',
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
      },
      client: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appcfg.src %>',
          dest: '<%= appcfg.build %>',
          src: [
            'client/*.html',
            'client/{,*/}*.html'
          ]
        }]
      }
    },
    wiredep: {
      target: {
        src: [
          '<%= appcfg.build %>/client/index.html'
        ]
      }
    }
  };

  grunt.initConfig(file);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('api', [
    'clean:api',
    'copy:api'
  ]);

  grunt.registerTask('client', [
    'clean:client',
    'copy:client',
    'wiredep'

  ]);

};

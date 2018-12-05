// Karma configuration
module.exports = function(config){
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',
    
    // frameworks to use
    frameworks: ['jasmine'],
    
    // list of files / patterns to load in the browser
    files: [
      "./app/libs/jquery/jquery.min.js",
      "./app/libs/angular/angular.min.js",
      "./app/libs/angular-ui-router/release/angular-ui-router.min.js",
      
      "./app/libs/d3/d3.min.js",
      "./app/libs/d3/d3.min.js",
      "./app/libs/d3/topojson.js",
      "./app/libs/d3/d3.geo.projection.min.js",
      "./app/libs/d3/d3.layout.cloud.js",
      "./app/libs/vega/vega_no_divwrap.js", 
      "./app/libs/snap.svg/dist/snap.svg-min.js",

      "./app/scripts/app.js",
      "./app/scripts/**/*.js",


      "./test/libs/angular-mocks.js",
      "./test/libs/jasmine/lib/jasmine-core/jasmine.js",

      "./test/unit/*_test.js",
      "./test/unit/**/*_test.js",
      //"./test/unit/directives/*_test.js",
      //"./test/unit/services/*_test.js"
    ],
    
    // list of files to exclude
    exclude: ['./app/scripts/directives/ko-actor-directive_goal.js'],
    
    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],
    
    // web server port
    port: 8081,
    
    // cli runner port
    runnerPort: 9100,
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // enable / disable watching file and executing tests whenever any file changes
    // managed in gulp
    autoWatch: false,
    
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    //browsers: ['Chrome', 'Firefox', 'IE'],
    browsers: ['Chrome'],
    
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,
    
    // Continuous Integration mode
    // if true, it captures browsers, run tests and exit
    singleRun: false,

  });
};

var gulp    = require('gulp');
var concat  = require('gulp-concat');

var path = {
    
    build: {
        js: "build/"
    },
    
    background: {
         js: [
            "src/options.js",
            "src/received_a_request.js",
            "src/bookmarks_chrome.js",
            "src/expansion.js"
        ], 
    },
    content_scripts:{
        js: [
            "src/options.js",
            "src/updated_page.js",
            "src/chrome_search.js",
            "src/google.js"
        ],
    }
}

gulp.task('js:expansion', function () {
    return gulp.src(path.background.js)
        .pipe(concat('EXPANSION.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js:google', function () {
    return gulp.src(path.content_scripts.js)
        .pipe(concat('GOOGLE.js'))
        .pipe(gulp.dest(path.build.js));
});
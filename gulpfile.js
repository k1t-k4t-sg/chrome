var gulp        = require('gulp');
var concat      = require('gulp-concat');

var path = {
    
    build: {
        js: "build/"
    },
    
    src: {
        scripts_background: [
            "src/options.js",
            "src/received_a_request.js",
            "src/bookmarks_chrome.js",
            "src/сompare_bookmarks.js"
        ],
        content_scripts: [
            "src/options.js",
            "src/updated_page.js",
            "src/chrome_search.js",
            "src/chrome.js"
        ]
    }
    
}

gulp.task('js:backgroundScript', function () {
    return gulp.src(path.src.scripts_background)
        .pipe(concat('MANDARIN_FON.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js:content_scripts', function () {
    return gulp.src(path.src.content_scripts)
        .pipe(concat('MANDARIN_CONTENT.js'))
        .pipe(gulp.dest(path.build.js));
});

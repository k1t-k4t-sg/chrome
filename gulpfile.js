var fileinclude = require('gulp-file-include');
var gulp        = require('gulp');
var concat      = require('gulp-concat');

var path = {
    
    build: {
        js: "build/"
    },
    
    src: {
         js: "src/*.js"   
    }
    
}

gulp.task('js:backgroundScript', function () {
    return gulp.src(path.src.js)
        .pipe(concat('LEMONADE.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js:jstask', function () {
    return gulp.src(['src/lemonade.js'])
        .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.js));
});
import gulp from 'gulp';
import gulpif from 'gulp-if';
import guputil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb)=>{
    if(!args.watch)
        return cb();
    gulp.watch('app/**/*.js',['scripts']); //如果app内的js文件发生变化，
                                    //则自动执行scripts.js脚本 ,进行es6转换，写入到server
    gulp.watch('app/**/*.css',['css']);
    gulp.watch('app/**/*.ejs',['pages']);
});
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'//启动一个脚本作为服务器;
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch)
        return cb();

        //创建一个服务器
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start(); //启动一个服务器

    //监听目录文件改变，自动热更新
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    })
    //路由变化,服务器配置变化需要重启服务器
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
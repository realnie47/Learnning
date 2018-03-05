import gulp from 'gulp';
import gulpif from 'gulp-if';
// 启动一个脚本作为服务器
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
  // 启动服务器
  if(!args.watch) return cb();
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  // 热更新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file) {
    server.notify.apply(server,[file]);
  })

  // 服务重启
  gulp.watch(['server/routes/**/*.js','server/app.js'],function() {
    server.start.bind(server)()
  })
})
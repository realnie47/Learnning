// 构建工具
import gulp from 'gulp';
// gulp语句中做 if 判断
import gulpif from 'gulp-if';
// gulp 中做文件拼接
import concat from 'gulp-concat';
// webpack 包
import webpack from 'webpack';
// gulp 处理 webpack
import gulpWebpack from 'webpack-stream';
// 对文件重命名做标识
import named from 'vinyl-named';
// 热更新：文件修改后自动刷新
import livereload from 'gulp-livereload'
// 处理文件信息流
import plumber from 'gulp-plumber';
// 对文件重命名
import rename from 'gulp-rename';
// 压缩 js、css
import uglify from 'gulp-uglify';
// 命令行工具输出
import {log,colors} from 'gulp-util';
// 对命令行参数解析
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
  // 集中处理错误
    .pipe(plumber({
      errorHandler:function(){

      }
    }))
  // 命名
    .pipe(named())
  // webpack 编译 
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
  // 拷贝文件
    .pipe(gulp.dest('server/public/js'))
  // 重命名、压缩文件并拷贝 .min.js 
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({
      compress:{
        properties:false
      },
      output:{
        'quote_keys':true
      }
    }))
    .pipe(gulp.dest('server/public/js'))
  // 添加热更新  
    .pipe(gulpif(args.watch,livereload()))
})
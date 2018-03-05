import yargs from 'yargs';

const args = yargs
// 区分开发环境和线上环境
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })
// 监听开发环境的文件
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
// 输出命令行执行日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
// sourcemaps
  .option('sourcemaps',{
    describe:'force the creation of sourcemaps'
  })
// 服务器端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  // 对输入的命令行以字符串方式解析
  .argv

  export default args;


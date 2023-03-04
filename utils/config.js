module.exports = {
   // 运行环境设置
   browser: ['chrome'],
   // 测试文件夹路径
   src: ['tests/**/*.js'],
   // 具体配置参数请查看文档
   runnerOptions: {
       skipJsErrors: true,
       quarantineMode: false
   },
   // 显示输出格式配置
   reporterOptions: {
       spec: {
           showDiff: true
       }
   }
};

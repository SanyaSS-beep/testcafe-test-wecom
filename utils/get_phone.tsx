  // A function to get a random integer between min and max (inclusive)
  export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// 定义一个函数，接受一个长度作为参数，返回一个指定长度的随机数字字符串
function getRandomDigits(length: number): string {
    // 生成一个介于10^(length-1)和10^length之间的随机整数
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const num = getRandomInt(min, max);
    // 将整数转换为字符串并返回
    return num.toString();
  }


  // 定义一个函数，不需要参数，返回一个中国大陆的手机号
export function getRandomChinesePhoneNumber(): string {
    // 定义一些常见的中国大陆手机运营商号段
    const prefixes = ['130', '131', '132', '133', '135', '136', '137', '138', '139',
                      '150', '151', '152', '153', '155', '156', '157', '158', '159',
                      '170', '171', '172', '173', '175', '176', '177',
                      ];
    
    // 随机选择一个号段
    const prefixIndex = getRandomInt(0, prefixes.length - 1);
    const prefix = prefixes[prefixIndex];
  
    // 随机生成剩余的8位数字
    const suffix = getRandomDigits(8);
  
    // 拼接号段和后缀并返回
    return prefix + suffix;
  }
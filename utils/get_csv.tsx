import * as fs from 'fs';
import { parse } from 'csv-parse';

// 定义一个类型来表示每一行的数据
type Name = string;

// 定义一个async函数，接受一个csv文件路径作为参数
export async function readCsvFile(filePath: string): Promise<Name[]> {
  // 定义一个数组来存储解析后的数据
  const names: Name[] = [];

  // 创建一个解析器对象，并指定分隔符和列名等选项
  const parser = parse({
    delimiter: ',',
    columns: false // 设置为false表示不使用第一行作为列名
  });

  // 监听data事件，每次获取一行数据，并添加到names数组中
  parser.on('data', (row: Name) => {
    names.push(row);
  });

  // 返回一个Promise对象，当文件读取完毕时resolve，如果出错则reject
  return new Promise((resolve, reject) => {
    // 监听end事件，表示文件已经读取完毕，resolve names数组
    parser.on('end', () => {
      resolve(names);
    });

    // 监听error事件，表示文件读取出错，reject错误信息
    parser.on('error', (err) => {
      reject(err);
    });

    // 创建一个可读流，并将其传递给解析器对象作为输入源
    fs.createReadStream(filePath).pipe(parser);
  });
}
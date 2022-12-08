import Mock from "mockjs";

let list = [], count = 10

/* 
  文章列表数据
*/
const listData = function () {
  for (let i = 0; i < count; i++) {
    list.push(Mock.mock({
      id: '@increment',
      title: '@ctitle',
      createDate: '@date',
      imageUrl: '@dataImage(200x70,Hello)'
    }))
  }
  return {
    code: 200,
    data: list
  }
}
/* 
  删除文章
*/
const delList = (options) => {
  let { id } = JSON.parse(options.body)
  list = list.filter(item => item.id !== id)
  return {
    code: 200,
    list
  }
}

// 数据的删除操作
// let list = function (options) {
//   // console.log(options.type);
//   let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
//   switch (rtype) {
//     case 'get':
//       break;
//     case 'post':
//       let id = parseInt(JSON.parse(options.body).params.id); // 获取请求的id，将options.body转换为JSON对象
//       arr = arr.filter(function (val) {
//         return val.id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
//       });
//       break;
//     default:
//       break;
//   }
//   return {
//     data: arr
//   }
// }

export {
  listData,
  delList
}
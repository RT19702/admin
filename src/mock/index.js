import Mock from 'mockjs';

import { login } from './User';
import { listData, delList } from './Articles';

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})
// {login} 和 login 的值不同
Mock.mock('/user/login', 'get', login);
Mock.mock('/get/list', 'get', listData);
Mock.mock('/list/del', 'post', delList);

export default Mock;
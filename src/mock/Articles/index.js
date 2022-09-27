import Mock from "mockjs";

const list = [], count = 100

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    title: '@ctitle',
    createDate: '@date',
  }))
}

export const listData = () => {
  return {
    code: 200,
    data: list
  }
}
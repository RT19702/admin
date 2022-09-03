import Mock from 'mockjs';

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

export const login = config => {
  let { username } = JSON.parse(config.body);
  const token = tokens[username]
  if (!token) {
    return {
      code: 401,
      message: 'Account and password are incorrect.'
    }
  }
  return {
    code: 200,
    data: token
  }
}
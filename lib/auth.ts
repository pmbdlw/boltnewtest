// 这里应该使用实际的认证服务，如 NextAuth.js
let currentUser: { id: string; username: string } | null = null;

export function login(username: string, password: string): Promise<{ id: string; username: string }> {
  return new Promise((resolve, reject) => {
    // 模拟登录逻辑
    if (username === 'demo' && password === 'password') {
      currentUser = { id: '1', username: 'demo' };
      resolve(currentUser);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
}

export function logout(): Promise<void> {
  return new Promise((resolve) => {
    currentUser = null;
    resolve();
  });
}

export function getCurrentUser(): Promise<{ id: string; username: string } | null> {
  return Promise.resolve(currentUser);
}

export function register(username: string, password: string): Promise<{ id: string; username: string }> {
  return new Promise((resolve, reject) => {
    // 模拟注册逻辑
    if (username && password) {
      currentUser = { id: '2', username };
      resolve(currentUser);
    } else {
      reject(new Error('Invalid input'));
    }
  });
}
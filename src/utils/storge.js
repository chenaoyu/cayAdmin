const storage = {
  // 获取存储的值
  get: function (key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value); // 尝试解析JSON
    } catch (e) {
      return value; // 如果解析失败，返回原值
    }
  },

  // 设置存储的值
  set: function (key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value); // 对象转为JSON字符串
    }
    localStorage.setItem(key, value);
  },

  // 删除存储的值
  del: function (key) {
    localStorage.removeItem(key);
  },

  // 清除所有存储的值
  rem: function () {
    localStorage.clear();
  },
};
export {storage}
// // 使用示例
// // 设置值
// storage.set("username", "JohnDoe");
// storage.set("user", { name: "JohnDoe", age: 30 });

// // 获取值
// console.log(storage.get("username")); // 输出: JohnDoe
// console.log(storage.get("user")); // 输出: { name: 'JohnDoe', age: 30 }

// // 删除值
// storage.del("username");
// console.log(storage.get("username")); // 输出: null

// // 清除所有值
// storage.rem();
// console.log(storage.get("user")); // 输出: null

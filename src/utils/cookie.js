var cookie = {
  // 存储 cookie 的函数
  set: function (name, value, minutesToExpire) {
    const expiration = new Date();
    expiration.setTime(expiration.getTime() + minutesToExpire * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expiration.toUTCString()};path=/`;
  },

  // 获取 cookie 的函数
  get: function (name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === " ")
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  },

  // 删除 cookie 的函数
  del: function (name) {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
};
export { cookie };
// // 示例用法
// var userId = cookie.get('user_id');  // 获取 cookie
// console.log("User ID from cookie: " + userId);
// cookie.del('user_id');  // 删除 cookie
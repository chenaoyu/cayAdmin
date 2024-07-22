import { get, post } from "./index.js";

// 登录
const loginAPI = (data) => post("/Card/login", data);

// 获取名下卡列表
const getCardAPI = () => get("/Card/getCard");

export { loginAPI, getCardAPI };

import axios from "axios";
const clientSecret="c388f0acbc78fa3807b60692d30393e9640573f8"
const accessToken="9016bdae18c4421a666a86d39141a260924980cc"
const clientId="1793135a7881f8a"
const baseUrl="https://api.imgur.com/3"

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
axios.defaults.baseURL ="https://api.imgur.com/3"

export const mainAxios = axios.create({
  baseUrl,
});
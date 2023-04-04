import axios from "axios";

const clientId="1c9f528903622cf"
const clientSecret="96230025123de9a7d0c04605fb26c6ddaf2da1af"
const accessToken="f3f535aa4e7fe7db123d6a2140b362f93206d240"

const baseUrl="https://api.imgur.com/3"
axios.defaults.baseURL ="https://api.imgur.com/3"
axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

export const mainAxios = axios.create({
  baseUrl,
});
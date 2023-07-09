import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

import App from "./App";
import "./index.css";

dayjs.locale("zh-cn");

const root = document.getElementById("root");

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  root
);

import React, { Component } from "react";

import { Card } from "antd";

import "./index.less";

export default class Lofin extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <Card
            style={{
              width: 400,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    );
  }
}

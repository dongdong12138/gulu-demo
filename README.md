# 轱辘 - 一个 Vue UI 组件
作者：BarryDong

[![Build Status](https://www.travis-ci.org/dongdong12138/gulu-demo.svg?branch=master)](https://www.travis-ci.org/dongdong12138/gulu-demo)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box。（IE8 及以上浏览器支持）
    
    ```css
    *,
    *::before,
    *::after { box-sizing: border-box; }
    ```
    
    你还需要设置默认颜色等变量（后续会改）（IE 15及以上支持）
    ```css
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    
2. 安装 gulu
    ```npm
    npm i --save gulu
    ```
    
3. 引入 gulu
    ```vue
    import {Button, ButtonGroup, Icon} from 'gulu-barrydong'
    import '../node_modules/gulu-barrydong/dist/index.css'
    
    
    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
    }
    ```
    
4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1256486_x3z4l3y6yeg.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 安装

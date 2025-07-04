### 引入 Vue.js ，建立 Vue 的實體物件
1. 匯入 Vue3
2. 使用 Vue 建立 APP
3. app 掛勾到 div #app


### 根據 HTML 頁面需求建立 Vue 的 data
vue data 包括 物品名稱 物品數量 購物清單


### 用 v-model ，將 Vue data 與 HTML 做雙向綁定
div 裡面有 form ， 可以輸入物品名稱與物品數量，還有新增到購物清單的按鈕
form 的輸入跟 vue 的 data 雙向綁定。


### 根據事件需求，建立 Vue 的 methods
當按下新增物品按鈕，會執行 vue 的 新增物品的方法
新增物品方法中，會將物品名稱跟物品數量加到購物清單
將物品名稱與物品數量清空


### 使用模板 v-for 與 HTML 模板語法更新 list
使用 html 清單顯示 vue data ，購物清單中的物品名稱與物品數量，中間用逗號隔開
# SearchRes
[js] Search results array.

### Install
```
npm install kc-search-res
```

### Use
```js
var searchRes = require('./search-res');
var arr = [
    { a: 'hi', b: 'world'},
    { a: 'hello', b: 'world'},
    { a: 'goodbye', b: 'world'},
    { a: 'byebye', b: 'world'}
];
var res = searchRes(arr, 'bye');
console.log(res);
```

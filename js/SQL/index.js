/*
 * @Author: Zzceaon
 * @Date: 2020-07-01 21:39:12
 * @LastEditTime: 2020-07-01 22:27:13
 * @LastEditors: Please set LastEditors
 * @Description: JS模拟SQL
 * @FilePath: \Course\js\SQL\index.js
 */ 
const users = [
  {id: 0, name: 'wxj', age: 18, sex: 'male'},
  {id: 1, name: 'john', age: 28, sex: 'male'},
  {id: 2, name: 'bob', age: 33, sex: 'male'},
  {id: 3, name: 'tom', age: 22, sex: 'male'},
  {id: 4, name: 'alice', age: 18, sex: 'female'},
  {id: 5, name: 'rihana', age: 35, sex: 'female'},
  {id: 6, name: 'sara', age: 20, sex: 'female'}
];
// SQL 业务能力封装起来
// es5 function 类
// 抽象
function SQL(table) {
  this.table = table;  // 数据源
  // 结果的保存变量 当下的结果, 保存每一步的操作过后的结果
  this._result = null;  // 结果 挂载this 对象属性 中间结果
  this._getRows = function() {
    return this._result ? this._result : this.table;
  }
}
// 条件动作
SQL.prototype.where = function(predicate) {
  // filter
  // console.log(predicate);
  var rows = this._getRows();
  // 如果是数组的话
  if (Array.isArray()) {
    this._result = rows.filter(predicate);
  } else {
    // object
    // 拿出每一个数组, filter, 返回的任然是 object
    // console.log(Object.keys(rows));
    this._result = Object.keys(rows)
      .reduce(function(groups, group) {
        groups[group] = rows[group].filter(predicate);
        return groups;
      }, {})
  }
  return this;
}
SQL.prototype.groupBy = function(key) {
  var rows = this._getRows();
  // 分组 reduce
  // 一个结果数组分成一个json object
  this._result = rows.reduce(function(groups, row) {
    // console.log(groups, row);
    var group = row[key];
    if (!groups[group]) {  // 总有第一次
      groups[group] = [];
    }
    groups[group].push(row);
    return groups;
  }, {})  // 初始值
  // console.log(this._result);
  return this;
}
SQL.prototype.getResult = function() {
  return this._result;
}
var sql = new SQL(users)
// filter: true / false
var predicate = function(row) {
  return row.age < 30;
}
var result = sql
  .groupBy('sex')  // 链式调用
  .where(predicate)
  .getResult();
console.log(result);
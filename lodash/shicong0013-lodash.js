var shicong0013 = {
  chunk: function (array, size = 1) {
    var arr = []
    for (var i = 0; i < array.length;) {
      let temp = [];
      for (var j = 0; j < size && i < array.length; j++, i++) {
        temp.push(array[i]);
      }
      arr.push(temp);
    }
    return arr;
  },
  compact: function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i]);
      }
    }
    return result;
  },
  difference: function (array, ...values) {
    var result = [];
    var diff = [];
    if (values.length > 1) {
      for (var k = 0; k < values.length; k++) {
        diff.push(...values[k]);
      }
    } else {
      diff.push(...values[0]);
    }
    for (var i = 0; i < array.length; i++) {
      //result.push(diff.every((element => element != array[i])));
      let temp = diff.every(x => x != array[i]);
      if (temp) {
        result.push(array[i]);
      }
    }
    return result;
  },
  differenceBy: function (array, ...values) {
    let diff = values;
    let result = [];
    //当数组的最后一个参数位数组时说明没有传入检查元素的函数
    if (!Array.isArray(values.at(-1))) {
      diff = values.slice(0, -1);
      let f = values.slice(-1);
    }
    //展平数组
    diff = diff.flat();
    if (typeof f == 'function') {
      let temp = diff.every(x => f(x) != f(array[i]));
      if (temp) {
        result.push(array[i]);
      }
    } else {
      result = shicong0013.difference(array, diff);
    }
    return result;
  },
  drop: function () { },
  dropWhile: function () { },
  dropRight: function () { },
  dropRightWhile: function () { },
  fill: function () { },
  findIndex: function () { },
  findLastIndex: function () { },
  flatten: function () { },
  flattenDeep: function () { },
  flattenDepth: function () { },
  fromPairs: function () { },
  head: function () { },
  indexOf: function () { },
  initial: function () { },
  intersection: function () { },
}

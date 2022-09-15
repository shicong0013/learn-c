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
      var f = values.at(-1);
    }
    //展平数组
    diff = diff.flat();
    if (typeof f == 'function') {
      for (var i = 0; i < array.length; i++) {
        let temp = diff.every(x => f(x) != f(array[i]));
        if (temp) {
          result.push(array[i]);
        }
      }
    } else {
      result = shicong0013.difference(array, diff);
    }
    return result;
  },
  drop: function (array, n = 1) {
    if (n >= array.length) {
      return [];
    }
    let result = [];
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result;
    //return array.slice(n);
  },
  dropRight: function (array, n = 1) {
    if (n >= array.length) {
      return [];
    }
    let result = [];
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result;
    return n > array.length ? [] : array.slice(0, array.length - n);
  },
  dropWhile: function () { },
  dropRightWhile: function () { },
  fill: function (array, value, start = 0, end = array.length) {
    var arr = array.slice();
    for (var i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },
  findIndex: function (array, predicate, fromIndex = 0) {
    if (typeof predicate == 'function') {
      for (var i = fromIndex; i < array.length; i++) {
        if (predicate(array[i])) {
          return i;
        }
      }
    }
    return -1;
  },
  findLastIndex: function () { },
  flatten: array => {
    let result = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j]);
        }
      } else {
        result.push(array[i]);
      }
    }
    return result;
  },
  flattenDeep: function (array) {
    return array.reduce((result, it) => {
      if (Array.isArray(it)) {
        return result.concat(this.flattenDeep(it));
      }
      return result.concat(it);
    }, [])
  },
  flattenDepth: function () { },
  fromPairs: function () { },
  head: function () { },
  indexOf: function () { },
  initial: function () { },
  intersection: function () { },
  identity: function (value) {
    return value;
  }
}

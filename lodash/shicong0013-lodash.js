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
  }
}

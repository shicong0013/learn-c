var shicong0013 = {
  chunk: function (array, size = 1) {
    var arr = []
    for (var i = 0; i < array.length;) {
      let temp = [];
      for (var j = 0; j < size; j++, i++) {
        temp.push(array[i]);
      }
      arr.push(temp);
    }
    return arr;
  },
}

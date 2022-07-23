function getValue () {
  var item = [];
  var newValue = document.getElementsByTagName("input");
  for (var i = 0; i < newValue.length; i++) {
    if (newValue[i].checked) {
      item.push(newValue[i].value);
    }
  }
  return item;
}

function setClass () {
  var classArr = getValue();
  classArr = classArr.join(" ");
  var table = document.getElementsByTagName("table")[0];
  table.setAttribute("class", classArr);
}
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", setClass)
}


// You should implement your task here.

module.exports = function towelSort (matrix) {
    if  (matrix && matrix.length > 0){
    matrix.map(function (value, index) {
      if (index % 2 != 0) {
        value.reverse();
      }
    });
    let arr = [].concat(...matrix);
    return arr;
  }
  return [];
}

function Boling() {
}


Boling.prototype.total = function(array) {
    var total = 0;
    for (var a in array) {
      total += array[a];
    }
    return total;
}

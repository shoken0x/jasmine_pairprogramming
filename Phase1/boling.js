function Boling() {
this.l1=0;
this.l2=0;
this.l3=0;
this.l4=0;
this.l5=0;
this.l6=0;
this.l7=0;
this.l8=0;
this.l9=0;
this.l10=0;

}


Boling.prototype.total = function(array) {
    var total = 0;
    for (var a in array) {
      total += array[a];
    }
    return total;
}
Boling.prototype.set1 = function(list) {
  this.l1 = list;
}

Boling.prototype.set2 = function(list) {
  this.l2 = list;
}
Boling.prototype.set3 = function(list) {
  this.l3 = list;
}
Boling.prototype.set4 = function(list) {
  this.l4 = list;
}
Boling.prototype.set5 = function(list) {
  this.l5 = list;
}
Boling.prototype.set6 = function(list) {
  this.l6 = list;
}
Boling.prototype.set7 = function(list) {
  this.l7 = list;
}
Boling.prototype.set8 = function(list) {
  this.l8 = list;
}
Boling.prototype.set9 = function(list) {
  this.l9 = list;
}
Boling.prototype.set10 = function(list) {
  this.l10 = list;
}

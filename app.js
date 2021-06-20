var g = 0;
var sum = 0;

function toDiscount() {
  var price = Number(document.getElementById("myPrice").value);
  var discount = Number(document.getElementById("myDiscount").value);
  this.price = price;
  this.discount = discount;

  if(this.discount>100){
    alert("สินค้าลดได้ไม่เกิน 100 % กรุณากรอกใหม่")
    return;
  }
  g = (this.discount / 100) * this.price;

  sum = this.price - g;

  document.getElementById("sum").innerHTML =
    "สินค้าชิ้นนี้ลดรา " + g + "<br>" + " ราคาที่ต้องจ่าย " + sum;
}

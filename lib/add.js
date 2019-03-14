function add(a,b) {
  // 实现该函数
  var a1 = a.split('').reverse();
  var b1 = b.split('').reverse();
  var c1 = [0];
  var d = 0;

  var len = (a1.length >= b1.length)?a1.length:b1.length;

  for(var i=0;i<len;i++){
    d = parseInt(a1[i]||0) + parseInt(b1[i]||0);
    if(d<=9){
      if(c1[i]){
        c1[i] += d;
      }else{
        c1[i] = d;
      }
    }else{
      if(c1[i]){
        c1[i] += d%10;
      }else{
        c1[i] = d%10;
      }
      c1[i+1] = 1; 
    }
  }
  return c1.reverse().join('');
}

module.exports = add
 const label= document.getElementById("LABEL");
 const decrease = document.getElementById("btn1");
 const reset = document.getElementById("btn2");
 const increase = document.getElementById("btn3");
  let count = 0;

decrease.onclick=function() {
  count--;
  label.textContent=count;
}
reset.onclick= function(){
    count=0;
  label.textContent=count;
}
increase.onclick=function(){
    count++;
    label.textContent=count;
}
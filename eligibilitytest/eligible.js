let input ;
document.getElementById("btn").onclick=function(){
    input= document.getElementById("input").value;
    if(input>=20){
        document.getElementById("head").textContent = " you are eligible"
    }else{
        document.getElementById("head").textContent = `you are not eligible`
    }

}


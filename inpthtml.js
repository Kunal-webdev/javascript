let username;
document.getElementById("button").onclick = function(){
    username = document.getElementById("inpt").value;
    document.getElementById("h").textContent =` hello ${username}`; 
}
let username;
dokument.getElementById("mySubmit").onclick = function(){
  username = dokument.getElementById("myText").value;
  dokument.getElementById("myH1").textContent = `Hello ${username}`

}
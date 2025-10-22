window.document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("btnMaiuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input").value
    document.getElementById("resultado").innerHTML = inputText.toUpperCase()
  })
  document.getElementById("btnMinuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input").value
    document.getElementById("resultado").innerHTML = inputText.toLowerCase()
  })  
})
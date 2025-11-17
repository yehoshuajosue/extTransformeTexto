window.document.addEventListener("DOMContentLoaded", function(){
  function capitalizar(texto){
<<<<<<< HEAD
    texto = texto.toLowerCase()

    return texto.replace(/(^|[\.!\?]\s+|\n+)([a-záéíóúâêôãõç])/g, (_, antes, letra) => antes + letra.toUpperCase())
=======

>>>>>>> 48db4b8d90e42b17d0ec57301f8c36b1587de1ad
  }
  const entrada = document.getElementById("input");
  const resultado = document.getElementById("resultado");
  function limpar() {
    entrada.value = "";
    resultado.value = "";
  }
  document.getElementById("btnMaiuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input").value
    document.getElementById("resultado").value = inputText.toUpperCase()
  })
  document.getElementById("btnMinuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input").value
    document.getElementById("resultado").value = inputText.toLowerCase()
  })
  document.getElementById("capitalizar").addEventListener("click", function(){
      let inputText = entrada.value;
      resultado.value = capitalizar(inputText);
  });
  document.getElementById("clear").addEventListener("click", limpar);  
<<<<<<< HEAD
})
=======
})
>>>>>>> 48db4b8d90e42b17d0ec57301f8c36b1587de1ad

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(function(){
  // generare 5 numeri casuali e farli vedere con un alert
  var listaNumeri = [];
  var numMin = 0;
  var numMax = 10;
  var listaUser= [];

  for (var i = 0; i < 5; i++) {
    var selectNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    while (listaNumeri.includes(selectNumber)) {
      var selectNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    }
    listaNumeri.push(selectNumber);

    alert(listaNumeri);
  }
  // countdown di 30 secondi
  var display = $(".display");
  var secondi = 5;

  var intervallo = setInterval(function(){
    if (secondi > 0) {
      display.text(secondi);
      secondi--;

      // fare 5 prompt per cercare di indovinare i 5 numeri visti in precedenza
    } else {
      clearInterval(intervallo);
      for (var i = 0; i < 5; i++) {
        var numero = parseInt(prompt("prova a ricordare, inserisci i numeri che hai visto prima"))
        if (listaNumeri.includes(numero)) {
          listaUser.push(numero);
        }
      }
      console.log(listaUser);
      document.getElementById('stampa').innerHTML = "Hai indovinato i seguenti numeri " + listaUser;
    }
  }, 1000);

  // stampare i prompt uguali ai numeri gen casualmente



});

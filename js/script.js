// Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100.


// Selezionare list per inserimento box
const containerBox = document.querySelector('.list');

// Creo un ciclo for per l'inserimento dei box (in principio testo 15 poi passerò a 100)
for (let box = 1; box <= 100; box++){

    // Se è sia un multiplo di tre che di cinque lo coloro con la classe box-3-5 e inserisco la scritta fizzbuzz
    if (box % 3 == 0 && box % 5 == 0){
        let boxToInsert = `<li class="box box-3-5">fizzbuzz</li>`;
        containerBox.innerHTML += boxToInsert;
    }
    // Se è un multiplo di 3 lo coloro con la classe box-3 e inserisco Fizz
    else if(box % 3 == 0){
        let boxToInsert = `<li class="box box-3">fizz</li>`;
        containerBox.innerHTML += boxToInsert;
    } 
    // Se è un multiplo di 5 lo coloro con la classe box-5 e inserisco buzz
    else if (box % 5 == 0){
        let boxToInsert = `<li class="box box-5">buzz</li>`;
        containerBox.innerHTML += boxToInsert;
    }  
    // Altrimenti inserisco il numero corrispondente e lascio il colore box.
    else{
        let boxToInsert = `<li class="box">${box}</li>`;
        containerBox.innerHTML += boxToInsert;
    }
}











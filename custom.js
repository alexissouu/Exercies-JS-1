//  let test = window.alert("Hello world!");
// alert("Hello world!");

// let lastName = 'Noms : Doe';
// let firstName = 'Prénom : John';
// let city = 'Ville : New-york';

// alert(lastName+'\n'+firstName+'\n'+city+'\n');


// let m = prompt("Qui est tu ?","");
// alert(`Bonsoir, ${m} !`);


// let lastName = prompt("Ton Nom ?","");
// let firstName = prompt("Ton Prénom ?","");
// let city = prompt("T'habite ou !","");
// alert(lastName+'\n'+firstName+'\n'+city+'\n');



// function myFunction() {
//     let input = document.getElementById("firstNumber").value;
//     let input1 = document.getElementById("secondNumber").value;

//     alert(input1*Math.trunc(input));
// }

// function myFunction() {
//     let input = document.getElementById("firstNumber").value;
//     let input1 = document.getElementById("secondNumber").value;

//     alert(input1 % input);
//  }

// function Calcul() {
//     let input = document.getElementById("shoeSize").value;
//     let input1 = document.getElementById("yearOfBirth").value;

//     let phase1 = input * 2 ;

//     let phase2 = phase1 + 5 ;

//     let phase3 = phase2 * 50 ;
    
//     let phase4 = phase3 - input1 ;

//     let result = phase4 + 1766 ;

//     alert(result);
// }

// function check(){
//     var nbr;
//     nbr = Number(document.getElementById("age").value);
//     if(nbr < 18)
//     {
//        alert("Vous n'êtes pas un adulte");
//     }
//     else
//     {
//        alert("Vous êtes un adulte");
//     }
// }

// function table_multiplication(nombre)
// {

// var i;
// for (i=0; i<=10; i++) {
//     resultat=nombre*i;
//     document.write(nombre+" x "+i+"="+nombre*i+"<br>");
//                       }
// }
// nombre=window.prompt("Entrez le numéro de la table:","Saisir un entier ici");
// table_multiplication(nombre);


// let string = window.prompt(`Entre un mot`)

// console.log(string)

// console.log(string.split(''))

// string.split('').forEach(function (letter) {
//     console.log(letter)
    
// })

// for (let index = 0; index < string.length; index++) {
 
// }



// function check(){
//      var nbr;
//      nbr = Number(document.getElementById("nbr").value);
//      if(nbr < 5)
//      {
//         alert("Inférieure a 5");
//      }
//      else if (nbr > 5)
//      {
//         alert("Supérieur a 5");
//      }
//      else if (nbr === 5)
//      {
//         alert("Egale a 5")
//      }
//  }

function check(){
    let nbr = document.getElementById("nbr").value;
     alert(Math.pow(nbr, 2));
}



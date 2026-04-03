// // Variables
// let maVar = "La valeur" // Valeur qui change
// const maConst = "Autre valeur" // Ne changera jamais

// // Structures conditionnelles
// // if (condition et condition ou (condition et condition)){}
// if(maVar == "titi"){
//     console.log("C'est ok")
// } else if(maVar == "La valeur") {
//     console.log("On est bon")
// } else {
//     console.log("Tant pis")
// }

// switch(maVar){
//     case "titi": 
//         console.log("C'est ok")
//     break;
//     case "La valeur":
//         console.log("On est bon")
//     break;
//     default:
//         console.log("Tant pis")
// }

// let age = 22
// if (age > 16 && age < 18){
//     console.log("Pas encore majeur")
// } else if (age > 18 && age < 30){
//     console.log("C'est bon t'es majeur")
// }

// Ternaire : if else condensé
// qui à pour objectif d'attribuer une valeur à une variable
// variable = (condition) ? valeur si vrai : valeur si faux
// const age = 12
// const information = age >= 18 ? "Majeur" : "Mineur"

// // Boucles
//     // compteur; condition; incrémentation/décrémentation
// for(let i = 0; i < 100; i = i + 2){
//     console.log(`Nombres pair : ${i}`)
// }

// age = 25
// let prenom = "Jean-Louis"
// let nom = "Errante"

// console.log("Bonjour je m'appelle "+prenom+" et mon nom de famille c'est "+nom+", j'ai "+age+" ans")

// console.log("Bonjour je m'appelle "+prenom+" "+nom+", j'ai "+age+" ans")

// console.log(`Bonjour je m'appelle ${prenom} ${nom}, j'ai ${age} ans.`)

// // Boucle while
// // Amorçage, la variable de boucle
// let i = 1

// while(i < 100){
//     console.log(`Nombres impair : ${i}`)
//     // Modification de la condition
//     i += 2
//     // i = i + 2 → équivalent à la ligne au dessus
// }

// let valeur = "huhu"

// while(valeur != "ahah"){
//     console.log("La valeur est différente !")

//     valeur = "ahah"
// }

// // DRY = Don't Repeat Yourself
// // Fonctions

// console.log("Bonjour Jean-Louis")
// console.log("Bonjour Gérard")
// console.log("Bonjour Matthieu")

// function DireBonjour(prenom){
//     console.log(`Bonjour ${prenom}`)
// }
// DireBonjour("Jean-Louis")
// DireBonjour("Gérard")

// // Fonction fléchée
// const sayHello = (prenom) => {
//     console.log(`Bonjour ${prenom}`)
// }
// sayHello("Matthieu")

// const h1 = document.querySelector('h1')

// h1.innerHTML = "Totoo <br/> dfghjk;"
// h1.textContent = "Titi <br/> dfghjk;"

const monPremierArticle = `
        <article>
            <h2>TITRE</h2>
            <div>
                <div>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </div>
                <a href="#">Lien</a>
            </div>
        </article>
`
document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("afterbegin", monPremierArticle)

// beforebegin
// afterbegin
// beforeend
// afterend

const h1 = document.querySelector('h1')
let count = 0
const title = h1.textContent
// h1.addEventListener('type événement à observer', fonction à lancer)
h1.addEventListener('click', () => {
    count++
    h1.textContent = `${title} ${count}`
})

// localStorage.setItem("clé", valeur au format STRING)
localStorage.setItem('prenom', "Jean-Louis")
// localStorage.getItem("clé")
const prenom = localStorage.getItem('prenom')
console.log(prenom)

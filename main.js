const prompt = require('prompt-sync')()

const candidats = [{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
}];
// modifier candidat

function modifiercandidat(array){
    let cin = prompt("ajouter cin de candidat : ")
    let nom = prompt("ajouter nom de candidat : ")
    let prenom = prompt("ajouter prenom de candidat : ")
    let partipolitique = prompt("ajouter parti politique de candidat : ")
    let age = Number(prompt("ajouter age de candidate : "))
    let electeurs = []
        array.push({cin: cin, nom: nom, prenom: prenom, partiPolitique: partipolitique, age: age, electeurs: electeurs})
}

// Ajouter un nouveau candidat

function addcandidat(array){
    let number = Number(prompt(`\n1. zid rir candida wa7d     2. zid ktar mn candida\nkhtar ra9m diyalk : `))
    let i = 0
    switch(number){

    case 1:
        modifiercandidat(array)
        break
    case 2:
        let number2 = prompt("ch7al bghiti tzid mn candidat : ")
        do{
            console.log(`\ndkhal lma3lomat diyal candida : ${i + 1}\n`)
            modifiercandidat(array)
            i++
        }while(i < number2)
    break
    } 
    }
let add = addcandidat(candidats)
console.log(add)
const prompt = require('prompt-sync')()

//list diyal les candidats
const candidats = [{
    cin: "AB12456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ['ajttk','aj2323r','asdfwe']
},
{
    cin: "AB12346",
    nom: "Boush",
    prenom: "mohammed",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ['ajttk','23r23ior3','2wr323r','2wr3k23r']
},{
    cin: "AB123456",
    nom: "amzyan",
    prenom: "zakaria",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ['ajttk','2r3kkkkk23']
},];

//function bach ntcheki wach candidat deja kayn ola la baach naydkhalch joj diyal lmarat


// function bach Afficher la liste des candidat
function afficherlist(choix){
    console.log(`____________________ choisi une nambre pour continue ___________________
1. pour aficher list des candidat
________________________________________________________________________
2. pour aficher les candidats par nombre de votes
________________________________________________________________________
3. afficher uniquement les candidat d'un parti politique specifique.
________________________________________________________________________`)
    choix = Number(prompt("votre choix : "))

    switch(choix){
        case 1:
            for(let i = 0; i < candidats.length; i++){
        console.log(`____________________ Candidat ${i + 1} _________________________________
Identifiant     : ${candidats[i].cin}
________________________________________________________________________
nom             : ${candidats[i].nom}
________________________________________________________________________
prenom          : ${candidats[i].prenom}
________________________________________________________________________
Parti politique : ${candidats[i].partiPolitique}
________________________________________________________________________
Age             : ${candidats[i].age}
________________________________________________________________________
Nombre de votes : ${candidats[i].electeurs.length} notes
________________________________________________________________________  \n\n`)
    }
    prompt("clicke sur entree pour retourne aux menu")
    break
    case 2:
        let votes = []
        for(let i = 0;i < candidats.length; i++){
            if(!(votes.includes(candidats[i].electeurs.length)))
            votes.push(candidats[i].electeurs.length)
        }
        for(let i = 0;i < votes.length; i++){
            for(let j = i+1; j < votes.length; j++){
                if(votes[i] < votes[j]){
                    let temp = votes[i]
                    votes[i] = votes[j]
                    votes[j] = temp
                }
            }
        }
        for(let i = 0 ; i < votes.length; i++){
            for(let j = 0 ; j< candidats.length; j++){
                if(candidats[j].electeurs.length == votes[i])
                    console.log(`${candidats[j].nom} : ${votes[i]}`)
            }
        }
        prompt("clicke sur entree pour retourne aux menu")
        break
    case 3:
        console.log("afficher uniquement les candidat d'un parti politique specifique.(no't available in this momment)")
        prompt("clicke sur entree pour retourne aux menu")
        break
    }
    
}
// function diyal list bach tzid candidat
function candidat(){
    let candid = {}
    candid.cin = prompt("ajouter cin de candidat : ")
    candid.nom = prompt("ajouter nom de candidat : ")
    candid.prenom = prompt("ajouter prenom de candidat : ")
    candid.partipolitique = prompt("ajouter parti politique de candidat : ")
    candid.age = Number(prompt("ajouter age de candidate : "))
    candid.electeurs = []
    candidats.push(candid)
}
// had fanction bach nzid les candidat f programe
function nouveaucandidat(){
    console.log(`\nle minimum nombre s'est 1 | 0. pour retourne aux menu |\n`)
    let number = Number(prompt(`ecrie comme bient de candida doit ajouter : `))
             if(number === 0) {
            return
        }
        if(number > 0 ){
            for(let j = 0; j < number; j++ ){
            console.log(`\najouter nouveau candidat : ${j + 1} | ${number}\n\n`)
            candidat()
            }
        }
        else{
            prompt("Choix invalide, clicke entree pour continue")
        }
    }

// function bach tvote 3la chi candida
function votercandidat(){
    console.log('entre votre CIN pour vote ')
    let cin = prompt(`entre votre CIN : `)
    for(let i = 0; i < candidats.length; i++){
        for(let j = 0; j < candidats[i].electeurs.length; j++){
            if(cin == candidats[i].electeurs[j]){
                console.log(' Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau')
                prompt("clicke sure entree pour returne aux menu")
                return
                }
            
                }
            }
    let cincandidat = prompt('entre CIN de candidat pour vote : ')
    for(let i = 0; i < candidats.length; i++){
        if(cincandidat == candidats[i].cin){
            candidats[i].electeurs.push(cin)
        }
    }
    console.log("les information n'apas corecte ")
    prompt("vote termine, clicke sure entree pour retourne aux menu.")
    }

// function bach supprimer candidat mn cin diyalo

function supprimercandidat(){
    let cin = prompt("entrer le cin du candidat pour supprimer : ")
    for(let i = 0; i < candidats.length; i++){
        if(candidats[i].cin == cin){
            candidats.splice(i, 1);
            console.log(`candidat ${candidats[i].nom} ${candidats[i].prenom} supprime`)
            prompt("clicker sur entree pour retourne aux menu")
            return
        }
    }
    console.log("aucan candidat")
    prompt("clicke sur entree pour retourne aux menu")
}
//function bach modifier les information diyal candidat

function modifier(){
    let cin = prompt('entre cin pour modifier les information de candidat : ')

    for(let i = 0; i < candidats.length ; i++){
        if(candidats[i].cin == cin){
            candidats[i].partiPolitique = prompt(`modifier parti politique de candidats ${candidats[i].nom} ${candidats[i].prenom} : `)
            candidats[i].age = prompt(`modifier l'age de candidats  ${candidats[i].nom} ${candidats[i].prenom} : `)
            return
        }
    }
    console.log("aucan candidat")
    prompt("clicke sur entree pour retourne aux menu")

}

// menu diyal program
function menu(){
let number = 0
while(number != 8){
     console.log(`\n               Gestion des Élections et Listes Électorales au Maroc
______________________________________________________________________________________________
|1. Ajouter un nouveau candidat                    2. afficher la list des candidats          |
|3. Voter pour un candidat                        4. Modifier les informations d'un candidat  |
|5. Supprimer un candidat                         6. Rechercher des candidats                 |
|7. Statistiques de l'election                    8. Quite                                    |
|_____________________________________________________________________________________________|

`)
    number = Number(prompt("Choisi une nambre dans la list : "))
    console.log(`\n\n`)
switch(number) {
    case 1:
        nouveaucandidat()
        break
    case 2:
        afficherlist()
        break
    case 3:
        votercandidat()
        break
    case 4:
        modifier()
        break
    case 5:
        supprimercandidat()
        break
    case 6:
        break
    case 7:
        break
    case 8:
        console.log("exit")
        return
    default:
        console.log(`Choix invalide`)
        prompt("clicke sure entree pour continue")
        break
}
}

}
menu()
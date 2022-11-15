




console.log("Almafal loaded");
let idezetek;

idezetek.push(new Idezet("Annamária", "almafa"));

class Idezet{
    #name;
    #quote;

    constructor(name, quote){
        this.#name = name;
        this.#quote = quote;
    }

    getName(){
        return this.#name
    }
    getQuote(){
        return this.#quote;
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('osszesIdezetLista').value = "Almafa";
    console.log("Almafa loaded");
    async () => {
        let response = await fetch('/quotes.json'); 
        let eredmeny = await response.json();

        console.log(response);
        
    }


});

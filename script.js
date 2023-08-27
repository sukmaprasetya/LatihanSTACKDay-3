async function getjoke(){
    let res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    let jokes = await res.json();
    return jokes;
}

async function tambahHTML(){
    let jokes = await getjoke();

    let divBaru = document.createElement('div');
    divBaru.innerHTML = jokes.fact;

    let joke = document.getElementById('joke');
    joke.appendChild(divBaru);
}
tambahHTML();

window.onload = () => {
    // listens for the click
    document.querySelector('#button').addEventListener('click', () => {
        // changes the text
        document.querySelector("#blah").innerHTML = randomNumberGiver();
    });

    console.log("Hello");
};


let randomNumberGiver = () => {
    let pronoun = ["The", "Our"];
    let adj = ["great", "big"];
    let noun = ["bird", "racoon"];
    let verb = ["ate", "crushed"];
    let pronoun2 = ["the", "our"];
    let noun2 = ["dog.", "cat."];

    let randomPronoun = Math.floor(Math.random() * pronoun.length);
    let randomAdj = Math.floor(Math.random() * adj.length);
    let randomNoun = Math.floor(Math.random() * noun.length);
    let randomVerb = Math.floor(Math.random() * verb.length);
    let randomPronoun2 = Math.floor(Math.random() * pronoun2.length);
    let randomNoun2 = Math.floor(Math.random() * noun2.length);

    return pronoun[randomPronoun]
        + " " + adj[randomAdj]
        + " " + noun[randomNoun]
        + " " + verb[randomVerb]
        + " " + pronoun2[randomPronoun2]
        + " " + noun2[randomNoun2];
};
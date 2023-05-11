
window.onload = () => {
    // listens for the click
    document.querySelector('#button').addEventListener('click', () => {
        // changes the text
        document.querySelector("#blah").innerHTML = randomNumberGiver();
    });

    console.log("Hello");
};


let randomNumberGiver = () => {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return who[randomWho]
        + " " + action[randomAction]
        + " " + what[randomWhat]
        + " " + when[randomWhen]
};
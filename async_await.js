URL = "https://api.quotable.io/random";

let result1 = null;
let result2 = null;

// return a promise that resolves after [ms] milliseconds
function sleep(ms) {
    return new Promise((res, rej) => {
        setTimeout(res,ms)
    })
}

function loadUsingPromise() {
    fetch(URL)
        .then(res => res.json())
        .then(json => result1 = json);
}

async function loadUsingAsyncAwait() {
    const result = await fetch(URL);
    const json = await result.json();
    return json;
}

/**
 

loadUsingAsyncAwait()
    .then(res => console.log(res))
    .then(res => loadUsingAsyncAwait())
    .then(res => console.log(res))
    .then(res => loadUsingAsyncAwait())
    .then(res => console.log(res))


 */
async function fetchRandomQuotes() {
    const quote1 = await loadUsingAsyncAwait();
    console.log(quote1);

    await sleep(5000);

    const quote2 = await loadUsingAsyncAwait();
    console.log(quote2);

    const quote3 = await loadUsingAsyncAwait();
    console.log(quote3);
}

// Loads random quotes until it gets a quote about God
async function fetchQuoteAboutGod(id) {
    while (true) {
        const quote = await loadUsingAsyncAwait();
        await sleep(1000);
        if (quote.content.toUpperCase().includes("GOD")) {
            console.log(id, "GOD like quote: ", quote.content);
            break;
        } else {
            console.log(id, "No god in this quote");
        }
    }
}

console.log("return value of normal function:", loadUsingPromise());
console.log("return value of async function:", loadUsingAsyncAwait());

// These calls will run concurrently
fetchQuoteAboutGod(1);
fetchQuoteAboutGod(2);
fetchQuoteAboutGod(3);
fetchQuoteAboutGod(4);
fetchQuoteAboutGod(5);


// How to use anonymous async functions
const arrowAwait = async () => {
    await fetchQuoteAboutGod(1);
}

const anonymousAwait = async function() {
    await fetchQuoteAboutGod(1);
}
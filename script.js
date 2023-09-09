// API Quote Machine

const fetchQuoteApi = () =>{
    document.getElementById('quote').innerText = '';
    document.getElementById('author').innerText = '';

    fetch('https://api.quotable.io/random')
    .then(res =>{
        return res.json();
    })
    .then(data => {
        document.getElementById('quote').innerText = data.content;
        document.getElementById('author').innerText = data.author;
    })
    .catch(error => console.log("Something went wrong :("));
}

console.log('Hello world!');

const API_URL = 'https://api.thecatapi.com/v1/images/search';



async function reload() {
    fetch(API_URL)
    .then(res => res.json())
    .then(dat => {
        const img = document.querySelector('img');
        img.src = dat[0].url;
    });
}
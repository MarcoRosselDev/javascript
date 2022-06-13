console.log('Hello world!');

const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(dat => {
        const img = document.querySelector('img');
        img.src = dat[0].url;
    });
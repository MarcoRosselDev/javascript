const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=a196477d-cc81-41c3-bc61-85544de3a482';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favorites?limit=2&api_key=a196477d-cc81-41c3-bc61-85544de3a482';



async function loadRandomCat() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');


    img1.src = data[0].url;
    img2.src = data[1].url;
}

async function loadFavoritesCat() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();

    console.log(data);
}

loadRandomCat();
loadFavoritesCat();
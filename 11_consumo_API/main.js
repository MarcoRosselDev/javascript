const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=a196477d-cc81-41c3-bc61-85544de3a482';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=a196477d-cc81-41c3-bc61-85544de3a482';

const spanError = document.getElementById('error');

async function loadRandomCat() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status;
    } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');


    img1.src = data[0].url;
    img2.src = data[1].url;
    }
    
}

async function loadFavoritesCat() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    }
}

async function saveFavoriteCats() {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: 'dje'
        }),
    });
    const data = await res.json();

    console.log('Save')
    console.log(res)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    }
}

loadRandomCat();
loadFavoritesCat();
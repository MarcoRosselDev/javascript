const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=a196477d-cc81-41c3-bc61-85544de3a482';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=a196477d-cc81-41c3-bc61-85544de3a482';
const API_URL_FAVORITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=a196477d-cc81-41c3-bc61-85544de3a482`;
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

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
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');


    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavoriteCat(data[0].id);
    btn2.onclick = () => saveFavoriteCat(data[1].id);
    }
    
}

async function loadFavoritesCat() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    } else {
        const section = document.getElementById('favoritesCats')
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Gatos favoritos');
        h2.appendChild(h2Text);
        section.appendChild(h2);

        data.forEach(mixi => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al gatito de favoritos');

            img.src = mixi.image.url
            img.width = 190;
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavoriteCat(mixi.id);
            article.appendChild(img);
            article.appendChild(btn);

            section.appendChild(article);

        });
    }
}

async function saveFavoriteCat(id) {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    const data = await res.json();

    console.log('Save')
    console.log(res)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    } else {
        console.log('Gato guardado en favoritos')
        loadFavoritesCat();
    }
}

async function deleteFavoriteCat(id) {
    const res = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
    });
    const data = await res.json();

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    } else {
        console.log('Gato eliminado de favoritos')
        loadFavoritesCat();
    }
}

async function uploadCatPhoto() {
    const form = document.getElementById('uploadingForm')
    const formData = new FormData(form);

    console.log(formData.get('file'))

    const res = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'X-API-KEY':'a196477d-cc81-41c3-bc61-85544de3a482',
        },
        body: formData,
    })
}

loadRandomCat();
loadFavoritesCat();

const pictrues = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// // ! FUNZIONI.......
// function changePic(target) {

//     // Rimuovo la classe active dall'immagine corrente
//     galleryFigures[currentActiveIndex].classList.remove('active');
//     thumbnailImages[currentActiveIndex].classList.remove('active');

//     if (target === 'next') {
//         // incremento l'inidce
//         currentActiveIndex++;

//         // ? controlliamo se siamo oltre l'array
//         if (currentActiveIndex === galleryFigures.length) currentActiveIndex = 0;

//     } else if (target === 'prev') {
//         // decrementro l'indice
//         currentActiveIndex--;

//         // ? controlliamo se siamo in negativo
//         if (currentActiveIndex < 0) currentActiveIndex = galleryFigures.length - 1;
//     } else {
//         currentActiveIndex = target;
//     }
//     // assegno la classe active col nuovo indice
//     galleryFigures[currentActiveIndex].classList.add('active');
//     thumbnailImages[currentActiveIndex].classList.add('active');
// }


// // ! OPERAZIONI INIZIALI.......
// // Recupero i bottoni
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');

// // Recupero la Gallery
// const gallery = document.querySelector('#carousel .gallery');

// // Recupero anche la galleria dei thumbnails
// const thumbGallery = document.querySelector('#thumbnails');

// let galleryElements = '';
// let thumbnailElements = '';


// pictrues.forEach((pictrue, i) => {
//     const img = `<img src="${pictrue.image}" alt="games_${i}">`;
//     thumbnailElements += img;

//     galleryElements += `
//         <figure>
//            ${img}
//            <figcaption>
//                 <h2>${pictrue.title}</h2>
//                 <h3>${pictrue.text}</h3>
//            </figcaption>
//         </figure>
//      `;
// });

// gallery.innerHTML = galleryElements;
// thumbGallery.innerHTML = thumbnailElements;


// // Recupero le immagini
// const galleryFigures = document.querySelectorAll('.gallery figure');
// // Recupero i thumbnails
// const thumbnailImages = document.querySelectorAll('#thumbnails img');

// // Metto la prima immagine come active
// let currentActiveIndex = 0;
// galleryFigures[currentActiveIndex].classList.add('active');

// // anche ai thumbnails
// thumbnailImages[currentActiveIndex].classList.add('active');




// // ! EVENTI DINAMICI.......
// // aggancio evento al bottone next
// next.addEventListener('click', function () {
//     changePic('next');
// });

// // aggancio evento al bottone prev
// prev.addEventListener('click', function () {
//     changePic('prev');
// });

// // Rendiamo cliccabili i thumbnails
// thumbnailImages.forEach((thumb, i) => {
//     thumb.addEventListener('click', function () {
//         changePic(i);
//     });
// });



// // for (let i = 0; i < thumbnailsImages.length; i++) {
// //     // recupero di volta in volta un thumb...
// //     const thumb = thumbnailsImages[i];

// //     thumb.addEventListener('click', function () {
// //         changePic(i);
// //     });
// // }


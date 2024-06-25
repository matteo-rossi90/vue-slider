
/*Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.*/

/*Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce */


//richiamare Vue
const { createApp } = Vue;

let slideshowInterval = 0;

createApp({
    
    //gestione dei dati in Vue
    data(){

        return {

            activeImage: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

        }
        
    },
    //gestione delle funzioni relative dello slider al click dell'utente
    methods:{

        //cliccando sulla freccia in basso
        nextImage(){
            //incrementare il valore al click e passare all'immagine successiva
            //per poi ritornare alla prima
            this.activeImage = (this.activeImage + 1) % this.slides.length;
            
        },
        //cliccando sulla freccia in alto
        prevImage() {
            //decrementare il valore al click e passare all'immagine precedente 
            //per poi ritornare all'ultima partendo dalla prima
            this.activeImage = (this.activeImage - 1 + this.slides.length) % this.slides.length; 
        },
        //fare in modo che al click di un'anteprima si visualizzi l'immagine in grande
        thumbClick(index){
            this.activeImage = index;
        },
        //slideshow automatico
        play: function () {
            let app = this;
            this.timer = setInterval(function () {
                app.nextImage();
            }, 3000);
        }

    },
    created: function () {
        this.play();
    }

}).mount('#app');
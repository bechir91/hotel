// this is a sticky menu so the user may always see to menu bar while scrolling through the browser


// message pour le choix de l'anglais
let eng = document.querySelector('.english');
eng.addEventListener ('click', ()=>{
    alert (` 🥸 OOPS! we were overwhelmed with work, at a point of forgetting to do the translation !!`);
})

// message pour le panier d'achat
let shop = document.querySelector('.shopping');
shop.addEventListener ('click', ()=>{
    alert (`Aucun produit n'a été séléctionné !`);
})

// message de la newsletter
let newsLt = document.querySelector('.newsLetter');
newsLt.addEventListener('click', ()=>{
    alert (`Votre demande a bien été enregistrée ! Desormais, vous êtes inscrit à la newsletter de Parimis hôtel !`);
})

// c'est pas 100% optimiser à revoir!!

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    let navbar = document.querySelector('.menu');
    let sticky = navbar.offsetTop;
    console.log(sticky);
    if(window.pageYOffset >= 312){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// function myFunction() {
// if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
// } else {
//     navbar.classList.remove("sticky");
// }

// menu burger

let navToggle = document.querySelector('.nav_toggle');
let burgerMenu = document.querySelector('.burger_list');

navToggle.addEventListener('click', () => {
document.body.classList.toggle('nav-open');
burgerMenu.classList.toggle('show');

});


// méthodes de Audrey
    // let counter = 1;
    //     setInterval(function(){
    //         document.getElementById('radio' + counter).checked = true;
    //         counter++;
    //         if(counter > 4){
    //             counter = 1;
    //         }
    //     }, 5000);



//   $( function() {
//  var myIndex = 0;
//     carousel();
//     function carousel() {
//         var i;
//         var x = document.getElementsByClassName("mySlides");
//         for (i = 0; i < x.length; i++) {
//             x[i].style.display = "none";
//         }
//         myIndex++;
//         if (myIndex > x.length) {
//             myIndex = 1
//         }
//         x[myIndex - 1].style.display = "block";
//         setTimeout(carousel, 4000);
//     }
//   } );




// slider home page 

let images = ['img/facadeHotel.jpg','img/hall.jpg', 'img/parisLouvre.jpg', 'img/parisSkyView.jpg', 'img/pontParis.jpg', 'img/reception.jpg'];
let imageSlider = 0;

if (document.querySelector(".slide")){
function changeImage() { 
    document.querySelector(".slide").src = images [imageSlider];
		if (imageSlider == 5) {
            imageSlider = 0;	
            }else {
                imageSlider++;
            }

        }
    setInterval(changeImage, 3000);
}


// alert covid
let covid_info = document.querySelector('.covid_info')
covid_info.addEventListener('click', ()=>{
    alert (`Info Covid-19 😷
Votre séjour en toute sécurité

Chères clientes, chers clients,

La santé et la sécurité de nos clients et de nos Artisans sont au cœur de nos priorités.

Conformément aux recommandations strictes du gouvernement français, L’Hôtel Parimis a mis en place un protocole spécifique à cette situation sanitaire exceptionnelle :

* Respect strict des gestes protecteurs et de la distanciation physique, port du masque obligatoire pour nos Artisans et pour nos clients dans les espaces communs.

* Mise à disposition de gel hydroalcoolique pour nos clients.
* Désinfection accru des surfaces, des équipements et des textiles de l'hôtel, restaurant et spa.

* Déploiement de solutions digitales pour continuer à vous accueillir et à échanger avec simplicité (paiement sans contact via mobile).

* Les espaces d'accueil, de réception ou de restauration sont réaménagés avec des marquages, des horaires et un service adaptés. 

Si vous avez des symptômes, nous avons la possibilité de communiquer les coordonnées d’un cabinet médical.
Nous restons à votre écoute par téléphone et par email`);
})



// // Slider room

// let imagesRoom = ['img/ChambreClassiqueFirst.jpg','img/ChambreClassiqueFourth.jpg', 'img/ChambreConfortFirst.jpg', 'img/ChambreConfortSecond.jpg', 'img/ChambreDeluxeFirst.jpg', 'img/ChambreDeluxeSecond.jpg','img/SuiteRoyaleFourth.jpg','img/SalonSuite.jpg'];
// let imageSliderRoom = 0;

// if (document.querySelector(".slide_room")){
// ()=> { 
//     document.querySelector(".slide_room").src = images [imageSliderRoom];
// 		if (imageSliderRoom == 7) {
//             imageSliderRoom = 0;	
//             }else {
//                 imageSliderRoom++;
//             }

//         }
//     setInterval(changeImage, 3000);
// }

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});
}
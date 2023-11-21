//song list
let All_song = [
   {
     name: "Butter",
     path: "butter.mp3",
     img: "1.jpg",
     singer: "BTS"
   },
   {
     name: "Run BTS",
     path: "run.mp3",
     img: "2.png",
     singer: "Proof",
    
   },
   {
     name: "That That",
     path: "That That.mp3",
     img: "4.jpg",
     singer: "PSY ft.SUGA"
   } ,
   {
     name: "3D",
     path: "3D.mp3",
     img: "3.jpg",
     singer: "Jungkook ft.Jack Harlow"
   } ,
   {
     name: "Seven",
     path: "Seven.mp3",
     img: "Jungkook-Seven.jpg",
     singer: "Jungkook ft.Latto"
   },
   {
    name: "Fire",
    path: "fire.mp3",
    img: "6.jpeg",
    singer: "BTS"
   },
   {
    name: "Black Swan",
    path: "black.mp3",
    img: "77.jpg",
    singer: "BTS"
   },
   {
    name: "ON",
    path: "ON.mp3",
    img: "77.jpg",
    singer: "BTS"
   },
   {
    name: "Still With You",
    path: "still.mp3",
    img: "stillwithu.jpg",
    singer: "Jungkook"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};




/*please follow all the rules so that you do not face any problem*/
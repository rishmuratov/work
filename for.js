"use strict";
let number0fFilms;

function start() {
   number0fFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

   while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
      number0fFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
}
}
start();
const personalMovieDB = {
   count:  number0fFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?' ,''),
   b = prompt('Насколько его оцените?', '');

   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
   } else {
      console.log("Error!");
      i--;
   }
}
}

// rememberMyFilms();

   function detectPersolnalLevel() {
      if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
   }
   
   // detectPersolnalLevel();

   function showMyDB() {
      if (personalMovieDB.privat == false) {
         console.log(personalMovieDB);
      }
   }
   showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for(let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр любимый жанр под номером ${i}`);
   }
}
writeYourGenres();



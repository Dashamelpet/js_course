let numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');


let personalMovieDB = {
    'count': numbersOfFilms,
    'movies': {},
    'actors': {},
    'genders': [],
    'privat': false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;  
personalMovieDB.movies[c] = d;  
console.log(personalMovieDB);

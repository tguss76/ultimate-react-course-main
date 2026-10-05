const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

// const book = getBook(3);
// book;
// // const title = book.title;
// // const author = book.author;
// // author;
// // title;

// const { title, author, pages, publicationDate, genres, hasMovieAddaptation } =
//   book;
// console.log(genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// // rest-operator form array
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// // create a new array whit spedoperator
// const newGenres = [...genres, "epic fantasy"];
// const newGenre2 = ["epic fantasy", ...genres];
// newGenres;
// newGenre2;

// // objects
// const updatedBook = {
//   ...book,
//   // adding a new prop
//   moviePulicationDate: "2001-12-19",
//   // overwriting an exsisting prop
//   pages: 800,
// };
// updatedBook;

// const getYear = (str) => str.split("-")[0];
// const summary = `${title} is a ${pages}-pages long book, that was written by ${author} and published in ${publicationDate.split("-")[0]} ${getYear(publicationDate)} `;
// summary;

// const pagesRange = pages > 1000 ? "over a thousend" : "less than 1000";
// pages;
// pagesRange;
// console.log(`the book has ${pagesRange}`);

// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// // const getYear2 = (str) => {
// //   return str.split("-")[0];
// // };

// // console.log(getYear(publicationDate));
// // console.log(getYear2(publicationDate));

// // short circuting

// const spanishTranslation = book.translations.spanish || "Not translated";
// spanishTranslation;

// console.log(true && "some String");
// console.log(false && "some String");

// console.log(true || "some String");
// console.log(false || "some String");

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// console.log(titles);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// console.log(essentialData);

// const loogBook = books.filter((book) => book.pages > 500);
// console.log(loogBook);

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// const arr = [3, 1, 4, 9, 2];
// const sort = arr.slice().sort((a, b) => a - b);
// sort;
// arr;

// sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;

// const newBook = {
//   id: 6,
//   title: "Harry potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 5);
// booksAfterDelete;
// console.log(booksAfterDelete);

// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 2000 } : book,
// );
// booksAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("Tomas");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

books.filter(book =>
  { if (book.rented > 0)
  { console.log(`le livre ${book.title} a déjà été reservé une fois (${book.rented} fois pour être précis)`)}

  });

books.sort(function(a ,b) {return a.rented - b.rented});
var last = books.length -1
console.log(`le livre le moins reservé est ${books[0].title} avec ${books[0].rented} réservations! Un bon livre de merde `)
console.log(`le livre le moins reservé est ${books[last].title} avec ${books[last].rented} réservations! Orgueil et Préjugés quel originalité !  `)


console.log(`le livre avec l'id  873495 est ${books.find(x => x.id === 873495).title}`)

var booksToDelete = books.find(x => x.id === 133712)


books.splice(books.indexOf(booksToDelete), 1);

console.log(books)

console.log("tu peux tchécker ke livre de Gatsby est supprimer")
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function displayEntrepreneurs70() {
  const entrepreneurs70 =  entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year >= 1970 && entrepreneur.year <=1979 ;
  });
  console.log(entrepreneurs70);
}

displayEntrepreneurs70();


function getTitle() {
nameArray=[]
entrepreneurs.forEach(entrepreneur => {

  nameArray.push(entrepreneur.first + " " + entrepreneur.last);
})

console.log(nameArray)

}

getTitle();

function getAge() {
ageToday =[]
entrepreneurs.forEach(entrepreneur => {

  ageToday.push( entrepreneur.first + " " + entrepreneur.last +" " + (2020 - entrepreneur.year)+ "ans");
})

console.log(ageToday)
}

getAge();

function sortedList() {
  let sorted = entrepreneurs
  sorted.sort(function(a, b){return a.last.localeCompare(b.last);
  })
  console.log(sorted);
}

sortedList();





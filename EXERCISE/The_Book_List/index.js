const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

/////////SORTING BOOKS ARRAY of OBJECTS///////////////////////////////////

function compare(a, b) {

  a = a.author.toLowerCase();
  //console.log(a)
  b = b.author.toLowerCase();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0
}

books.sort(compare)

let sorting = [];

for (i = 0; i < books.length; i++) {
  let naming = books[i].author.split(' ');
  naming = [naming[naming.length - 1], naming[0]].toString().replace(',', ', ');
  console.log(naming);
  
  sorting.push(naming);
}
console.log(sorting)


//console.log(books)

/////////////LIST STYLE NONE OF BOOK//////////////////////////
const bookList = document.querySelector(".book-list");
bookList.style.listStyle = "none";
bookList.style.padding = "0";

///////////CREATING MISSING ELEMENTS |<li> <div> <img>| 
///////////+CREATING TEXTNODE to <div> | i.title|
///////////+APPENDING TO PARENT| <ul> <div> <img>
books.forEach(function (i) {
  let li = document.createElement("li");
  document.querySelector(".book-list").appendChild(li);
  
  const div = document.createElement("div");
  li.appendChild(div);
  div.className = "book";

  const img = document.createElement("img");
  img.setAttribute("src", i.img)
  div.appendChild(img);
  img.className = "book-cover";

  const p = document.createElement("p");
  div.appendChild(p);
  p.className = "title";
  p.appendChild(document.createTextNode(i.title));
  p.style.marginTop = "20px"
  p.style.paddingLeft = "20px"
  p.style.textAlign = "left"

  const h6 = document.createElement("h6");
  div.appendChild(h6);
  h6.className = "author";
  h6.appendChild(document.createTextNode(i.author));
  h6.style.fontSize = "0.8rem"
  h6.style.color = "#ccc"
  h6.style.fontStyle = "bold"
  h6.style.margin = "0"
  h6.style.display = "flex"
  h6.style.flexFlow = "row wrap"

  //div.appendChild(document.createTextNode(i.author));
  //div.appendChild(document.createTextNode(i.alreadyRead))
  //console.log(typeof i.title)
  //div.appendChild(i.title)

  console.log(li)
  //console.log(typeof li)
})

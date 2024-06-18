//container
const container = document.createElement("div");
container.classList.add("container");
container.classList.add("mt-3");
//upper-row (12)
const rowFirst = document.createElement("div");
rowFirst.classList.add("row");
const column12 = document.createElement("div");
column12.classList.add("col-12");
const img12 = document.createElement("img");
img12.classList.add("image-12");
img12.setAttribute("src", "https://wallpapercave.com/wp/wp3785670.jpg");
img12.setAttribute("alt", "marvel");
//appending
column12.append(img12);
rowFirst.append(column12);
container.append(rowFirst);
document.body.append(container);

//add button
const addBtn = document.createElement("button");
addBtn.classList.add("btn");
addBtn.classList.add("btn-warning");
addBtn.textContent = "add new card";
addBtn.classList.add("add-btn");
container.append(addBtn);
//add button click
addBtn.addEventListener("click", () => {
  //card title
  const title = window.prompt("enter new card's title: ");
  //card content
  const content = window.prompt("enter new card's content: ");
  //card img
  const imgSrc = window.prompt("enter new card's image source: ");

  const newCard = new Card(title, content, imgSrc);
  cards.push(newCard);
  const newColumn = createCard(newCard);
  rowSecond.append(newColumn);
});

//row-4 - cards
//class - Card
class Card {
  static id = 1;
  constructor(title, content, imgSrc) {
    this.title = title;
    this.content = content;
    this.imgSrc = imgSrc;
    this.id = Card.id++;
  }
}
//array - cards
const cards = [
  new Card(
    "Spider-Man",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, velit placeat ea nam illum dolores saepe nemo soluta rerum ab a facere officiis exercitationem iste possimus mollitia! Nesciunt ducimus odio vitae impedit sit aperiam, consequatur quos, harum, labore minus totam!",
    "https://wallpapercave.com/wp/wp3785670.jpg"
  ),
  new Card(
    "Iron-Man",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, velit placeat ea nam illum dolores saepe nemo soluta rerum ab a facere officiis exercitationem iste possimus mollitia! Nesciunt ducimus odio vitae impedit sit aperiam, consequatur quos, harum, labore minus totam!s",
    "https://wallpapercave.com/wp/wp3785670.jpg"
  ),
  new Card(
    "Doctor Strange",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, velit placeat ea nam illum dolores saepe nemo soluta rerum ab a facere officiis exercitationem iste possimus mollitia! Nesciunt ducimus odio vitae impedit sit aperiam, consequatur quos, harum, labore minus totam!",
    "https://wallpapercave.com/wp/wp3785670.jpg"
  ),
];

const rowSecond = document.createElement("div");
rowSecond.classList.add("row");
rowSecond.classList.add("mt-3");
//loop
for (let i = 0; i < cards.length; i++) {
  const newCard = createCard(cards[i]);
  rowSecond.append(newCard);
}

//function - create Card
function createCard(card) {
  const column4 = document.createElement("div");
  column4.classList.add("col-4");
  column4.classList.add("mt-3");
  const card4 = document.createElement("div");
  card4.classList.add("card");
  const card4_img_wrapper = document.createElement("div");
  card4_img_wrapper.classList.add("card-img-wrapper");
  const card4_img = document.createElement("img");
  card4_img.classList.add("card-img");
  card4_img.setAttribute("src", card.imgSrc);
  card4_img.setAttribute("alt", card.title);
  card4_img.setAttribute("data-id", card.id);
  card4_img_wrapper.append(card4_img);
  const card4_title = document.createElement("h4");
  card4_title.style.padding = "5px 14px";
  card4_title.textContent = card.title;
  const card4_content = document.createElement("p");
  card4_content.style.padding = "10px 14px";
  card4_content.textContent = card.content;
  const card_delete_btn = document.createElement("button");
  card_delete_btn.textContent = "delete";
  card_delete_btn.classList.add("btn");
  card_delete_btn.setAttribute("data-id", card.id);
  card_delete_btn.classList.add("delete-btn");
  card_delete_btn.classList.add("btn-danger");
  card4.append(card4_img_wrapper, card4_title, card4_content, card_delete_btn);
  column4.append(card4);

  //delete button click
  card_delete_btn.addEventListener("click", function () {
    removeCard(this);
  });

  return column4;
}
function removeCard(cardDeleteBtn) {
  if (window.confirm("are you sure to delete this card?")) {
    //html
    cardDeleteBtn.closest(".col-4").remove();
    const id = cardDeleteBtn.getAttribute("data-id");
    const idx = cards.findIndex((x) => x.id == id);
    cards.splice(idx, 1);
    window.alert('card deleted successfully!');
    console.log('cards array: ',cards);
  } else {
    window.alert("your card is safe :)");
  }
}

container.append(rowSecond);

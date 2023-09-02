let allBoxes = document.querySelectorAll("td"); //the cells of our table
let result = document.getElementById("result"); //text of result
let table = document.querySelector("table");
let letters = ["X", "O"]; //players
let i = 0; //who's turn is it
let j = 0; //is the table full???
let winner = false; //is there a winner?
let mylists = [[], []]; //where are x an o
allBoxes.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (event.target.classList == "" && !winner) {
      //if the cell is empty
      j++;
      if (j === 9) result.innerHTML = "It's A Draw"; //looks like the table is full!!!
      event.target.classList = letters[i]; //change the style of text depending on turn
      event.target.innerHTML = letters[i]; //add the letter

      mylists[i].push(item.id); //save the place

      if (
        (mylists[i].includes("1") &&
          mylists[i].includes("2") &&
          mylists[i].includes("3")) ||
        (mylists[i].includes("1") &&
          mylists[i].includes("4") &&
          mylists[i].includes("7")) ||
        (mylists[i].includes("1") &&
          mylists[i].includes("5") &&
          mylists[i].includes("9")) ||
        (mylists[i].includes("2") &&
          mylists[i].includes("5") &&
          mylists[i].includes("8")) ||
        (mylists[i].includes("3") &&
          mylists[i].includes("6") &&
          mylists[i].includes("9")) ||
        (mylists[i].includes("3") &&
          mylists[i].includes("5") &&
          mylists[i].includes("7")) ||
        (mylists[i].includes("4") &&
          mylists[i].includes("5") &&
          mylists[i].includes("6")) ||
        (mylists[i].includes("7") &&
          mylists[i].includes("8") &&
          mylists[i].includes("9")) //possiblities of winning
      ) {
        result.innerHTML = `player ${letters[i]} is the winner`;
        winner = true;
      }
    }
    i = (i + 1) % 2; //change the turn
  });
});

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let arr = [];
gameInfo.forEach((item) => {
    arr.push(item.username + "!");
});

console.log(arr);

let arr2 = [];
gameInfo.forEach ((item)=>{
    if (item.score>5) arr2.push (item.username);
});

console.log(arr2);

let score = 0;

gameInfo.forEach ((item)=>{
    score+= item.score;
});
console.log(score);
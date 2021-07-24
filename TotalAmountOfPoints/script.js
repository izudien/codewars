function points(games) {
  games.forEach((game) => {
    const x = game.split(":");
    console.log(x);
  });
}
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
); //, 10

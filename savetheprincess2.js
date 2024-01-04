//SAVE THE PRINCESS 2



function processData(input) {
  var lines = input.split('\n');
  var n = parseInt(lines[0]);
  var botPosition = lines[1].split(' ').map(Number);
  var grid = [];

  for (var i = 2; i < n + 2; i++) {
    grid.push(lines[i]);
  }

  nextMove(n, botPosition[0], botPosition[1], grid);
}

function nextMove(n, botRow, botCol, grid) {
var princessRow, princessCol;

for (var i = 0; i < n; i++) {
  var index = grid[i].indexOf('p');
  if (index !== -1) {
      princessRow = i;
      princessCol = index;
      break;
  }
}

var rowDiff = botRow - princessRow;
var colDiff = botCol - princessCol;

if (rowDiff !== 0) {
  console.log(rowDiff > 0 ? 'UP' : 'DOWN');
} else if (colDiff !== 0) {
  console.log(colDiff > 0 ? 'LEFT' : 'RIGHT');
}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
_input += input;
});

process.stdin.on("end", function () {
processData(_input);
});
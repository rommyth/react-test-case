function Reverse(value) {
  // Nomor 1
  let splited = value.split('');
  let poped = splited.pop();
  let reversed = splited.reverse();
  reversed.push(poped);

  console.log('No. 1 : ', reversed);
}

function Longest() {
  const sentence = 'Saya sangat senang mengerjakan soal algoritma';
  let splited = sentence.split(' ');
  let max = 0;
  let index = 0;
  for (let i = 0; i < splited.length; i++) {
    if (splited[i].length > max) {
      index = i;
      max = splited[i].length;
    }
  }
  let render = `${splited[index]}: ${max} character`;
  console.log('No. 2 : ', render);
}

function Matrix() {
  let query = ['bbb', 'ac', 'dz'];
  let input = ['xc', 'dz', 'bbb', 'dz'];
  let output = [];
  let x = 1;
  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (query[i] == input[j]) {
        output[i] = (output[i] || 0) + 1;
      } else {
        output[i] = output[i] || 0;
      }
    }
  }
  console.log('No. 3 : ', output);
}

function Matrix2() {
  const arr = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let diagonal1 = [];
  let diagonal2 = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) {
        diagonal1.push(arr[i][j]);
      }
      if (i + j === arr.length - 1) {
        diagonal2.push(arr[i][j]);
      }
    }
  }

  let totalDiagonal1 = diagonal1.reduce((a, b) => a + b, 0);
  let totalDiagonal2 = diagonal2.reduce((a, b) => a + b, 0);
  let total = totalDiagonal1 - totalDiagonal2;

  let answer = `${totalDiagonal1} - ${totalDiagonal2} = ${total}`;

  console.log('No. 4 : ', answer);
}

Reverse('NEGIE1');
Longest();
Matrix();
Matrix2();

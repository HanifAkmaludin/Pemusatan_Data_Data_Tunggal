const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".tombolHasil");
const rataRata = document.querySelector(".hasilQ1");
const nilaiTengah = document.querySelector(".hasilQ2");
const q3 = document.querySelector(".hasilQ3");
const reset = document.querySelector('.reset');
let reg = /\-\d+|\d+/g;
let arr2 = [];
let arr;

function findNumber(number) {
  while ((arr = reg.exec(number)) != null) {
    arr2.push(parseFloat(arr[0]));
  }
}

function urutan(number) {
  number.sort((a, b) => {
    return a - b;
  });
}

function mean(number) {
  let hasilMean = number.reduce((a, b) => a + b) / number.length;
  rataRata.innerHTML = hasilMean;
}

function median(number) {
  let result;
  if (number.length % 2 === 0) {
    result = (number[number.length / 2 - 1] + number[number.length / 2]) / 2;
    nilaiTengah.innerHTML = result;
  } else {
    result = number[(number.length + 1) / 2 - 1];
    nilaiTengah.innerHTML = result;
  }
}

function modus(number) {
  let result = [];
  let cekModus = [];
  let hasilModus = [];
  number.forEach((item) => {
    result.push(number.filter((a) => a === item));
  });
  // console.log(result);
  result.forEach((m) => {
    cekModus.push(m.length);
  });
  urutan(cekModus);
  if (cekModus[cekModus.length - 1] !== 1) {
    result.forEach((n) => {
      if (n.length === cekModus[cekModus.length - 1]) {
        if (hasilModus.length === 0) {
          hasilModus.push(n[0]);
        } else if (hasilModus[hasilModus.length - 1] !== n[0]) {
          hasilModus.push(n[0]);
        }
      }
    });
  }
  q3.innerHTML = hasilModus.join(", ");
}

button.addEventListener("click", () => {
  findNumber(inputNumber.value);
  urutan(arr2);
  mean(arr2);
  median(arr2);
  modus(arr2);
});

reset.addEventListener('click', () => {
  inputNumber.value = "";
  arr2 = [];
  rataRata.innerHTML = "";
  nilaiTengah.innerHTML = "";
  q3.innerHTML = "";
})

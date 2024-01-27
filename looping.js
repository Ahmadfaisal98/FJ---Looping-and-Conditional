// looping -> perulangan pemrograman untuk menjalanjan fungsi2 tertentu yang mempunyai panjang data

    // start;  batas; peningkatan nilai
for (let i = 0; i < 5; i++) { // ++ i+= 1
  // console.log(i, 'i')
}

// contoh      0 1 2 3,4,5,6
const array = [1,3,5,8,null,"budi", undefined]
// array index
// console.log(array[0])

// console.log(array.length)

for (let i = 0; i < array.length; i++) {
  // console.log(i, "i", "->", array[i], `array[${i}]`)
}

// string
/*
  1. ""
  2. ''
  3. `` -> bisa memasukkan js kedalam string
*/
                    // 4

// contoh kasus: tampilkan tipe data dari nilai berikut
const dataKasus1 = ["string", 1, null, undefined, [], "string2", true]
// console.log(dataKasus1.length)

// console.log(typeof null)
for (let i = 0; i < dataKasus1.length; i++) {
  // console.log(dataKasus1[i], 'dataKasus1[i]')
  const typeData = typeof dataKasus1[i]
  // console.log(typeData, dataKasus1[i])
  // if (typeof dataKasus1[i] === 'boolean') {
  //   console.log('Boolean', dataKasus1[i])
  // } else if (typeof dataKasus1[i] === 'number'){
  //   console.log('Number', dataKasus1[i])
  // }
  // console.log(array[i], `array[${i}]`)
}


for (const value of dataKasus1) {
  // console.log(value, 'value')
}

dataKasus1.forEach(async (data) => {
  // console.log(data, 'data')
})

const result = dataKasus1.map((data) => {
  // console.log(data, 'data')
  return `${typeof data} - ${data}`
})

// console.log(result, 'result')


async function test() {
  for (const value of dataKasus1) {
    // console.log(value, 'value')
    // await 
  }
}

// contoh soal 2 -> pisahkan huruf dan angka
const dataKasus2 = "abc1de3fg1234"
let dataHuruf = ""
let dataAngka = ""
for (let i = 0; i < dataKasus2.length; i++) {
  // console.log("index", i)
  const value = dataKasus2[i];
  // console.log(value, 'value')
  if (isNaN(Number(value))) { // bukan number atau huruf
    dataHuruf += value
    // console.log("dataHuruf", value)
  } else { // kalau number
    dataAngka += value
    // console.log("dataAngka", value)
  }
//   console.log(dataHuruf, 'dataHuruf')
//   console.log(dataAngka, 'dataAngka')
//   console.log('--------------------------------')
}

// console.log(dataHuruf, 'dataHuruf')
// console.log(dataAngka, 'dataAngka')

// console.log(Number("A"), 1)

// contoh soal 3 -> pisahkan angka yang lebih besar dari 70, outputnya array
const dataKasus3 = [2,30,50,60,80,90,100] // [80,90,100]
const dataBesar70 = []
for (let i = 0; i < dataKasus3.length; i++) {
  const value = dataKasus3[i];
  console.log(value, 'semua nulai')
  if (value > 70) {
    console.log(value, 'value')
    dataBesar70.push(value)
  }
}

console.log(dataBesar70)
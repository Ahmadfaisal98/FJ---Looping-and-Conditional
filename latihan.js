// aplikasi todo list

let result = [] // todo listnya kosong

function tambahItem(item) {
  result.push(item)
}

function hapusItem(indexYangAkanDihapus) {
  result.splice(indexYangAkanDihapus, 1)
}

function modifikasi(indexYangAkanDimodifikasi, newItem) {
  result[indexYangAkanDimodifikasi] = newItem
}

function reset() {
  result.length = 0;
}

// bermain function
tambahItem('Belanja kepasar') // aksi yang dilakukan ['Belanja kepasar']
tambahItem('Main bola') // aksi yang dilakukan ['Belanja kepasar', 'Main bola']
tambahItem('Belajar coding') // aksi yang dilakukan ['Belanja kepasar', 'Main bola', 'Belajar coding']

hapusItem(0) // ['Main bola', 'Belajar coding']

modifikasi(0, 'Main basket') // ['Main basket', 'Belajar coding']

reset() // hasus semua data

tambahItem('Belanja ke mall') 

console.log(result, 'akhir')


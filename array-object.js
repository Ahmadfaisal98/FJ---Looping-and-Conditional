// Array
// pakai [], index dari 0
// contoh 
const array1 = ["a", 1, null, { budi: "test" }]
// console.log(array1[0])

// object
let user = {
  name: "Harist",
  phoneNumber: 81241241,
  detail: {
    tall: "170 cm",
    weight: "70 kg",
    color: "white",
  },
  cars: ["Camry", "Supra", "Lamborghini"],
  "-1fa_fas": "test",
  "test-key": "test 2"
}

// array => banyak: buku-buku -> books
// single: buku -> book

// ada key dan value

// console.log(user.name) // Harist
// console.log(user["name"])  // Harist
// console.log(user["test-key"]) // test 2
const key = 'phoneNumber'
// console.log(user[key]) // 81241241

// penggunaan varible key dalam object -> untuk menyimpan name key, biasanya dalam kondisional value atau array object
// conditional value -> tampilkan phone number jika namanya Harist jika tidak tampilkan cars
let key2 = 'phoneNumber'
if (user.name !== 'Harist') {
  key2 = 'cars'
}
// console.log(user[key2])

// console.log(user.terserah) // undefined jika keynya tidak ada dalam object

// array - object
const arrayObject1 = [
  {
    name: "Harist",
    phoneNumber: 81241241,
    detail: {
      tall: "170 cm",
      weight: "70 kg",
      color: "white",
    },
    cars: ["Camry", "Supra", "Lamborghini"],
  },
  {
    name: "Budi",
    phoneNumber: 8124112312,
    detail: {
      tall: "120 cm",
      weight: "50 kg",
      color: "black",
    },
    cars: [],
  }
]

// console.log(arrayObject1[0].name)

for (const user of arrayObject1) { // looping
  if (user.name === 'Budi') {
    // console.log(user.detail["color"])
  }
}

for (let i = 0; i < arrayObject1.length; i++) { // yang biasa
  // console.log(arrayObject1[i].name)
}

arrayObject1.forEach((user) => { // dengan callback
  // console.log(user.name)
})

// manipulasi data
// arrayObject1 -> array object
// arrayObject1 -> array name : ["Harist", "Budi"]
// console.log(arrayObject1) 

const names = arrayObject1.map(user => {
  return user.name
})

// console.log(names)

// menggabunkan name and phoneNumber
const arrayObject2 = arrayObject1.map((user) => ({
  contact: `${user.name} - ${user.phoneNumber}`,
  detail: user.detail
}))

const arrayObject3 = arrayObject1.map((user) => {
  return {
    contact: `${user.name} - ${user.phoneNumber}`,
    detail: user.detail
  }
})

console.log(arrayObject2, 'arrayObject2')
console.log(arrayObject3, 'arrayObject3')
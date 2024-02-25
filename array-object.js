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

// menambahkan
arrayObject1.push({
  name: 'Joni',
  phoneNumber: 12312,
  detail: {
    tall: '150 cm',
    weight: '40 kg',
    color: 'brown'
  },
  cars: ['Civic']
});

// menghapus value dalam array
arrayObject1.splice(0, 1)

// mengedit value
arrayObject1[1].name = 'Jono'

// manipulasi masing-masing data -> phoneNumber tambah 2
const newAUsers = arrayObject1.map((user) => {
  //  user.phoneNumber = user.phoneNumber  + 2
  //  return user
  return {
    ...user,
    phoneNumber: user.phoneNumber + 2
  }
})

console.log(newAUsers)

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

// console.log(arrayObject2, 'arrayObject2')
// console.log(arrayObject3, 'arrayObject3')

// merubah specific object value dari array object
// contoh ubah value "Harist" jadi "New User"

const arrayNewUsers = arrayObject1.map((user) => {
  if (user.name === "Harist") {
    user.name = "New User"
    // user.detail.tall = "180 cm"
    user.detail = {
      ...user.detail,
      tall: "180 cm",
    }
  }
  return user
})

console.log(arrayNewUsers, 'arrayNewUsers');

const responseSampleAPI = {
  "results":[
    {
      "gender":"male",
      "name":{
        "title":"Mr",
        "first":"Samuel",
        "last":"Santos"
      },
      "location":{
        "street":{
          "number":7241,
          "name":"Calle de Segovia"
        },
        "city":"Cuenca",
        "state":"Galicia",
        "country":"Spain",
        "postcode":99698,
        "coordinates":{
          "latitude":"-35.9295",
          "longitude":"-109.6512"
        },
        "timezone":{
          "offset":"+3:30",
          "description":"Tehran"
        }
      },
      "email":"samuel.santos@example.com",
      "login":{
        "uuid":"ed9b93af-10f8-49f0-8884-3e8a73235fb0",
        "username":"orangefish282",
        "password":"lobo",
        "salt":"fd0IK9aV",
        "md5":"5ec027e9f7a7de61c3695edb628d3f27",
        "sha1":"ea29a46ab57f731f2599a17b0a1727917135d9e8",
        "sha256":"66db3d5580041ee1c11926bb3d18b5d917a7972bce87e6d45ed9e6ae15eecf95"
      },
      "dob":{
        "date":"1996-10-14T12:22:13.422Z",
        "age":27
      },
      "registered":{
        "date":"2012-12-20T01:55:51.208Z",
        "age":11
      },
      "phone":"942-123-970",
      "cell":"684-004-178",
      "id":{
        "name":"DNI",
        "value":"81408933-V"
      },
      "picture":{
        "large":"https://randomuser.me/api/portraits/men/64.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/64.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/64.jpg"
      },
      "nat":"ES"
    },
    {
      "gender":"male",
      "name":{
        "title":"Mr",
        "first":"Ege",
        "last":"Kaplangı"
      },
      "location":{
        "street":{
          "number":8643,
          "name":"Bağdat Cd"
        },
        "city":"Afyonkarahisar",
        "state":"Yalova",
        "country":"Turkey",
        "postcode":58361,
        "coordinates":{
          "latitude":"54.3175",
          "longitude":"-20.2262"
        },
        "timezone":{
          "offset":"+6:00",
          "description":"Almaty, Dhaka, Colombo"
        }
      },
      "email":"ege.kaplangi@example.com",
      "login":{
        "uuid":"1072cdd3-60df-446d-a457-cdd0f83dd7a7",
        "username":"goldentiger862",
        "password":"peabody",
        "salt":"lZ1CNB1f",
        "md5":"ef6917284591e39984c1f35dbb234071",
        "sha1":"5ba2c47cd3b06577be7a9ea140cb939138a03a42",
        "sha256":"792015b506b6e48eb19fe46d1ee9bdfc377eff73ce4f14d4392a3bb0fcdba095"
      },
      "dob":{
        "date":"1995-04-01T15:00:09.227Z",
        "age":28
      },
      "registered":{
        "date":"2016-06-10T21:30:34.649Z",
        "age":7
      },
      "phone":"(222)-531-7079",
      "cell":"(309)-302-8044",
      "id":{
        "name":"",
        "value":null
      },
      "picture":{
        "large":"https://randomuser.me/api/portraits/men/90.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/90.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/90.jpg"
      },
      "nat":"TR"
    },
    {
      "gender":"female",
      "name":{
        "title":"Ms",
        "first":"Aracema",
        "last":"da Luz"
      },
      "location":{
        "street":{
          "number":6101,
          "name":"Rua Três"
        },
        "city":"Guarapuava",
        "state":"Pará",
        "country":"Brazil",
        "postcode":28421,
        "coordinates":{
          "latitude":"61.1765",
          "longitude":"-146.4794"
        },
        "timezone":{
          "offset":"+10:00",
          "description":"Eastern Australia, Guam, Vladivostok"
        }
      },
      "email":"aracema.daluz@example.com",
      "login":{
        "uuid":"a5edebe4-3395-42c1-8e50-e513c1770e14",
        "username":"redfish613",
        "password":"john316",
        "salt":"uyLhAmrp",
        "md5":"018b78ce64a4a5787029a54822bc40ac",
        "sha1":"b314698bb798ffaa74360a5d2d517ef612258121",
        "sha256":"f37ffc140686269f765e6a0b8fb152621b9b2916b47a6b9c5d54fba1a713ed75"
      },
      "dob":{
        "date":"1981-06-13T10:00:53.701Z",
        "age":42
      },
      "registered":{
        "date":"2019-02-08T13:01:20.457Z",
        "age":5
      },
      "phone":"(26) 4318-7964",
      "cell":"(56) 2006-8604",
      "id":{
        "name":"CPF",
        "value":"307.255.903-29"
      },
      "picture":{
        "large":"https://randomuser.me/api/portraits/women/60.jpg",
        "medium":"https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/women/60.jpg"
      },
      "nat":"BR"
    }
  ],
  "info":{
    "seed":"e3b52168c09cde6a",
    "results":3,
    "page":1,
    "version":"1.4"
  }
}

// manipulasi response jadi lebih sederhana
// dengan array object, yang objectnya: name (digabungkan semua), location digabungkan dengan format (Unit No. 7241, Calle de Segovia, Cuenca, Galicia, Spain)
// console.log(responseSampleAPI)

const newData = responseSampleAPI.results.map((res) => {
  return {
    name: `${res.name.title}. ${res.name.first} ${res.name.last}`,
    location: `Unit No. ${res.location.street.number}, ${res.location.street.name}, ${res.location.city}, ${res.location.state}, ${res.location.country}`
  }
})

// console.log(newData, 'newData')
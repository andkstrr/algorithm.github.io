// kabisat dengan do while 
let tahun = Number(prompt("masukkan tahun"))

do {
    if (tahun % 4 != 0){
        hasil = "tahun kabisat"
    } else if ( tahun % 100 != 0 ) {
        hasil = "tahun kabisat"
    } else if ( tahun % 400 == 0 ) {
        hasil = "tahun kabisat"
    } else {
        hasil = "bukan tahun kabisat"
    }
    console.log(tahun + hasil)
    tahun += 4
} while (tahun <= 2024) 

// kabisat dengan while 
let tahun2 = Number(prompt("Masukkan Tahun"))

while(tahun2 <= 2024 ) {
    if (tahun2 % 4 != 0) {
        hasil2 = "Tahun Kabisat"
    } else if ( tahun2 % 100 != 0 ) {
        hasil2 = "Tahun Kabisat"
    } else if ( tahun2 % 400 == 0 ) {
        hasil2 = "Tahun Kabisat"
    } else {
        hasil2 = "Tahun Kabisat"
    }
    console.log(tahun2 + hasil2 )
    tahun2 += 4
}

// kabisat dengan for
for (let tahun3 = Number(prompt("Masukkan tahun")); tahun3 <= 2024 ; tahun3 +=4 ) {
    if (tahun3 % 4 != 0) {
        hasil3 = "Tahun Kabisat"
    } else if ( tahun3 % 100 != 0 ) {
        hasil3 = "Tahun Kabisat"
    } else if ( tahun3 % 400 == 0 ) {
        hasil3 = "Tahun Kabisat"
    } else {
        hasil3 = "Tahun Kabisat"
    }
    console.log(tahun3 + hasil3 )
}

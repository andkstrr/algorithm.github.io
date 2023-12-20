// Ticketing 

let VIP = prompt("Jumlah Kelas VIP yang terjual");
let Executive = prompt("Jumlah Kelas Executive yang terjual");
let Ekonomi = prompt("Jumlah Kelas Ekonomi yang terjual ");

if ( VIP >= 35 ) {
    keuntungan1 = 25
} else 
    if ( VIP >= 20 ) {
        keuntungan1 = 15
    } else {
        keuntungan1 = 5
    }


if ( Executive >= 40 ) {
    keuntungan2 = 20
} else 
    if ( Executive >= 20 ) {
        keuntungan2 = 10
    } else {
        keuntungan2 = 2
    }


if ( Ekonomi > 0 ) {
    keuntungan3 = 7
}

let kelasVIP = parseInt(VIP) * keuntungan1;
let kelasEXE = parseInt(Executive) * keuntungan2;
let kelasEKO = parseInt(Ekonomi) * keuntungan3;
let untungKeseluruhan = kelasVIP + kelasEXE + kelasEKO;
let totalTiket = parseInt(VIP) + parseInt(Executive) + parseInt(Ekonomi)

// console.log(`Keuntungan dari 3 kelas tersebut adalah, <br>
//             1. Kelas VIP ${kelasVIP} <br>
//             2. Kelas Executive ${kelasEXE} <br>
//             3. Kelas Ekonomi ${kelasEKO} <hr>`)    
            
// console.log(`Keuntungan keseluruhan dari ke-3 kelas tersebut adalah <br>
//             ${untungKeseluruhan}<hr>`)            
            
// console.log(`Jumlah tiket per kelas adalah, <br>
//             1. Kelas VIP ${VIP}
//             2. Kelas Executive ${Executive}
//             3. Kelas Ekonomi ${Ekonomi}`)
            
// console.log(`Total tiket seluruhnya adalah ${totalTiket}`)

document.write(
    `Keuntungan dari 3 kelas tersebut adalah, <br>
    1. Kelas VIP ${kelasVIP} <br>
    2. Kelas Executive ${kelasEXE} <br>
    3. Kelas Ekonomi ${kelasEKO} <hr>`
)

document.write(
    `Keuntungan keseluruhan dari ke-3 kelas tersebut adalah <br> ${untungKeseluruhan}. <br> <hr>`
)

document.write(
    `Jumlah tiket per kelas adalah, <br>
    1. Kelas VIP ${VIP} <br>
    2. Kelas Executive ${Executive} <br>
    3. Kelas Ekonomi ${Ekonomi}.<br> <hr>`) 

document.write(
    `Total tiket seluruhnya adalah ${totalTiket}.`
)
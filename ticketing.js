// Ticketing 

let VIP = prompt("JumlahKelasVIP");
let Executive = prompt("JumlahKelasExecutive");
let Ekonomi = prompt("JumlahKelasEkonomi");

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

let kelasVIP = VIP * keuntungan1;
let kelasEXE = Executive * keuntungan2;
let kelasEKO = Ekonomi * keuntungan3;
let untungKeseluruhan = kelasVIP + kelasEXE + kelasEKO;
let totalTiket = VIP + Executive + Ekonomi

console.log(`Keuntungan dari 3 kelas tersebut adalah,
            1. Kelas VIP ${kelasVIP}
            2. Kelas Executive ${kelasEXE}
            3. Kelas Ekonomi ${kelasEKO}`)    
            
console.log(`Keuntungan keseluruhan dari ke-3 kelas tersebut adalah ${untungKeseluruhan}`)            
            
console.log(`Jumlah tiket per kelas adalah,
            1. Kelas VIP ${VIP}
            2. Kelas Executive ${Executive}
            3. Kelas Ekonomi ${Ekonomi}`)
            
console.log(`Total tiket seluruhnya adalah ${totalTiket}`)
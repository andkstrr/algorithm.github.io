
//     for(let i = 0; i <= 50; i++) {
//     console.log(i)
// }

// let angka = 0;

// while(angka <= 50) {
//     console.log(angka);
//     angka++;
// }

// // 50 -> 0

// for(let k = 50; k >= 0; k--) {
//     console.log(k)
// }

// let num = 50;

// while( num >= 0) {
//     console.log(num);
//     num--;
// }

// do while

// let a = 50;
// do {
//     console.log(c);
//     a--
// } while (c >= 1)

    // looping for

    for (let x = 1; x <= 50; x++ ) {
        if ( x % 2 == 0) {
        hasilnya = "bilangan genap-1";
    }
        else if ( x % 2 ==  1 ) {
        hasilnya = "bilangan ganjil-1";
    }
        console.log(x + hasilnya)
    }

    // looping while

    let y = 1;

    while ( y <= 50 ) {
        if ( y % 2 == 0 ) {
            hasil = "bilangan genap-2";
        } else if ( y % 2 == 1) {
            hasil = "bilangan ganjil-2";
        }
        console.log(y + hasil)
        y++
    }

    // do while

    let z = 1;
    do {
        if ( z % 2 == 0 ) {
            has = "bilangan genap-3"
        } else if ( z % 2 == 1 ) {
            has = "bilangan ganjil-3"
        }
        console.log( z + has )
        z++
    } while (z <= 50)
    
    // for factorial 

    let factorial = 1;
    let number = 5; 

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("Faktorial dari " + number + " adalah: " + factorial);

    // while factorial

    let factorial2 = 1;
    let nomor = 3;
    let h = 1;

    while ( h <= nomor ) {
        factorial2 *= h;
        h++;
    }
    console.log("Faktorial dari " + nomor + " adalah: " + factorial2);

    // do while factorial 

    let factorial3 = 1;
    let no = 5;
    let v = 1;

    do {
        factorial3 *= v;
        v++;
    } while (v <= no)
    console.log("Faktorial dari " + no + " adalah: " + factorial3);

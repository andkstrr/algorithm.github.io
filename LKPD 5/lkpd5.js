    // // NO 1
    // for(let i = 0; i <= 50; i++) {
    // console.log(i)
    // }

    // // NO 2
    // for (let x = 1; x <= 50; x++ ) {
    //     if ( x % 2 !== 0) {
    //     console.log(`${x} bilangan ganjil`);
    // }
    // }

    // // NO 3
    // for (let x = 1; x <= 50; x++ ) {
    //     if ( x % 2 == 0) {
    //     console.log(`${x} bilangan genap`);
    // }
    // }

    // NO 4
    // for (let x = 1; x <= 50; x++ ) {
    //     if ( x % 2 == 0) {
    //     hasilnya = "bilangan genap";
    // }
    //     else if ( x % 2 ==  1 ) {
    //     hasilnya = "bilangan ganjil";
    // }
    //     console.log(x + hasilnya)
    // }

    // NO 5
    let total = 0;
    let bilanganTerbesar = -Infinity;
    let bilanganTerkecil = Infinity;
    let i = 1;
    
    while (i <= 20) {
        let bilangan = parseInt(prompt("Masukkan bilangan ke- ", ));
        
        if (isNaN(bilangan)) {
            console.log("Input bukan angka. Coba lagi.");
        } else {
            total += bilangan;
            
            if (bilangan > bilanganTerbesar) {
                bilanganTerbesar = bilangan;
            }
            if (bilangan < bilanganTerkecil) {
                bilanganTerkecil = bilangan;
            } 
            i++;
        }
    }
    
    let ratarata = total / 20;
    
    console.log("Bilangan Terbesar: ", bilanganTerbesar);
    console.log("Bilangan Terkecil: ", bilanganTerkecil);
    console.log("Rata-rata: ", ratarata);

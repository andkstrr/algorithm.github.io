            // Penjumlahan 2 angka

            let bilangan1 = 27;
            let bilangan2 = 25;

            const penjumlahan = bilangan1 + bilangan2;

            console.log( `Hasil penjumlahan dari ${bilangan1} dan ${bilangan2} adalah ` +penjumlahan)
            // Jam ke detik

            let jam = 3;

            const detik = jam * 3600;

            console.log("3 Jam jika diubah ke detik menjadi " + detik + " detik")
            // Jam ke menit

            let jam2 = 4;

            const menit = jam2 * 60;

            console.log("4 Jam jika diubah ke menit menjadi " + menit + " menit")
            // KM ke Meter

            let KM = 3;

            const meter = KM * 1000;

            console.log("3 Kilometer jika diubah ke meter menjadi " + meter + "m")

            // KG ke Gram

            let KG = 7;

            const gram = KG * 1000;

            console.log("7 Kilogram jika diubah ke gram menjadi " + gram + "g")

            // Total Gaji Lembur

            let lembur = 9;

            if ( lembur == 6 ) {
                gaji = "gajian 200.000";
            } else if ( lembur > 6 ) {
                gaji = "gajian 300.000";
            } else if ( lembur < 6 ) {
                gaji = "gajian 100.000"
            } else {
                gaji = "ngga lembur"
            }

            console.log(`Jika anda lembur selama ${lembur} jam maka anda mendapat gaji sebesar ${gaji}`)

            // Kondisi pintu air

            let pintuAir = 200.0;

            if ( pintuAir <= 500.0 ) {
                sinyal = "AMAN"
            } else if ( pintuAir <= 600.0)  {
                sinyal = "WASPADA"
            } else if ( pintuAir <= 650.0 ) {
                sinyal = "SIAGA2"
            } else {
                sinyal ="SIAGA1"
            }

            console.log(`Tinggi air sekarang adalah: ${pintuAir} dan menunjukkan status ${sinyal}`)

            let barang1 = 40000;
            let barang2 = 45000;
            let barang3 = 25000;

            let totalHarga = barang1 + barang2 + barang3;
            let diskon = 10/100 * totalHarga;

            if ( totalHarga > 100000 ) {
                let harga = totalHarga - diskon;
                console.log("Harus bayar Rp. " + harga)
            } else {
                console.log(`Jadi uang yang harus dibayarkan adalah` )
            }


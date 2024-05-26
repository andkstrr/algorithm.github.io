        // no 1
        let jeruk = prompt("masukkan jumlah / kg")
        let diskon = 5 / 100;
        let harga = 5000;

        let total = jeruk * harga;
        let disc = total * diskon;
        let bayar = total - disc;

        document.write(`Harga sebenarnya adalah ${total} mendapat diskon ${disc} menjadi ${bayar} <br><hr>`)

        // no 2
        let bilangan;   
        let satuan;
        let puluhan;
        let ratusan;

        console.log("Masukkan bilangan: ");
        bilangan = Number(prompt());

        satuan =Math.floor(bilangan % 10);

        puluhan =Math.floor(bilangan  % 100 / 10);

        ratusan =Math.floor(bilangan % 1000 / 100);

        ribuan =Math.floor(bilangan % 10000 / 1000);

        jutaan =Math.floor(bilangan % 1000000 / 1000);

        console.log(`Satuan: ${satuan}`)
        console.log(`Puluhan: ${puluhan}`)
        console.log(`Ratusan: ${ratusan}`)
        console.log(`Ratusan ${ribuan}`)
        console.log(`Jutaan ${jutaan}`)

        // no 3
        let f = prompt("Masukkan Suhu Udara dalam Fahrenheit");
        let suhu = (f - 32) * (5/9)

        if (suhu > 300) {
        hasil = "panas"
        }
        else if (suhu < 250) {
        hasil = "dingin"
        }
        else {
        hasil = "normal"
        }
        document.write(`Suhu udara sekitar ${suhu}C Suhu udara terasa ${hasil}`)
        // menghitung nilai
        let PABP = 70;
        let MTK = 82;
        let DPK = 77;
        let rata = (PABP + MTK + DPK) / 3;
        
        // proses 
        if (rata >=80 && rata <=100){
            grade = "A";
        }
        else if (rata >=75 && rata <=80){
            grade = "B";
        }
        else if (rata >=65 && rata <=75){
            grade = "C";
        }    
        else if (rata >=45 && rata <=65){
            grade = "D";
        }  
        else if (rata >=0 && rata <=45){
            grade = "E";
        }  
        else if (rata >= 0){
            grade = "K";
        }
        
        console.log( "Rata-rata nilai tersebut adalah " + rata)
        console.log( "Grade yang diperoleh adalah " + grade)
        
        // kode pegawai
        let input = Number(prompt("Masukkan 11 Digit Kode Pegawai"))

        let golongan = Math.floor(input % 100000000000 / 10000000000)
        let dd = Math.floor(input % 10000000000 / 100000000)
        let mm = Math.floor(input % 100000000 / 1000000)
        let yy = Math.floor(input % 1000000 / 100)
        let nn = Math.floor(input % 100)

        if(golongan >= 1 && golongan <=4) {
            let bulanName;
            switch(mm) {
                case 1: bulanName = 'JAN'; break;
                case 2: bulanName = 'FEB'; break;
                case 3: bulanName = 'MAR'; break;
                case 4: bulanName = 'APR'; break;
                case 5: bulanName = 'MEI'; break;
                case 6: bulanName = 'JUN'; break;
                case 7: bulanName = 'JUL'; break;
                case 8: bulanName = 'AUG'; break;
                case 9: bulanName = 'SEP'; break;
                case 10: bulanName = 'OKT'; break;
                case 11: bulanName = 'NOV'; break;
                case 12: bulanName = 'DES'; break;
                default: bulanName = 'INVALID';
            } document.write(`${input} adalah kode P\pegawai golongan ${golongan} lahir pada tanggal ${dd} bulan ${bulanName} tahun ${yy} dengan kode identitas ${nn}`)
        }
        else {
            document.write("Data Tidak Valid")
        }
        
        // menambahkan 1 detik
        let jam = parseFloat(prompt("Masukkan angka jam"));
        let menit = parseFloat(prompt("Masukkan menit"));
        let detik = parseFloat(prompt("Masukkan detik")) + 1;
        
        if ( detik > 59 ) {
            detik = 0;
            hasilM = menit + 1;
        }
        if ( hasilM > 59 ) {
            hasilM = 0;
            jam = jam + 1;
        } 
        if ( jam > 23 ) {
            jam = 0;
            hasilM = 0;
            detik = 0;
        }
        console.log(`setelah diubah menjadi detik menjadi ${jam}:${menit}:${detik}  `)
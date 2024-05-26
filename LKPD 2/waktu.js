    // jam menit detik ke detik
    alert("Mengubah Jam, Menit, Detik ke Detik")
    let j = prompt("Masukkan total jam");
    let m = prompt("Masukkan total menit")
    let d = prompt("Masukkan total detik");

    const totalDetik = parseInt(j) * 3600 + parseInt(m) * 60 + parseInt(d);

    document.write(
        `<hr> Mengubah Jam, Menit, Detik > Detik : <br>
        Apabila ${j} jam ${m} menit dan ${d} detik diubah menjadi detik menjadi <br>
        ${totalDetik} detik <br> <hr>`
        );

    // detik ke jam menit detik
    alert("Mengubah Detik > Jam, Menit, dan Detik")
    let totalDetik1 = prompt("Masukkan total detik:");

    let jam = Math.floor(totalDetik / 3600);
    let sisaDetik = totalDetik % 3600;
    let menit = Math.floor(sisaDetik / 60);
    let detik = sisaDetik % 60;

    document.write(
        `Mengubah Detik ke Jam, Menit, dan Detik <br>
        ${jam} jam, ${menit} menit, ${detik} detik`);

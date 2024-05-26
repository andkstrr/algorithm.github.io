<script>
    let nama = "Yogi";
    let gaji_pokok = 300000;

    let tunjangan = 0.20 * gaji_pokok;
    let pajak = 0.15 * ( gaji_pokok + tunjangan )

    let gaji_bersih = gaji_pokok + tunjangan - pajak;

    console.log( `Nama Karyawan ${nama}, tunjangannya adalah ${tunjangan} pajaknya adalah ${pajak} dan gaji bersihnya adalah ${gaji_bersih}`)
</script>
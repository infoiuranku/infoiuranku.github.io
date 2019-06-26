$.getJSON('https://script.google.com/macros/s/AKfycbzPDHeA7lPYRXuLRc3IzX46D37Y6SfLkU1u8bsILiNz3dN-lMc/exec?id=1hRhcBSIS42Od3fShMIiI6nS9XFzP57PU1Yr3kyjO_DY&sheet=data_uang_masuk', function (dataku) {
    let info = dataku.data;

    $.each(info, function (i, isidata) {

        $('#taruhdisini').append(`
                            <tr>
                                <td>` + isidata.no + `</td>
                                <td>` + isidata.namalengkap + `</td>
                                <td>` + isidata.prodi + `</td>
                                <td>` + isidata.grup + `</td>
                                <td>` + isidata.angkatan + `</td>
                                <td>` + isidata.semester1 + `</td>
                                <td>` + isidata.semester2 + `</td>
                                <td>` + isidata.semester3 + `</td>
                                <td>` + isidata.semester4 + `</td>
                                <td>` + isidata.semester5 + `</td>
                                <td>` + isidata.semester6 + `</td>
                                <td>` + isidata.semester7 + `</td>
                                <td>` + isidata.semester8 + `</td>
                                <td>Rp. ` + isidata.jumlah + `</td>
                            </tr>

                            `);
    });


    $.each(info, function (i, isidata) {
        $('#SekarangSemester').append(isidata.sekarangSemester);
    });
    // $.each(info, function (i, isidata) {
    //     $('#ok').append(isidata.totalSum);
    // });

    $.each(info, function (i, isidata) {
        $('#pemasukan').append(isidata.pemasukan);
    });

    $.each(info, function (i, isidata) {
        $('#keteranganPemasukan').append(isidata.keteranganPemasukan);
    });

    $.each(info, function (i, isidata) {

        $('#taruhdatadetaildisini').append(`
                            <tr>
                                <td>` + isidata.pemasukan + `</td>
                                <td>` + isidata.keteranganPemasukan + `</td>
                            </tr>

                            `);
    });



});


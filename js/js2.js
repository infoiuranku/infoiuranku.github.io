$.getJSON('https://script.google.com/macros/s/AKfycbzPDHeA7lPYRXuLRc3IzX46D37Y6SfLkU1u8bsILiNz3dN-lMc/exec?id=1hRhcBSIS42Od3fShMIiI6nS9XFzP57PU1Yr3kyjO_DY&sheet=data_detail', function (dataku) {
    let info = dataku.data;


    $.each(info, function (i, isidata) {
        $('#SekarangSemester').append(isidata.sekarangSemester);
    });

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailPemasukan').append(`
                            <tr>
                                <td>` + isidata.pemasukan + `</td>
                                <td>` + isidata.keteranganPemasukan + `</td>
                            </tr>

                            `);
    });

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailPengeluaran').append(`
                            <tr>
                                <td>` + isidata.pengeluaran + `</td>
                                <td>` + isidata.keteranganPengeluaran + `</td>
                            </tr>

                            `);
    });

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailSisa').append(`
                            <tr>
                                <td>` + isidata.sisa + `</td>
                                <td>` + isidata.keteranganSisa + `</td>
                            </tr>

                            `);
    });



});


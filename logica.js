//Tabla Original
var tabla;
var totalBD;
var Hoja1 = [];
 

function Alertar() {
    var total = Hoja1.length//Total de filas
    tablaBD = document.getElementsByTagName("table")[0];
    var Banco = ''
    var RFC;

    console.clear()
    console.log(Hoja1.length, total)
    for (let index = 0; index < total; index++) {
        var Detalles = Hoja1[index][11]; //Detalles original

        //Encontrar banco
        if (Detalles.includes('AFIRME')) {
            //console.log('AFIRME' , Detalles.split('RFC ')[1].split(',')[0])//Extraer despues de RFC y antes de la coma
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'AFIRME')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('DE LA CUENTA:')) {
            //console.log('DE LA CUENTA ' , Detalles.split('DE LA CUENTA: ')[1].split(',')[0])//Extraer despues de DE LA CUENTA:  y antes de la coma
            RFC = Detalles.split('DE LA CUENTA: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'DE LA CUENTA')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('DE LA CUENTA')) {
            RFC = Detalles.split('DE LA CUENTA ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'DE LA CUENTA')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BBVA BANCOMER') && Detalles.includes('RFC:')) {
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BBVA BANCOMER')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BBVA BANCOMER')) {
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BBVA BANCOMER')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('SANTANDER') && Detalles.includes('RFC:')) {
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'SANTANDER')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('SANTANDER')) {
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'SANTANDER')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BANAMEX') && Detalles.includes('RFC: ')) {//RFC: ? 
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BANAMEX')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BANAMEX') && Detalles.includes('RFC:')) {//RFC:? 
            RFC = Detalles.split('RFC:')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BANAMEX') 
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BANAMEX')) {
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BANAMEX')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BANREGIO') && Detalles.includes('RFC:')) {
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BANREGIO')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('BANREGIO')) {
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'BANREGIO')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('SCOTIABANK') && Detalles.includes('RFC:')) { 
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'SCOTIABANK')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta 
        } else if (Detalles.includes('SCOTIABANK')) { 
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta =  respuesta === undefined ? 'NI' : respuesta 
            Hoja1[index][12] = Empalme(RFC, 'SCOTIABANK')
        } else if (Detalles.includes('DEPOSITO EFECTIVO')) {
            var FechaAplicacion = tabla.rows[index].cells[2].childNodes[0].nodeValue; //Detalles original
            //console.log('DEPOSITO EFECTIVO: ', FechaAplicacion)
            Hoja1[index][12] = Empalme(FechaAplicacion, 'DEPOSITO EFECTIVO')
        } else if (Detalles.includes('HSBC') && Detalles.includes('RFC:')) {
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'HSBC')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('HSBC')) { 
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'HSBC')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('STP') && Detalles.includes('RFC:')) { 
            RFC = Detalles.split('RFC: ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'STP')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('STP')) { 
            RFC = Detalles.split('RFC ')[1].split(',')[0]
            var respuesta = Empalme(RFC, 'STP')
            Hoja1[index][12] = respuesta === undefined ? 'NI' : respuesta
        } else if (Detalles.includes('en cajero Banorte')) {
            var FechaAplicacion = tabla.rows[index].cells[2].childNodes[0].nodeValue; //Detalles original
            // console.log('en cajero Banorte',FechaAplicacion, Detalles.split('. -')[1])
            Hoja1[index][12] = Empalme(FechaAplicacion, 'en cajero Banorte')
        }
    }

    /* for (j = 1; j <= totalBD - 1; j++) {//filas
        var Detalles = tablaBD.rows[j].cells[11].childNodes[0].nodeValue;
        var CHEQUE = tablaBD.rows[j].cells[12].childNodes[0].nodeValue;

        console.log(j, CHEQUE);
        ///////////////////////// INSERTAR DATOS ///////////////////////var date_format = new Date(date_input).toDateString("yyyy-MM-dd");
        //TECNO FON NPRONMEOL
    } */
}

function RespaldarTabla() {
    tabla = document.getElementsByTagName("table")[0];
    tabla.name = 'RespaldoOriginal'

    let total = tabla.rows.length

    Hoja1 = [];
    for (var j = 0; j < total; j++) { //filas 

        var Cuenta = tabla.rows[j].cells[0].childNodes[0].nodeValue;
        var FechaOperacion = tabla.rows[j].cells[1].childNodes[0].nodeValue;
        var FechaAplicacion = tabla.rows[j].cells[2].childNodes[0].nodeValue;
        var Referencia = tabla.rows[j].cells[3].childNodes[0].nodeValue;
        var Descripcion = tabla.rows[j].cells[4].childNodes[0].nodeValue;
        var Transaccion = tabla.rows[j].cells[5].childNodes[0].nodeValue;
        var Sucursal = tabla.rows[j].cells[6].childNodes[0].nodeValue;
        var Despositos = tabla.rows[j].cells[7].childNodes[0].nodeValue || '-';
        var Retiros = tabla.rows[j].cells[7].childNodes[0].nodeValue || '-'; //Falta arreglar
        var Saldo = tabla.rows[j].cells[9].childNodes[0].nodeValue || '-';
        var Movimientos = tabla.rows[j].cells[10].childNodes[0].nodeValue || '-';
        var Detalles = tabla.rows[j].cells[11].childNodes[0].nodeValue;
        var Cheque = tabla.rows[j].cells[12].childNodes[0].nodeValue;
        var Fila = [Cuenta, FechaOperacion, FechaAplicacion, Referencia, Descripcion, Transaccion, Sucursal, Despositos, Retiros, Saldo, Movimientos, Detalles, Cheque]
        //console.log(Fila)
        Hoja1.push(Fila);
    }
}

function Empalme(RFC, Banco) {
    totalBD = tablaBD.rows.length//Total de filas

    for (j = 1; j <= totalBD - 1; j++) {//filas BF
        var DetallesBD = tablaBD.rows[j].cells[11].childNodes[0].nodeValue;
        var CHEQUE = tablaBD.rows[j].cells[12].childNodes[0].nodeValue;
        /* if (DetallesBD.includes(RFC)) {
            console.log(j, RFC, CHEQUE);
            //tabla.rows[j].cells[12].childNodes[0].nodeValue = CHEQUE;
            return CHEQUE
        } */


        //console.log('Iterar '+RFC + ' Banco '+Banco)
        if (Banco == 'AFIRME' || Banco == 'BBVA BANCOMER' || Banco == 'SANTANDER' || Banco == 'BANAMEX' || Banco == 'BANREGIO' || Banco == 'SCOTIABANK' || Banco == 'HSBC' || Banco == 'STP' || Banco == 'DE LA CUENTA') {
            if (DetallesBD.includes(RFC)) {
                //console.log(j, RFC, CHEQUE);
                return CHEQUE
            } 
        } else if (Banco == 'DEPOSITO EFECTIVO' || Banco == 'en cajero Banorte') {
            if (DetallesBD.includes(RFC)) {
                //console.log(j, RFC, CHEQUE);
                return RFC
            } 
        }

        ///////////////////////// INSERTAR DATOS ///////////////////////var date_format = new Date(date_input).toDateString("yyyy-MM-dd");
        //TECNO FON NPRONMEOL
    }
}


function MostrarOriginal() {
    console.clear()
    console.table(Hoja1)
}


function LimpiarTablaHTML(params) {
    console.clear()
    // Obtener el elemento por su ID

    var tbody = document.querySelector("#SegundaTabla tbody");
    // Limpiar el contenido del tbody
    tbody.innerHTML = "";
}

function LimpiarConsola() {
    console.clear()
}



function Exportar() {
    var opts = [{
        sheetid: 'Hoja1',
        header: true
    }];
    var result = alasql('SELECT * INTO XLSX("ReporteLimpio_' + moment().format('L') + '.xlsx",?) FROM ?', [opts, [Hoja1]]);
}
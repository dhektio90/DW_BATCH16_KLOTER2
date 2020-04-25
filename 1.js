<script type="text/javascript" charset="utf-8">
function serialNumber(panjang) {
    var kata = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var hasil = '';
    for ( var i = 0; i < panjang; i++ ) {
        hasil += kata.charAt(Math.floor(Math.random() * kata.length));
    }
    return hasil ;
}

document.write(serialNumber(4)+"-"+serialNumber(4)+"-"+serialNumber(4)+"-"+serialNumber(4));        
        
//console.log(serialNumber(4)+"-"+serialNumber(4)+"-"+serialNumber(4)+"-"+serialNumber(4));

//</script>

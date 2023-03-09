

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
//  var hora = 22

    msg.innerHMTL = `Agora são ${hora} horas.`

    if(hora >= 6 && hora <= 12) {
        // BOM DIA!
        img.src = './img/manha.png'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = './img/tarde.png'
    } else {
        // BOA NOITE!
        img.src = './img/noite.png'
    }

}

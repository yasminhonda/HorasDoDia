function carregar(){
    let msg = document.querySelector('.msg')
    let img = document.querySelector('img')

    let data = new Date()
    let hora = data.getHours()
    let min = zeroAEsquerda(data.getMinutes())

    msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 4 && hora < 12){
        msg.innerHTML += `<br>Bom dia!`
        img.src = './assets/img/manha.png'
        document.body.style.background = '#91f0eb'
    } else if (hora >=12 && hora < 19){
        msg.innerHTML += `<br>Boa tarde!`
        img.src = './assets/img/tarde.png'
        img.alt = 'foto tarde'
        document.body.style.background = '#ffd95c'
    } else {
        msg.innerHTML += `<br>Boa noite!`
        img.src = './assets/img/noite.png'
        img.alt = 'foto noite'
        document.body.style.background = '#0c0036'
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
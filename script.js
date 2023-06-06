let btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
    let input_vel = document.querySelector('#ivel')
    let vel = Number(input_vel.value)
    let resultado = document.getElementsByClassName('result')[0]
    const mediaVelocidade = 60
    if (vel > mediaVelocidade) {
        resultado.innerHTML = `A velocidade permitida é ${mediaVelocidade} Km/h, <strong>MULTADO</strong>!`
    } else {
        resultado.innerHTML = `Dirija sempre usando o cinto de segurança e beba com moderação!`
    }
})
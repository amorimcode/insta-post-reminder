const Timer = {
    time: 0.1 * 60,
    currentTime: 0,
    interval: null,
    init() {
        Timer.currentTime = Timer.time
        console.log(Timer.currentTime)
        // setInterval = executa a função countdown() a cada 1000 milisegundos
        setInterval(Timer.countdown, 1000)
    },

    countdown() {
        Timer.currentTime = Timer.currentTime - 1 
        console.log(Timer.currentTime)
    }
}

export { Timer }
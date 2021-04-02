const Emitter = {
    events: {},


    on(event, cb) {
        Emitter.events[event] = cb
        console.log(Emitter.events)
    }
}

Emitter.on('click', () => console.log("cliquei"))

Emitter.events.click()

export { Emitter }
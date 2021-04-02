const Emitter = {
    events: {},

    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb)
    },

    emit(event, ...rest) {
        if (event in Emitter.events === false) {
            return;
        }

        console.log('O rest é ', rest)

        Emitter.events[event].forEach((e) => {
            e(...rest)
        })
    }
}

export { Emitter }
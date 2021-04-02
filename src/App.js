import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const App = {
    async start() {
        try {

            await Notifyer.init()
            Emitter.on('countdown-start', () => {
                Notifyer.notify({
                    title: 'Time to post',
                    body: "Create some content to help your community."
                })
            })

            Timer.init(0.1 * 60)


        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }
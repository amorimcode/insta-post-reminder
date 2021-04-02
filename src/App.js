import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'

const App = {
    async start() {
        try {
            Timer.init()
            // await Notifyer.init()
            // Notifyer.notify({
            //     title: 'Time to post',
            //     body: "Create some content to help your community."
            // })
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }
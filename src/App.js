import { Notifyer } from './Notifyer.js'

const App = {
    async start() {
        try {
            await Notifyer.init()
            Notifyer.notify({
                title: 'Time to post',
                body: "Create some content to help your community."
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }
const Notifyer = {
    async init() {
        const permission = await Notification.requestPermission()
        if (permission != "granted") {
            throw new Error("Permission denied")
        }
    },
    notify({ title, body, icon }) {
        return () => new Notification(title, {
            body: body,
            icon: icon
        })
    },
}
export { Notifyer }
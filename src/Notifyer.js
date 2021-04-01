const Notifyer = {
    async init() {
      const permission = await Notification.requestPermission()
      if (permission != "granted") {
          throw new Error("Permissin denied")
      }



    },
    notify({title, body, icon}) {
        new Notification(title, {
            body: body,
            icon: icon
        })
    },
}
export { Notifyer }
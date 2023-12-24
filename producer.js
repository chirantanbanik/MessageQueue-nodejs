const { Queue } = require("bullmq")

const notificationQueue = new Queue("email-queue", {
    connection: {
        host: "127.0.0.1",
        port: 6379
    }
})

async function init(){
    const res = await notificationQueue.add("email to Chirantan", {
        email: "banikchirantan16@gmail.com",
        subject: "Welcome Message",
        body: "Hey, Chirantan. I'm very happy to invite you to our Platform"
    })
    console.log("Job added to queue", res.id)
}

init()
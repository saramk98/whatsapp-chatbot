const qrcode =require('qrcode-terminal')

const {Client,LocalAuth}= require('whatsapp-web.js')

const whatsapp =new Client({
    authStrategy:new LocalAuth()
})

whatsapp.on('qr',qr =>{
    qrcode.generate(qr,{
        small:true
    })
})

whatsapp.on('message',async message =>{
    // replying to message on a specific keyword
    // if(message.body === "hello"){
    //     message.reply("hello from user this is an automated message")
    // }
        message.reply("hello from user this is an automated message")
})

whatsapp.on('ready',()=>{
    console.log("client is ready")
})

whatsapp.initialize()
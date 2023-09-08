const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'ikhsanmaner.my.id'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6283146993017'] //ur owner number
global.ownernomer = "6283146993017" //ur owner number2
global.ownername = "Ikhsan" //ur owner name
global.ytname = "@malasnulisnamapengguna" //ur yt chanel name
global.socialm = "Owner ShanBot!" //ur github or insta name
global.location = "Jawa Timur, Indonesia " //ur location

//new
global.botname = "ShanBot ✆"
global.ownernumber = '6283146993017'
global.ownername = 'Ikhsan'
global.ownerNumber = ["6283146993017@s.whatsapp.net"]
global.ownerweb = "https://ikhsanmaner.my.id"
global.websitex = "https://www.alliyulmanan.blogspot.com"
global.wagc = "https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg"
global.themeemoji = '🚩'
global.wm = "ShanBot"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "Sticker by"
global.author = "ShanBot"
global.creator = "6283146993017@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih kak!',
    admin: 'Fitur khusus *Admin Group*!',
    botAdmin: '*ShanBot* harus jadi *admin group*!!',
    premime: 'Fitur khusus *member premium* ketik *.owner* untuk menghubungi & menanyakan kepada *owner* tentang member *premium*!!!',
    owner: 'Fitur khusus *Owner ShanBot*!!!!',
    group: 'Fitur khusus *group*, Bergabunglah ke group kami!!',
    private: 'Fitur khusus *Private Chat*!',
    bot: 'Fitur khusus *ShanBot*!',
    wait: '*Sedang diproses*...',
    linkm: 'Linknya mana kak?',
    endLimit: '*Limit habis*, Limit akan *direset* setiap *12 Jam*!',
    nsfw: 'Fitur *NSFW* tidak diaktifkan *digroup* ini!, *Hubungi admin*!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
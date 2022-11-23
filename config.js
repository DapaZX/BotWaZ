/**
   * Create By Dika Ardnt.
   * Recode By Dapa Maker
   * Contact Me on wa.me/6281349277979
   * Follow https://github.com/DapaZX
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283125701141','6281349277979','6281258356454']
global.ownernomer = "6283125701141","6281349277979","6281258356454"
global.premium = ['6281349277979','6285718252075','6281258356454']
global.packname = 'DapaZ'
global.ownername = "DapaZX"
global.author = 'Dapa - MAKER'
global.sessionName = 'session'  //serah apa
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['.']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "∞",
    free: 15
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/DapaZ'
global.myyt = 'https://youtube.com/channel/UCMfqoj1vq3XDUKjlkL_fTKA'
global.myytv = 'https://youtube.com/channel/UCMfqoj1vq3XDUKjlkL_fTKA'
global.mygc = "-"
global.botname = 'Dapa - BOTZ'
global.akulaku = 'Bot By Dapa Maker'
global.ytname = 'YT Dapa Maker'
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/1139eacb233c973c35ddb.jpg' }



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "ミ★ 𝘖𝘴𝘩𝘢𝘥𝘢 ★彡", author: "۷ıɱųƙɬɧı" })
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/0e6efa7a258996f46d7c7.png",//patrick huu
 "https://telegra.ph/file/6e682a67a060752af646e.png",//anime yntkts
 "https://telegra.ph/file/992d29f014b1831325720.png",//windah bocil
 "https://telegra.ph/file/6e2af4fabec955f7af86e.png",//patrick bawa minum
 "https://telegra.ph/file/0ed14859586170142608f.png",//pak polisi pap tt
 "https://telegra.ph/file/eb2b5e5fff569896c1639.png",//kucing1
 "https://telegra.ph/file/9181e307e543690ff2f6b.png",//kacamata
 "https://telegra.ph/file/2dd4603859ba14a4060ed.png",//patrick pembohong
 "https://telegra.ph/file/b3de960a1b4b340555ede.png",//spongebob FBI
 "https://telegra.ph/file/7be79e329119180bb8f1c.png",//mazowski monster inc
 "https://telegra.ph/file/e72b684713a264d3668f6.png",//wkwk
 "https://telegra.ph/file/4bd9248c2aba4f2fd0256.png",//kucing2
 "https://telegra.ph/file/90e2afba8c876eefb9b3e.png",//patrick anak setan
 "https://telegra.ph/file/e0539bc9ea7af81f01efc.png",//mazowski 2
 "https://telegra.ph/file/a1ab49e778046437ba8e2.png",//hengker
 "https://telegra.ph/file/e07196cb825bd5ce061e7.png",//anjing
 "https://telegra.ph/file/355e11927438e288a91f7.png",//bapak bapak lovee
 "https://telegra.ph/file/98c8ad9430df34baf6c5a.png",//abang saleh
 "https://telegra.ph/file/ca7cc25317b52b0ea34ba.png"//hengker2
]

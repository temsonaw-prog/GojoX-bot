let handler = async (m, { conn }) => {
    let owner = '237622281016' // <-- METS TON NUMERO ICI sans +
    let name = 'THE HACKER' // <-- METS TON NOM ICI
    
    let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;type=CELL:${owner}
END:VCARD`
    
    await conn.sendContact(m.chat, [owner], m)
    m.reply(`👑 *Créateur de GojoX Bot*\nNom: ${name}`)
}
handler.command = ['creator', 'owner', 'crea']
handler.help = ['creator']
handler.tags = ['creator']

export default handler
const db = require("./db");
module.exports = {
  "message":async(guildId)=>{
    const data = await db(`SELECT * FROM stats WHERE id = ${guildId};`);
    if(data[0]){
      await db(`UPDATE stats SET message = ${Number(data[0].message)+1} WHERE id = ${data[0].id};`);
    }
  },
  "join":async(guildId)=>{
    const data = await db(`SELECT * FROM stats WHERE id = ${guildId};`);
    if(data[0]){
      await db(`UPDATE stats SET \`join\` = ${Number(data[0].message)+1} WHERE id = ${data[0].id};`);
    }
  },
  "leave":async(guildId)=>{
    const data = await db(`SELECT * FROM stats WHERE id = ${guildId};`);
    if(data[0]){
      await db(`UPDATE stats SET \`leave\` = ${Number(data[0].message)+1} WHERE id = ${data[0].id};`);
    }
  }
}
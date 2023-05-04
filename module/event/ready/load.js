module.exports = async(client)=>{
  const cron = require("node-cron");
  const os = require("os");
  const db = require("../../lib/db");
  const config = require("../../../config.json");
  cron.schedule("0 * * * * *",async()=>{
    const log = await db("SELECT * FROM log");

    let ping = client.ws.ping;
    if(ping > 500){
      ping = 500;
    }
    const user = client.guilds.cache.map((g)=>g.memberCount).reduce((a,c)=>a+c);
    const guild = client.guilds.cache.size;
    const count = await db(`SELECT * FROM count WHERE id = ${config.id} LIMIT 1;`);
    const cpu = (await new Promise((resolve)=>
      require("os-utils").cpuUsage(resolve)
    )*100).toFixed(2);
    const ram = 100 - Math.floor((os.freemem()/os.totalmem())*100);

    if(log.length > 168){
      log.map(data=>{

      });
    }
    console.log("a")
    await db(`INSERT INTO log (time, ping, user, guild, message, command, cpu, ram) VALUES(NOW(),"${ping}","${user}","${guild}","${count[0].message}","${count[0].command}","${cpu}","${ram}");`);
    await db(`INSERT INTO count (id, message, command) VALUES("${config.id}","0","0") ON DUPLICATE KEY UPDATE id = VALUES (id),message = VALUES (message), command = VALUES (command);`);
  });
}
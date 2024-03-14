module.exports = async(interaction)=>{
  const { ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits, Colors } = require("discord.js");
  const config = require("../../../config.json");
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "colorrole"){
    const name = interaction.options.getString("name");
    const color = interaction.options.getString("color");

    if(!interaction.member.permissions.has(PermissionFlagsBits.ManageRoles)) return await interaction.reply({
      embeds:[{
        color: Colors.Red,
        author:{
          name: "権限がありません",
          icon_url: "https://cdn.takasumibot.com/images/system/error.png"
        },
        description: "このコマンドを実行するには以下のの権限を持っている必要があります",
        fields:[
          {
            name: "必要な権限",
            value: "```ロールの管理```"
          }
        ]
      }],
      ephemeral: true
    });

    if(!interaction.guild.members.me.permissionsIn(interaction.channel).has(PermissionFlagsBits.ManageRoles)) return await interaction.reply({
      embeds:[{
        color: Colors.Red,
        author:{
          name: "BOTに権限がありません",
          icon_url: "https://cdn.takasumibot.com/images/system/error.png"
        },
        description: "このコマンドはBOTに以下の権限が必要です",
        fields:[
          {
            name: "必要な権限",
            value: "```ロールの管理```"
          }
        ]
      }],
      ephemeral: true
    });

    try{
      const role = await interaction.guild.roles.create({
        name: name,
        color: Number(color),
        position: interaction.guild.members.me.roles.highest.position,
        mentionable: false
      });

      await interaction.reply({
        embeds:[{
          color: Colors.Green,
          author:{
            name: "ロールを作成しました",
            icon_url: "https://cdn.takasumibot.com/images/system/success.png"
          },
          description: `作成したロール:${role}`
        }]
      });
    }catch(error){
      await interaction.reply({
        embeds:[{
          color: Colors.Red,
          author:{
            name: "ロールを作成できませんでした",
            icon_url: "https://cdn.takasumibot.com/images/system/error.png"
          },
          fields:[
            {
              name: "エラーコード",
              value: `\`\`\`${error}\`\`\``
            }
          ]
        }],
        components:[
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setLabel("サポートサーバー")
                .setURL(config.inviteUrl)
                .setStyle(ButtonStyle.Link))
        ],
        ephemeral: true
      });
    }
  }
}
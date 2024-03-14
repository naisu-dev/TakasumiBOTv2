module.exports = async(interaction)=>{
  const { ButtonBuilder, ActionRowBuilder, ButtonStyle, Colors } = require("discord.js");
  const config = require("../../../config.json");
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "about"){

    await interaction.reply({
      embeds:[{
        color: Colors.Green,
        title: "TakasumiBOTとは",
        description: "便利な多機能BOTを目指して開発されています\nサポートサーバーへの参加もよろしくお願いします\n開発:[@taka005](https://discord.com/users/790489873957781536)\n\n関連リンク\n[公式サイト](https://www.takasumibot.com/)\n[ステータス](https://status.takasumibot.com/)\n[サーバー掲示板](https://servers.takasumibot.com/)\n[TakasumiBOT Auth](https://auth.takasumibot.com/)"
      }],
      components:[
        new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setLabel("ABOUT")
              .setCustomId(`about_about_${interaction.user.id}`)
              .setStyle(ButtonStyle.Primary))
          .addComponents(
            new ButtonBuilder()
              .setLabel("FAQ")
              .setCustomId(`about_faq_${interaction.user.id}`)
              .setStyle(ButtonStyle.Primary))
          .addComponents(
            new ButtonBuilder()
              .setLabel("AD")
              .setCustomId(`about_ad_${interaction.user.id}`)
              .setStyle(ButtonStyle.Primary)),
        new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setLabel("BOTを追加")
              .setURL("https://discord.com/api/oauth2/authorize?client_id=981314695543783484&permissions=70368744177655&redirect_uri=https%3A%2F%2Fdiscord.gg%2FNEesRdGQwD&response_type=code&scope=identify%20bot%20applications.commands")
              .setStyle(ButtonStyle.Link))
          .addComponents(
            new ButtonBuilder()
              .setLabel("サポートサーバー")
              .setURL(config.inviteUrl)
              .setStyle(ButtonStyle.Link))
      ]
    });
  }
}
module.exports = async(interaction)=>{
  const { ButtonBuilder, ActionRowBuilder, ButtonStyle, Colors } = require("discord.js");
  const fetchGuildCounts = require("../../lib/fetchGuildCounts");
  const config = require("../../../config.json");
  if(!interaction.isButton()) return;
  if(interaction.customId.startsWith("about_")){
    const data = interaction.customId.split("_");

    const server = Math.floor(await fetchGuildCounts(interaction.client)/10)*10;

    const type = {
      "about":[{
        color: Colors.Green,
        title: "TakasumiBOTとは",
        description: "便利な多機能BOTを目指して開発されています\nサポートサーバーへの参加もよろしくお願いします\n開発:[@taka005](https://discord.com/users/790489873957781536)\n\n関連リンク\n[公式サイト](https://www.takasumibot.com/)\n[ステータス](https://status.takasumibot.com/)\n[サーバー掲示板](https://servers.takasumibot.com/)\n[TakasumiBOT Auth](https://auth.takasumibot.com/)"
      }],
      "faq":[{
        color: Colors.Green,
        title: "FAQ",
        description: `よくある質問一覧です。他の質問がある場合は[サポートサーバー](${config.inviteUrl})にてよろしくお願いします`,
        fields:[
          {
            name: "何で開発しているの？",
            value: "Node.js(JavaScript)で構築しています。開発環境はVScodeです"
          },
          {
            name: "どんなサービスを使って運営しているの？",
            value: "Github、CloudFlare、RSP Internet Group等を使用し運営しています"
          },
          {
            name: "TakasumiBOT Authとは?",
            value: "TakasumiBOTの認証に用いられるWeb認証システムです"
          },
          {
            name: "BOTや、その他サービスは何で動かしているの？",
            value: "セキュリティの為公表することができません"
          },
          {
            name: "BOTの機能はどうやって使うの？",
            value: "全コマンドはスラッシュコマンドに対応しています。詳しい使い方は[ここから](https://www.takasumibot.com/)"
          },
          {
            name: "どこでBOT等のお知らせを受け取れますか？",
            value: "サポートサーバーまたは、`/follow`コマンドでアナウンスチャンネルを追加することで受け取りが可能です"
          }
        ]
      }],
      "ad":[{
        color: Colors.Green,
        description: `**◢◤◢◤◢◤ TakasumiBOT ◢◤◢◤◢◤**\nとても便利なBOTです\nグローバルチャット、サーバー掲示板、認証機能などさまざまな便利機能があります\n導入数 ${server}サーバー超え!\n\n・招待\nhttps://discord.com/application-directory/981314695543783484\n・ 公式サイト\nhttps://www.takasumibot.com/\n・ステータス\nhttps://status.takasumibot.com/\n・サーバー掲示板\nhttps://servers.takasumibot.com/\n・TakasumiBOT Auth\nhttps://auth.takasumibot.com/\n・サポートサーバー\n${config.inviteUrl}\n・Email\ntakasumibot@gmail.com\n\nよければプロジェクトに貢献してください\nhttps://github.com/Taka005/TakasumiBOTv2\n**◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤**`
      }]
    }

    if(data[2] !== interaction.user.id) return await interaction.reply({
      embeds:[{
        author:{
          name: "ページを更新できませんでした",
          icon_url: "https://cdn.takasumibot.com/images/system/error.png"
        },
        color: Colors.Red,
        description: "このコマンドは別の人が操作しています"
      }],
      ephemeral: true
    });

    try{
      await interaction.message.edit({
        embeds: type[data[1]]
      });

      await interaction.deferUpdate({});
    }catch(error){
      await interaction.reply({
        embeds:[{
          color: Colors.Red,
          author:{
            name: "ページを更新できませんでした",
            icon_url: "https://cdn.takasumibot.com/images/system/error.png"
          },
          description: "BOTの権限が不足しています",
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
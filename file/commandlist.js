const { SlashCommandBuilder, ContextMenuCommandBuilder, ApplicationCommandType, REST, Colors, Routes } = require("discord.js");

module.exports = {
  5000:{
    type: "fun",
    name: "/5000",
    description: "5000兆円ジェネレーター",
    example: "`/5000 上の文字 下の文字`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし",
    data: new SlashCommandBuilder()
      .setName("5000")
      .setDescription("5000兆円ジェネレーター")
      .addStringOption(option =>
        option
          .setName("top")
          .setDescription("上の文字")
          .setRequired(true))
      .addStringOption(option =>
        option
          .setName("bottom")
          .setDescription("下の文字")
          .setRequired(true))
  },
  about:{
    type: "bot",
    name: "/about",
    description: "BOTについての情報や、関連リンクを表示します",
    example: "`/about`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
        "必要なし"
    ],
    note: "なし",
    data: new SlashCommandBuilder()
      .setName("about")
      .setDescription("BOTについての情報や関連リンクを表示します")
  },
  account:{
    type: "bot",
    name: "/account",
    description: "登録されているアカウント情報を表示します",
    example: "`/account`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "アカウント情報の削除は[サポートサーバー](https://discord.gg/NEesRdGQwD)にて連絡してください",
    data: new SlashCommandBuilder()
      .setName("account")
      .setDescription("登録されているアカウント情報を表示します")
  },
  activity:{
    type: "info",
    name: "/activity",
    description: "同じアクティビティの人を表示します",
    example: "`/activity`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし",
    data: new SlashCommandBuilder()
      .setName("activity")
      .setDescription("自分と同じアクティビティの人を表示します")
      .addStringOption(option =>
        option
          .setName("name")
          .setDescription("アクティビティの名前")
          .setAutocomplete(true))
  },
  ad:{
    type: "bot",
    name: "/ad",
    description: "BOTの宣伝を表示します",
    example: "`/ad`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし",
    data: new SlashCommandBuilder()
      .setName("ad")
      .setDescription("BOTの広告を表示します")
  },
  afk:{
    type: "othor",
    name: "/afk",
    description: "AFK(留守電)を設定できます",
    example: "`/afk お出かけ中`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "自分が会話に戻ると、その間にされたメンションの数が表示されます",
    data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("AFKを設定します(留守電)")
    .addStringOption(option =>
      option
        .setName("message")
        .setDescription("伝言メッセージ"))
  },
  auth:{
    type: "manage",
    name: "/auth",
    description: "メンバー認証を設定します\n4種類の認証方式を選択できます",
    example: "`/auth 標準`",
    userPermission:[
      "ロールの管理"
    ],
    botPermission:[
      "ロールの管理",
      "メッセージの送信",
      "チャンネルの閲覧"
    ],
    note: "標準: ボタンを押して認証します\n計算: 簡単な計算を行って認証します\n画像: 画像に表示される文字列を選択して認証します\nWeb: TakasumiBOT Authを使用しWebで認証します",
    data: new SlashCommandBuilder()
      .setName("auth")
      .setDescription("メンバー認証を設定します")
      .addStringOption(option =>
        option
          .setName("type")
          .setDescription("認証方式")
          .setRequired(true)
          .addChoices(
            { name: "標準", value: "normal" },
            { name: "計算", value: "math" },
            { name: "画像", value: "image" },
            { name: "ウェブ", value: "web" },
          ))
      .addRoleOption(option =>
        option
          .setName("role")
          .setDescription("付与するロール")
          .setRequired(true))
  },
  avatar:{
    type: "info",
    name: "/avatar",
    description: "指定されたユーザーのアイコンを表示します",
    example: "`/avatar @TakasumiBOT`\n`/avatar 981314695543783484`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "サーバーで違うアイコンを設定してる場合は両方表示されます",
    data: new SlashCommandBuilder()
      .setName("avatar")
      .setDescription("ユーザーのアイコンを表示します")
      .addStringOption(option =>
        option
          .setName("id")
          .setDescription("ユーザーID・メンション"))
  },
  ban:{
    type: "manage",
    name: "/ban",
    description: "メンバー・ユーザーをサーバーからBANすることができます",
    example: "`/ban @Arashi`\n`/ban 1066168542669590599`",
    userPermission:[
      "メンバーをBAN"
    ],
    botPermission:[
      "メンバーをBAN"
    ],
    note: "サーバーにいないユーザーでもIDを使用してBANすることができます"
  },
  button:{
    type: "tool",
    name: "/button",
    description: "URLのボタンを生成します",
    example: "`/button Name https://google.com`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  channel:{
    type: "info",
    name: "/channel",
    description: "指定したチャンネルの情報を表示します",
    example: "`/channel #一般`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  cipher:{
    type: "tool",
    name: "/cipher",
    description: "文字列を暗号・復号します",
    example: "`/cipher 暗号化 moji key`\n`/cipher 復号化 d1faf7e95c key`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "aes-128-cbcを使用して暗号化しています"
  },
  colorrole:{
    type: "manage",
    name: "/colorrole",
    description: "色付きロールを簡単に作成できます",
    example: "`/colorrole 白`",
    userPermission:[
      "ロールの管理"
    ],
    botPermission:[
      "ロールの管理"
    ],
    note: "なし"
  },
  db:{
    type: "bot",
    name: "/db",
    description: "関係者以外実行できません",
    example: "なし",
    userPermission:[
      "関係者"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  debug:{
    type: "bot",
    name: "/debug",
    description: "関係者以外実行できません",
    example: "なし",
    userPermission:[
      "関係者"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "メッセージの送信",
      "メッセージの管理"
    ],
    note: "なし"
  },
  del:{
    type: "manage",
    name: "/del",
    description: "指定された数だけメッセージを一括で削除します",
    example: "`/del 30`\n`/del 30 @Arashi`",
    userPermission:[
      "メッセージの管理"
    ],
    botPermission:[
      "メッセージの管理"
    ],
    note: "2週間前かつ100個までメッセージを削除できます"
  },
  embed:{
    type: "manage",
    name: "/embed",
    description: "埋め込みを簡単に作成し表示できます",
    example: "`/embed`",
    userPermission:[
      "メッセージの管理"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  emoji:{
    type: "info",
    name: "/emoji",
    description: "指定した絵文字の情報を表示します",
    example: "`/emoji 🤔`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "サーバー上のカスタム絵文字を指定する必要があります"
  },
  enquete:{
    type: "tool",
    name: "/enquete",
    description: "アンケートを作成することができます",
    example: "`/enquete title`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "メッセージ履歴の閲覧"
    ],
    note: "なし"
  },
  export:{
    type: "manage",
    name: "/export",
    description: "サーバーのデータをJSON形式に出力します",
    example: "`/export`",
    userPermission:[
      "管理者"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "様々なサーバーのデータが含まれるため扱いには注意してください"
  },
  faq:{
    type: "bot",
    name: "/faq",
    description: "よくある質問一覧を表示します",
    example: "`/faq`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  follow:{
    type: "bot",
    name: "/follow",
    description: "BOTのアナウンスチャンネルを追加します",
    example: "`/follow`",
    userPermission:[
      "チャンネルの管理"
    ],
    botPermission:[
      "チャンネルの管理"
    ],
    note: "なし"
  },
  gif:{
    type: "search",
    name: "/gif",
    description: "GIF画像を検索して表示します",
    example: "`/gif Happy`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  globalchat:{
    type: "othor",
    name: "/globalchat",
    description: "色々なサーバーと繋がるグローバルチャットを有効化、無効化します",
    example: "`/globalchat`",
    userPermission:[
      "チャンネルの管理"
    ],
    botPermission:[
      "リアクションの追加",
      "チャンネルの閲覧",
      "チャンネルの管理",
      "メッセージの送信",
      "ウェブフックの管理"
    ],
    note: "会話するにはTakasumiBOT Authを使用し[利用規約](https://gc.taka.cf/)に同意する必要があります"
  },
  guess:{
    type: "money",
    name: "/guess",
    description: "所持金を使用して数字当てゲームをします",
    example: "`/guess 100 3`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "勝つと賭け金が3倍\n負けると賭け金から-1.5倍"
  },
  guideline:{
    type: "manage",
    name: "/guideline",
    description: "サーバーのガイドラインを作成し、同意するとロールが付与されます",
    example: "`/guideline @Role`",
    userPermission:[
      "ロールの管理"
    ],
    botPermission:[
      "ロールの管理",
      "チャンネルの閲覧",
      "メッセージの送信"
    ],
    note: "なし"
  },
  hash:{
    type: "tool",
    name: "/hash",
    description: "指定した方式でテキストをハッシュ化します",
    example: "`/hash テキスト SHA256`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  help:{
    type: "othor",
    name: "/help",
    description: "使い方を表示します",
    example: "`/help`\n`/help auth`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  hiroyuki:{
    type: "fun",
    name: "/hiroyuki",
    description: "ひろゆきを召喚、退出します",
    example: "`/hiroyuki`",
    userPermission:[
      "チャンネルの管理"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "チャンネルの管理",
      "メッセージの送信",
      "ウェブフックの管理"
    ],
    note: "なし"
  },
  invite:{
    type: "manage",
    name: "/invite",
    description: "カスタマイズされた招待リンクを作成します",
    example: "`/invite 100 1`\n`/invite 500`",
    userPermission:[
      "招待リンクの作成"
    ],
    botPermission:[
      "招待リンクの作成"
    ],
    note: "なし"
  },
  inviter:{
    type: "info",
    name: "/inviter",
    description: "招待ランキングを表示します",
    example: "`/inviter`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  invites:{
    type: "info",
    name: "/invites",
    description: "サーバー又はユーザーの招待一覧を表示します",
    example: "`/invites`\n`/invites @TakasumiBOT`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  kick:{
    type: "manage",
    name: "/kick",
    description: "指定されたメンバーをサーバーからKICKします",
    example: "`/kick @Arashi`",
    userPermission:[
      "メンバーをKICK"
    ],
    botPermission:[
      "メンバーをKICK"
    ],
    note: "サーバーに存在してるメンバーしかKICKできません"
  },
  leaderboard:{
    type: "money",
    name: "/leaderboard",
    description: "お金持ちランキングを表示します",
    example: "`/leaderboard`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  log:{
    type: "othor",
    name: "/log",
    description: "チャットの履歴を出力します",
    example: "`/log JSON 10`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "json、text形式が使用できます"
  },
  lottery:{
    type: "fun",
    name: "/lottery",
    description: "指定したロールを持っているメンバーから指定した人数を選びます",
    example: "`/lottery 10 @Role`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  math:{
    type: "tool",
    name: "/math",
    description: "式を計算します",
    example: "`/math 4 * 25`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  mc:{
    type: "tool",
    name: "/mc",
    description: "指定したアドレスのMinecraftサーバーの情報を表示します",
    example: "`/mc Java版 2b2t.jp`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  miq:{
    type: "fun",
    name: "/miq",
    description: "Make it a Quoteを生成します",
    example: "`/miq これはテストです`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  moderate:{
    type: "manage",
    name: "/moderate",
    description: "AutoModを使用したモデレート機能を設定します",
    example: "`/moderate spam`",
    userPermission:[
      "サーバーの管理"
    ],
    botPermission:[
      "サーバーの管理"
    ],
    note: "なし"
  },
  money:{
    type: "money",
    name: "/money",
    description: "ユーザーの所持金を確認します",
    example: "`/money @User`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  news:{
    type: "tool",
    name: "/news",
    description: "最近のニュースを表示します",
    example: "`/news`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  npm:{
    type: "search",
    name: "/npm",
    description: "NPMパッケージを検索して表示します",
    example: "`/npm discord.js`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  nslookup:{
    type: "tool",
    name: "/nslookup",
    description: "DNS情報を取得します",
    example: "`/nslookup google.com`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  omikuji:{
    type: "fun",
    name: "/omikuji",
    description: "おみくじを引きます",
    example: "`/omikuji`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  panel:{
    type: "manage",
    name: "/panel",
    description: "役職パネルを作成します",
    example: "`/panel title @Role1 @Role2`",
    userPermission:[
      "ロールの管理"
    ],
    botPermission:[
      "ロールの管理",
      "チャンネルの閲覧",
      "メッセージの送信"
    ],
    note: "同じロールは選択できません\n最大10個までロールを選択できます\nロールの付与にはレート制限があります"
  },
  pay:{
    type: "money",
    name: "/pay",
    description: "所持金を使用して機能を購入します",
    example: "`/pay 種類 10`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "グローバルチャットの色変更(黄色): 一回10円"
  },
  permission:{
    type: "info",
    name: "/permission",
    description: "指定されたユーザーの権限を表示します",
    example: "`/permission @TakasumiBOT`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  poll:{
    type: "tool",
    name: "/poll",
    description: "投票を作成することができます",
    example: "`/poll Title One two Three`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "リアクションの追加"
    ],
    note: "選択肢は最大12個まで設定できます"
  },
  pypi:{
    type: "search",
    name: "/pypi",
    description: "PIPパッケージを検索して表示します",
    example: "`/pypi discord.py`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  qr:{
    type: "tool",
    name: "/qr",
    description: "QRコードを生成・読み取ります",
    example: "`/qr 生成 text`\n`/qr 読み込む https://example.com/qr.png`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "読み込むURLは有効なものである必要があります"
  },
  random:{
    type: "fun",
    name: "/random",
    description: "ランダムで選びます",
    example: "`/random A B C`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  reload:{
    type: "bot",
    name: "/reload",
    description: "関係者以外実行できません",
    example: "なし",
    userPermission:[
      "関係者"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  reset:{
    type: "manage",
    name: "/reset",
    description: "実行したチャンネルを**完全**にリセットします",
    example: "`/reset`",
    userPermission:[
      "管理者"
    ],
    botPermission:[
      "チャンネルの管理",
      "チャンネルの閲覧",
      "メッセージの送信"
    ],
    note: "なし"
  },
  retranslate:{
    type: "fun",
    name: "/retranslate",
    description: "様々な言語で翻訳を10回繰り返します",
    example: "`/retranslate こんにちは`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  role:{
    type: "info",
    name: "/role",
    description: "指定した役職の情報を表示します",
    example: "`/role @Role`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
        "必要なし"
    ],
    note: "なし"
  },
  rolecount:{
    type: "info",
    name: "/rolecount",
    description: "それぞれのロールを持っている人数と割合を表示します",
    example: "`/rolecount`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  safeweb:{
    type: "tool",
    name: "/safeweb",
    description: "Webサイトの安全性を評価します",
    example: "`/safeweb https://google.com/`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "指定するURLは有効なものである必要があります"
  },
  script:{
    type: "tool",
    name: "/script",
    description: "プログラムを実行します",
    example: "`/script JavaScript`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  search:{
    type: "search",
    name: "/search",
    description: "Yahooで検索します",
    example: "`/search discord.js`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  server:{
    type: "info",
    name: "/server",
    description: "サーバーの情報を表示します",
    example: "`/server`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  setting:{
    type: "manage",
    name: "/setting",
    description: "サーバーの各種設定を変更します",
    example: "`/setting bump @Role`\n`/setting help`",
    userPermission:[
      "管理者"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "メッセージの送信",
      "ウェブフックの管理"
    ],
    note: "詳細は`/setting help`を実行してください"
  },
  short:{
    type: "tool",
    name: "/short",
    description: "短縮URLを作成します",
    example: "`/short https://google.com/`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "指定するURLは有効なものである必要があります"
  },
  skin:{
    type: "tool",
    name: "/skin",
    description: "マインクラフトのスキンを検索します",
    example: "`/skin User`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "Java版専用です"
  },
  slowmode:{
    type: "manage",
    name: "/slowmode",
    description: "チャンネルに低速モードを設定します",
    example: "`/slowmode 100`",
    userPermission:[
      "チャンネルの管理"
    ],
    botPermission:[
      "チャンネルの管理"
    ],
    note: "秒単位で低速を設定することができます"
  },
  snowflake:{
    type: "othor",
    name: "/snowflake",
    description: "Snowflakeを解析します",
    example: "`/snowflake 987698915820335124`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "有効な[Snowflake](https://discord.com/developers/docs/reference#snowflakes)である必要があります"
  },
  status:{
    type: "bot",
    name: "/status",
    description: "BOTの情報やサーバーの状態を表示します",
    example: "`/status`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  system:{
    type: "bot",
    name: "/system",
    description: "関係者以外実行できません",
    example: "なし",
    userPermission:[
      "関係者"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  ticket:{
    type: "manage",
    name: "/ticket",
    description: "簡易的なチケット機能を作成します",
    example: "`/ticket`",
    userPermission:[
      "チャンネルの管理",
      "メッセージの管理"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "チャンネルの管理",
      "メッセージの送信"
    ],
    note: "なし"
  },
  timeout:{
    type: "manage",
    name: "/timeout",
    description: "指定したメンバーをタイムアウトします",
    example: "`/timeout @Arashi 1000 荒らし`\n`/timeout @Arashi`",
    userPermission:[
      "メンバーをモデレート"
    ],
    botPermission:[
      "メンバーのモデレート"
    ],
    note: "秒単位でタイムアウトすることができます\n秒が指定されない場合デフォルト(30秒)になります"
  },
  top:{
    type: "othor",
    name: "/top",
    description: "実行したチャンネルの1番最初のメッセージリンクを表示します",
    example: "`/top`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "メッセージ履歴の閲覧"
    ],
    note: "なし"
  },
  translate:{
    type: "tool",
    name: "/translate",
    description: "テキストを翻訳します",
    example: "`/translate hello 日本語`\n`/translate こんにちは 英語`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "Google翻訳を使用して翻訳されています"
  },
  twitter:{
    type: "search",
    name: "/twitter",
    description: "ツイートを検索します",
    example: "`/twitter Discord`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "検索ワードに`id:ユーザー名`を指定することで特定のユーザーのツイートを取得できます"
  },
  user:{
    type: "info",
    name: "/user",
    description: "指定されたユーザーを検索して表示します",
    example: "`/user @TakasumiBOT`\n`/user 981314695543783484`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "メンバー情報も取得できる場合は詳細情報まで表示します"
  },
  warn:{
    type: "manage",
    name: "/warn",
    description: "指定されたユーザーを警告します",
    example: "`/warn @Arashi`",
    userPermission:[
      "サーバーの管理"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "メンバーがDMを拒否している場合警告できません"
  },
  webshot:{
    type: "tool",
    name: "/webshot",
    description: "Webサイトのスクリーンショットを撮影します",
    example: "`/webshot https://google.com/`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "指定するURLは有効なものである必要があります\n一部のサイトはスクリーンショットが撮影できない場合があります"
  },
  wiki:{
    type: "search",
    name: "/wiki",
    description: "Wikipediaの検索をします",
    example: "`/wiki Discord`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"     
  },
  work:{
    type: "money",
    name: "/work",
    description: "20分に1回お金を貰えます",
    example: "`/work`",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "100円から500円のお金が貰えます"     
  },
  アバターを表示:{
    type: "contextmenu",
    name: "アバターを表示",
    description: "ユーザーのアイコンを表示します",
    example: "`アバターを表示`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "サーバーで違うアイコンを設定してる場合は両方表示されます"
  },
  メンバー情報を表示:{
    type: "contextmenu",
    name: "メンバー情報を表示",
    description: "メンバーの情報を表示します",
    example: "`メンバー情報を表示`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "サーバーに存在しないメンバーは表示できません"
  },
  Make_it_a_Quote:{
    type: "contextmenu",
    name: "Make it a Quote",
    description: "Make it a Quoteを生成します",
    example: "`Make it a Quote`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "サーバーに存在しないメンバーは表示できません"
  },
  権限を表示:{
    type: "contextmenu",
    name: "権限を表示",
    description: "メンバーの持っている権限を表示します",
    example: "`権限を表示`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  メッセージをピン留め:{
    type: "contextmenu",
    name: "メッセージをピン留め",
    description: "メッセージを常に下に表示します",
    example: "`メッセージをピン留め`をクリック",
    userPermission:[
      "チャンネルの管理",
      "メッセージの管理"
    ],
    botPermission:[
      "チャンネルの閲覧",
      "チャンネルの管理",
      "メッセージの送信",
      "メッセージの管理"
    ],
    note: "連投し続けると3分間制限がかかります"
  },
  メッセージを報告:{
    type: "contextmenu",
    name: "メッセージを報告",
    description: "サポートサーバーにメッセージを報告します",
    example: "`メッセージを報告`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "報告されたメッセージの周囲のメッセージも送信されます"
  },
  英語に翻訳:{
    type: "contextmenu",
    name: "英語に翻訳",
    description: "メッセージを英語に翻訳します",
    example: "`英語に翻訳`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  },
  日本語に翻訳:{
    type: "contextmenu",
    name: "日本語に翻訳",
    description: "メッセージを日本語に翻訳します",
    example: "`日本語に翻訳`をクリック",
    userPermission:[
      "必要なし"
    ],
    botPermission:[
      "必要なし"
    ],
    note: "なし"
  }
}
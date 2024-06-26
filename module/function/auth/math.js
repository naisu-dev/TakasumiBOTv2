module.exports = async(interaction)=>{
  const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");
  if(!interaction.isButton()) return;
  if(interaction.customId.startsWith("math_")){
    const data = interaction.customId.split("_");

    const count1 = Math.floor(Math.random()*15) + 1;
    const count2 = Math.floor(Math.random()*15) + 1;

    const check = new ModalBuilder()
      .setCustomId(`mathrole_${data[1]}_${count1 + count2}`)
      .setTitle("認証");

    const code = new TextInputBuilder()
      .setCustomId("code")
      .setLabel(`${count1}+${count2}の答えを入力してください`)
      .setMaxLength(5)
      .setPlaceholder("半角で入力してください")
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    check.addComponents(new ActionRowBuilder().addComponents(code));

    await interaction.showModal(check);
  }
}
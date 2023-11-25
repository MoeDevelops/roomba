import { CommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setuproom")
        .setDescription("Sets up a new room management.")
        .addChannelOption(option => 
            option
                .setName("channel")
                .setDescription("The channel, where the room assignment message will be set up.")
                .setRequired(true))
        .addIntegerOption(option => 
            option
                .setName("rooms")
                .setDescription("The amount of rooms.")
                .setRequired(true))
        .addIntegerOption(option => 
            option
                .setName("residents")
                .setDescription("The amount of residents per room.")
                .setRequired(true)),
    async execute(interaction: CommandInteraction) {
        let channel = (<any>interaction.options).getChannel("channel");

        console.log(channel);

        if (!(channel instanceof TextChannel)) {
            await interaction.reply("Please choose a text channel");
            
            return;
        }

        channel = <TextChannel>channel;

        channel.send("Test");
    }
}

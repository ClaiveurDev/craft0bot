// Const et var
const Discord = require("discord.js");
const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const client = new Discord.Client();
var prefix = "!";
 
client.login("NTY0MTM2NzA3MDI5NTk4MjI4.XKjfwQ.6BTlH8ytdl0Rta2A0-rxBeKxZyg");
    console.log("[CraftObot]: Prêt");

client.on('ready', () => {
    client.user.setPresence({ game: { name: "Fortnite Battle royale 1/4 🎮"
}})});

//ServerList
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + "serverlist"){
        message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
}});

// 8ball
client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Oui :thumbsup::skin-tone-1:", "Non :x:", "J'ai envie de dormir gros :zzz:", "M'en fiche :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:", "Mouais", "T'es sur ?"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("ORANGE")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
}});

//Infosdiscord
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(message.content === prefix + "infosdiscord"){
        var embed = new Discord.RichEmbed()
        .setDescription("Informations sur le serveur")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le serveur", message.guild.memberCount)
        .setColor("0x0000FF")
        message.channel.sendEmbed(embed)
}});

//Sondage
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(message.content.startsWith(prefix + "sondage")){
        if(message.author.id == "388048925640097802"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40404")
                .setTimestamp()
                message.guild.channels.find("name", "sondages").sendEmbed(embed)
                .then(function (message) {
                    message.react("✅")
                    message.react("❌")
                }).catch(function () {     
                })
                }else{
                    return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :x:")
}}});

// Stats
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + "stats"){
        const membre = message.mentions.members.first() || message.member;
        // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }
    
        message.channel.send({
            embed: {
                color: 0xe43333,
                title: `Statistiques du l'utilisateur **${membre.user.username}**`,
                thumbnail: {
                    url: membre.user.displayAvatarURL
                },
                fields: [
                    {
                        name: 'ID :',
                        value: membre.id 
                    },
                    {
                        name: 'Crée le :',
                        value: moment.utc(membre.user.createdAt).format("LL")
                    },
                    {
                        name: 'Jeu :',
                        value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu'
                    },
                    {
                        name: 'Rejoin le :',
                        value: moment.utc(membre.joinedAt).format('LL')
                    }
                ],
                footer: {
                    text: `Informations de l'utilisateur ${membre.user.username}`
}}})}});

/*Helpmod
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + "helpmod"){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :x:")
        var embed = new Discord.RichEmbed()
            .setDescription("**Commandes modos** \n\n\n**!kick** @Mentionner un utilisateur = expulsé \n\n**!ban** @Mentionner un utilisateur = banni \n\n**!warn** @Mentionner un utilisateur + raison = signalé \n\n**!unwarn** @Mentionner un utilisateur = le dernier signalement supprimé \n\n**!infractions** @Mentionner un utilisateur = voir ces signalements \n\n**!mute** @Mentionner un utilisateur = muté \n\n**!unmute** @Mentionner un utilisateur = unmuté \n\n**!clear** nombre de message à supprimer = message supprimé selon le nombre indiquer \n--------------------------------------------------------------------------------------------------")
            message.author.createDM().then(channel =>{
                channel.sendEmbed(embed)
})}});

//Help
client.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setDescription("**Commandes** \n\n\n **!ping** = affiche son ping \n\n**!stats** @Mentionner un joueur = affiche ces statistiques ou **!stats** = affiche ses stats\n\n**!infosdiscord** = affiche les infos du discord")
            message.author.createDM().then(channel =>{
                channel.sendEmbed(embed)
})}});*/

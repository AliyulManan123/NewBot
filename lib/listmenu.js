const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`*Ⓟ* = Fitur Khusus Premium

≡ *OWNER MENU*

ぎ .self 
ぎ .public 
ぎ .join 
ぎ .bctext 
ぎ .bcimage 
ぎ .bcvideo 
ぎ .creategc 
ぎ .setexif 
ぎ .shutdown 
ぎ .autostickergc 
ぎ .setppbot 
ぎ .addprem 
ぎ .delprem 
ぎ .addowner 
ぎ .delowner 
ぎ .addvn 
ぎ .delvn 
ぎ .addsticker 
ぎ .delsticker 
ぎ .addimage 
ぎ .delimage 
ぎ .addvideo 
ぎ .delvideo 
ぎ .block add 
ぎ .unblock del 
ぎ .leavegc 

≡ *PUSH MENU* 

ぎ .pushcontact 
ぎ .pushcontactv2 
ぎ .savecontact 
ぎ .pushmember 
ぎ .idgc 
ぎ .jpm 

≡ *DANGER MENU*
 
ぎ .sendbug 
ぎ .sendbugv2 

≡ *BANNED MENU*

ぎ .bankyuu1 
ぎ .bankyuu2 
ぎ .bankyuu3 
ぎ .bankyuu4 
ぎ .verify 
ぎ .logout 

≡ *UNBAN MENU*

ぎ .unbankyuu1 
ぎ .unbankyuu2 
ぎ .unbankyuu3 
ぎ .unbankyuu4 
ぎ .unbankyuu5 
ぎ .unbankyuu6 
ぎ .unbankyuu7 

≡ *DOWNLOAD MENU*

ぎ .tiktokvideo 
ぎ .tiktokaudio 
ぎ .ytsearch 
ぎ .mediafire 
ぎ .play 
ぎ .ytmp3 
ぎ .ytmp4 
ぎ .google 
ぎ .spotify 
ぎ .gitclone 
ぎ .happymod 

≡ *ANTI MENU*

ぎ .antilinkgc 
ぎ .antiwame 
ぎ .antilinkall 
ぎ .antilinktiktok 
ぎ .antilinkfb 
ぎ .antilinktwitter 
ぎ .antilinkig 
ぎ .antilinktg 
ぎ .antilinkytvid 
ぎ .antilinkytch 
ぎ .antivirus 
ぎ .antitoxic 
ぎ .antilink 
ぎ .antiwame 

≡ *GROUP MENU*

ぎ .grouplink 
ぎ .ephemeral 
ぎ .delete 
ぎ .setppgroup 
ぎ .setname 
ぎ .setdesc 
ぎ .add 
ぎ .kick 
ぎ .promote 
ぎ .demote 
ぎ .hidetag 
ぎ .tagall 
ぎ .editinfo 
ぎ .opentime 
ぎ .closetime 
ぎ .resetlink 
ぎ .autostickerpc 
ぎ .nsfw 
ぎ .react 

≡ *RANDOM VIDEO*

ぎ .tiktokgirl Ⓟ
ぎ .tiktoknukthy Ⓟ
ぎ .tiktokkayes Ⓟ
ぎ .tiktokpanrika Ⓟ
ぎ .tiktoknotnot Ⓟ
ぎ .tiktokghea Ⓟ
ぎ .tiktoksantuy Ⓟ
ぎ .tiktokbocil Ⓟ

≡ *STALKER MENU*

ぎ .igstalk Ⓟ
ぎ .ffstalk Ⓟ
ぎ .mlstalk Ⓟ
ぎ .npmstalk Ⓟ
ぎ .ghstalk Ⓟ

≡ *OTHER MENU*

ぎ .ping 
ぎ .menu 
ぎ .listpem 
ぎ .liststicker 
ぎ .listimage 
ぎ .listvideo 
ぎ .listvn 
ぎ .listbadword 
ぎ .listpc 
ぎ .listgc 
ぎ .owner 
ぎ .rentbot Ⓟ
ぎ .listrentbot Ⓟ
ぎ .donate 
ぎ .friend 
ぎ .obfuscate 
ぎ .styletext 
ぎ .fliptext 
ぎ .tts 
ぎ .say 
ぎ .togif 
ぎ .toqr 
ぎ .bass 
ぎ .blown 
ぎ .deep 
ぎ .earrape 
ぎ .fast 
ぎ .fat 
ぎ .nightcore 
ぎ .reverse 
ぎ .robot 
ぎ .slow 
ぎ .smooth 
ぎ .squirrel 
ぎ .tinyurl 
ぎ .tinyurl 
ぎ .tovn 
ぎ .toaudio 
ぎ .tomp3 
ぎ .tomp4
ぎ .toimg 
ぎ .toonce 
ぎ .sticker 
ぎ .take 
ぎ .emoji 
ぎ .volume 
ぎ .ebinary 
ぎ .dbinary 
ぎ .ssweb 
ぎ .quoted 
ぎ .runtime 
ぎ .sound1 - sound161 

≡ *FUN MENU*

ぎ .define 
ぎ .truth 
ぎ .dare 
ぎ .couple 
ぎ .soulmate 
ぎ .stupidcheck 
ぎ .handsomecheck 
ぎ .uncleancheck 
ぎ .hotcheck 
ぎ .smartcheck 
ぎ .greatcheck 
ぎ .evilcheck 
ぎ .dogcheck 
ぎ .coolcheck 
ぎ .waifucheck 
ぎ .awesomecheck 
ぎ .gaycheck 
ぎ .cutecheck 
ぎ .lesbiancheck 
ぎ .hornycheck 
ぎ .prettycheck 
ぎ .lovelycheck 
ぎ .uglycheck 
ぎ .hot 
ぎ .sexy 
ぎ .kind 
ぎ .idiot 
ぎ .handsome 
ぎ .beautiful 
ぎ .cute 
ぎ .pretty 
ぎ .lesbian 
ぎ .noob 
ぎ .bastard 
ぎ .foolish 
ぎ .nerd 
ぎ .asshole 
ぎ .gay 
ぎ .smart 
ぎ .stubble 
ぎ .doggo 
ぎ .horny 
ぎ .cunt 
ぎ .wibu 
ぎ .noobra 
ぎ .nibba 
ぎ .nibbi 
ぎ .comrade 
ぎ .mumu 
ぎ .rascal 
ぎ .scumbag  
ぎ .nuts 
ぎ .fagot 
ぎ .scoundrel 
ぎ .ditch 
ぎ .dope 
ぎ .gucci 
ぎ .lit 
ぎ .dumbass 
ぎ .crackhead 
ぎ .mf 
ぎ .motherfucker 
ぎ .sucker 
ぎ .fuckboy 
ぎ .playboy 
ぎ .fuckgirl 
ぎ .playgirl 
ぎ .quotes 
ぎ .can 
ぎ .is 
ぎ .when 
ぎ .where 
ぎ .what 
ぎ .how 
ぎ .rate 
ぎ .cry Ⓟ
ぎ .kill Ⓟ
ぎ .hug Ⓟ
ぎ .pat Ⓟ
ぎ .lick Ⓟ 
ぎ .kiss Ⓟ
ぎ .bite Ⓟ
ぎ .yeet Ⓟ
ぎ .bully Ⓟ
ぎ .bonk Ⓟ
ぎ .wink Ⓟ
ぎ .poke Ⓟ
ぎ .nom Ⓟ
ぎ .slap Ⓟ
ぎ .smile Ⓟ 
ぎ .wave Ⓟ
ぎ .awoo Ⓟ
ぎ .blush Ⓟ
ぎ .smug Ⓟ
ぎ .glomp Ⓟ 
ぎ .happy Ⓟ
ぎ .dance Ⓟ
ぎ .cringe Ⓟ
ぎ .cuddle Ⓟ
ぎ .highfive Ⓟ 
ぎ .shinobu Ⓟ
ぎ .handhold Ⓟ
ぎ .horny 
ぎ .checkme 
ぎ .confess 
ぎ .leave 

≡ *RANDOM FOTO*

ぎ .aesthetic Ⓟ
ぎ .coffee Ⓟ
ぎ .wikimedia Ⓟ
ぎ .wallpaper Ⓟ
ぎ .art Ⓟ
ぎ .bts Ⓟ
ぎ .woof 
ぎ .meow 
ぎ .lizard 
ぎ .cosplay Ⓟ
ぎ .hacker Ⓟ
ぎ .cyber Ⓟ
ぎ .gamewallpaper Ⓟ
ぎ .islamic Ⓟ
ぎ .jennie Ⓟ
ぎ .jiso Ⓟ
ぎ .satanic Ⓟ
ぎ .justina Ⓟ
ぎ .cartoon Ⓟ
ぎ .pentol Ⓟ
ぎ .cat 
ぎ .kpop 
ぎ .exo Ⓟ
ぎ .lisa Ⓟ
ぎ .space Ⓟ
ぎ .car Ⓟ
ぎ .technology Ⓟ
ぎ .bike Ⓟ
ぎ .shortquote Ⓟ
ぎ .antiwork 
ぎ .hacking 
ぎ .boneka 
ぎ .rose 
ぎ .ryujin 
ぎ .ulzzangboy 
ぎ .ulzzanggirl 
ぎ .wallml 
ぎ .wallphone 
ぎ .mountain Ⓟ
ぎ .goose 
ぎ .profilepic 
ぎ .couplepic 
ぎ .programming Ⓟ
ぎ .pubg 
ぎ .blackpink 
ぎ .randomboy   
ぎ .randomgirl 
ぎ .hijab   
ぎ .chinese 
ぎ .indo 
ぎ .japanese 
ぎ .korean 
ぎ .malay 
ぎ .thai 
ぎ .vietnamese 

≡ *WIBU MENU*

ぎ .akira Ⓟ
ぎ .akiyama Ⓟ
ぎ .ana Ⓟ
ぎ .asuna Ⓟ
ぎ .ayuzawa Ⓟ
ぎ .boruto Ⓟ
ぎ .chiho Ⓟ
ぎ .chitoge Ⓟ
ぎ .cosplayloli Ⓟ
ぎ .cosplaysagiri Ⓟ
ぎ .deidara Ⓟ
ぎ .doraemon Ⓟ
ぎ .elaina Ⓟ
ぎ .emilia Ⓟ
ぎ .erza Ⓟ
ぎ .gremory Ⓟ
ぎ .hestia Ⓟ
ぎ .hinata Ⓟ
ぎ .husbu Ⓟ
ぎ .inori Ⓟ
ぎ .isuzu Ⓟ
ぎ .itachi Ⓟ
ぎ .itori Ⓟ
ぎ .kaga Ⓟ
ぎ .kagura Ⓟ
ぎ .kakasih Ⓟ
ぎ .kaori Ⓟ
ぎ .keneki Ⓟ
ぎ .kotori Ⓟ
ぎ .kurumi Ⓟ
ぎ .loli Ⓟ
ぎ .madara Ⓟ
ぎ .megumin Ⓟ
ぎ .mikasa Ⓟ
ぎ .mikey Ⓟ
ぎ .miku Ⓟ
ぎ .minato Ⓟ
ぎ .naruto Ⓟ
ぎ .neko Ⓟ
ぎ .neko2 Ⓟ
ぎ .nekonime Ⓟ
ぎ .nezuko Ⓟ
ぎ .onepiece Ⓟ
ぎ .pokemon Ⓟ
ぎ .randomnime Ⓟ
ぎ .randomnime2 Ⓟ
ぎ .rize Ⓟ
ぎ .sagiri Ⓟ
ぎ .sakura Ⓟ
ぎ .sasuke Ⓟ
ぎ .shina Ⓟ
ぎ .shinka Ⓟ
ぎ .shinomiya Ⓟ
ぎ .shizuka Ⓟ
ぎ .shota Ⓟ
ぎ .tejina Ⓟ
ぎ .toukachan Ⓟ
ぎ .tsunade Ⓟ
ぎ .waifu Ⓟ
ぎ .animewall Ⓟ
ぎ .yotsuba Ⓟ
ぎ .yuki Ⓟ
ぎ .yulibocil Ⓟ
ぎ .yumeko Ⓟ
ぎ .8ball 
ぎ .tickle 
ぎ .gecg 
ぎ .feed 

≡ *WIBU 18+ MENU*

ぎ .hentai 
ぎ .gifhentai 
ぎ .gifblowjob 
ぎ .hentaivid 
ぎ .hneko 
ぎ .nwaifu 
ぎ .animespank 
ぎ .trap 
ぎ .gasm 
ぎ .ahegao 
ぎ .ass 
ぎ .bdsm 
ぎ .blowjob 
ぎ .cuckold 
ぎ .cum 
ぎ .milf 
ぎ .eba 
ぎ .ero 
ぎ .femdom 
ぎ .foot 
ぎ .gangbang 
ぎ .glasses 
ぎ .jahy 
ぎ .masturbation 
ぎ .manga 
ぎ .neko-hentai 
ぎ .neko-hentai2 
ぎ .nsfwloli 
ぎ .orgy 
ぎ .panties  
ぎ .pussy 
ぎ .tentacles 
ぎ .thights 
ぎ .yuri 
ぎ .zettai 

≡ *TEXTPRO MAKER*

ぎ .candy Ⓟ 
ぎ .christmas Ⓟ 
ぎ .3dchristmas Ⓟ 
ぎ .sparklechristmas Ⓟ
ぎ .deepsea Ⓟ 
ぎ .scifi Ⓟ 
ぎ .rainbow Ⓟ 
ぎ .waterpipe Ⓟ 
ぎ .spooky Ⓟ 
ぎ .pencil Ⓟ 
ぎ .circuit Ⓟ 
ぎ .discovery Ⓟ 
ぎ .metalic Ⓟ 
ぎ .fiction Ⓟ 
ぎ .demon Ⓟ 
ぎ .transformer Ⓟ 
ぎ .berry Ⓟ 
ぎ .thunder Ⓟ 
ぎ .magma Ⓟ 
ぎ .3dstone Ⓟ 
ぎ .neonlight Ⓟ 
ぎ .glitch Ⓟ 
ぎ .harrypotter Ⓟ 
ぎ .brokenglass Ⓟ 
ぎ .papercut Ⓟ 
ぎ .watercolor Ⓟ 
ぎ .multicolor Ⓟ 
ぎ .neondevil Ⓟ 
ぎ .underwater Ⓟ 
ぎ .graffitibike Ⓟ
ぎ .snow Ⓟ 
ぎ .cloud Ⓟ 
ぎ .honey Ⓟ 
ぎ .ice Ⓟ 
ぎ .fruitjuice Ⓟ 
ぎ .biscuit Ⓟ 
ぎ .wood Ⓟ 
ぎ .chocolate Ⓟ 
ぎ .strawberry Ⓟ 
ぎ .matrix Ⓟ 
ぎ .blood Ⓟ 
ぎ .dropwater Ⓟ 
ぎ .toxic Ⓟ 
ぎ .lava Ⓟ 
ぎ .rock Ⓟ 
ぎ .bloodglas Ⓟ 
ぎ .hallowen Ⓟ 
ぎ .darkgold Ⓟ 
ぎ .joker Ⓟ 
ぎ .wicker Ⓟ
ぎ .firework Ⓟ 
ぎ .skeleton Ⓟ 
ぎ .blackpink Ⓟ 
ぎ .sand Ⓟ 
ぎ .glue Ⓟ 
ぎ .1917 Ⓟ 
ぎ .leaves Ⓟ

≡ *PHOTOOXY MENU*

ぎ .shadow Ⓟ 
ぎ .write Ⓟ 
ぎ .romantic Ⓟ 
ぎ .burnpaper Ⓟ
ぎ .smoke Ⓟ 
ぎ .narutobanner Ⓟ 
ぎ .love Ⓟ 
ぎ .undergrass Ⓟ
ぎ .doublelove Ⓟ 
ぎ .coffecup Ⓟ
ぎ .underwaterocean Ⓟ
ぎ .smokyneon Ⓟ
ぎ .starstext Ⓟ
ぎ .rainboweffect Ⓟ
ぎ .balloontext Ⓟ
ぎ .metalliceffect Ⓟ
ぎ .embroiderytext Ⓟ
ぎ .flamingtext Ⓟ
ぎ .stonetext Ⓟ
ぎ .writeart Ⓟ
ぎ .summertext Ⓟ
ぎ .wolfmetaltext Ⓟ
ぎ .nature3dtext Ⓟ
ぎ .rosestext Ⓟ
ぎ .naturetypography Ⓟ
ぎ .quotesunder Ⓟ
ぎ .shinetext Ⓟ

≡ *EPHOTO360 MAKER*

ぎ .glitchtext Ⓟ
ぎ .writetext Ⓟ
ぎ .advancedglow Ⓟ
ぎ .typographytext Ⓟ
ぎ .pixelglitch Ⓟ
ぎ .neonglitch Ⓟ
ぎ .flagtext Ⓟ
ぎ .flag3dtext Ⓟ
ぎ .deletingtext Ⓟ
ぎ .blackpinkstyle Ⓟ
ぎ .glowingtext Ⓟ
ぎ .underwatertext Ⓟ
ぎ .logomaker Ⓟ
ぎ .cartoonstyle Ⓟ
ぎ .papercutstyle Ⓟ
ぎ .watercolortext Ⓟ
ぎ .effectclouds Ⓟ
ぎ .blackpinklogo Ⓟ
ぎ .gradienttext Ⓟ
ぎ .summerbeach Ⓟ
ぎ .luxurygold Ⓟ
ぎ .multicoloredneon Ⓟ
ぎ .sandsummer Ⓟ
ぎ .galaxywallpaper Ⓟ
ぎ .1917style Ⓟ
ぎ .makingneon Ⓟ
ぎ .royaltext Ⓟ
ぎ .freecreate Ⓟ
ぎ .galaxystyle Ⓟ
ぎ .lighteffects Ⓟ
`}

global.animemenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *WIBU MENU*

ぎ .akira Ⓟ
ぎ .akiyama Ⓟ
ぎ .ana Ⓟ
ぎ .asuna Ⓟ
ぎ .ayuzawa Ⓟ
ぎ .boruto Ⓟ
ぎ .chiho Ⓟ
ぎ .chitoge Ⓟ
ぎ .cosplayloli Ⓟ
ぎ .cosplaysagiri Ⓟ
ぎ .deidara Ⓟ
ぎ .doraemon Ⓟ
ぎ .elaina Ⓟ
ぎ .emilia Ⓟ
ぎ .erza Ⓟ
ぎ .gremory Ⓟ
ぎ .hestia Ⓟ
ぎ .hinata Ⓟ
ぎ .husbu Ⓟ
ぎ .inori Ⓟ
ぎ .isuzu Ⓟ
ぎ .itachi Ⓟ
ぎ .itori Ⓟ
ぎ .kaga Ⓟ
ぎ .kagura Ⓟ
ぎ .kakasih Ⓟ
ぎ .kaori Ⓟ
ぎ .keneki Ⓟ
ぎ .kotori Ⓟ
ぎ .kurumi Ⓟ
ぎ .loli Ⓟ
ぎ .madara Ⓟ
ぎ .megumin Ⓟ
ぎ .mikasa Ⓟ
ぎ .mikey Ⓟ
ぎ .miku Ⓟ
ぎ .minato Ⓟ
ぎ .naruto Ⓟ
ぎ .neko Ⓟ
ぎ .neko2 Ⓟ
ぎ .nekonime Ⓟ
ぎ .nezuko Ⓟ
ぎ .onepiece Ⓟ
ぎ .pokemon Ⓟ
ぎ .randomnime Ⓟ
ぎ .randomnime2 Ⓟ
ぎ .rize Ⓟ
ぎ .sagiri Ⓟ
ぎ .sakura Ⓟ
ぎ .sasuke Ⓟ
ぎ .shina Ⓟ
ぎ .shinka Ⓟ
ぎ .shinomiya Ⓟ
ぎ .shizuka Ⓟ
ぎ .shota Ⓟ
ぎ .tejina Ⓟ
ぎ .toukachan Ⓟ
ぎ .tsunade Ⓟ
ぎ .waifu Ⓟ
ぎ .animewall Ⓟ
ぎ .yotsuba Ⓟ
ぎ .yuki Ⓟ
ぎ .yulibocil Ⓟ
ぎ .yumeko Ⓟ
ぎ .8ball 
ぎ .tickle 
ぎ .gecg 
ぎ .feed 
`}
global.antimenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *ANTI MENU*

ぎ .antilinkgc 
ぎ .antiwame 
ぎ .antilinkall 
ぎ .antilinktiktok 
ぎ .antilinkfb 
ぎ .antilinktwitter 
ぎ .antilinkig 
ぎ .antilinktg 
ぎ .antilinkytvid 
ぎ .antilinkytch 
ぎ .antivirus 
ぎ .antitoxic 
ぎ .antilink 
ぎ .antiwame 
`}
global.ownermenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *OWNER MENU*
 
ぎ .self 
ぎ .public 
ぎ .join 
ぎ .bctext 
ぎ .bcimage 
ぎ .bcvideo 
ぎ .creategc 
ぎ .setexif 
ぎ .shutdown 
ぎ .autostickergc 
ぎ .setppbot 
ぎ .addprem 
ぎ .delprem 
ぎ .addowner 
ぎ .delowner 
ぎ .addvn 
ぎ .delvn 
ぎ .addsticker 
ぎ .delsticker 
ぎ .addimage 
ぎ .delimage 
ぎ .addvideo 
ぎ .delvideo 
ぎ .block add 
ぎ .unblock del 
ぎ .leavegc 
`}

global.bugmenu = (prefix) => {
return`Ⓟ = For Premium User

 ≡ *DANGER MENU*
 
ぎ .sendbug 
ぎ .sendbugv2 
`}

global.pushmenu = (prefix) => {
return`Ⓟ = For Premium User

≡ *PUSH MENU*

ぎ .pushcontact 
ぎ .pushcontactv2 
ぎ .savecontact 
ぎ .pushmember 
ぎ .idgc 
ぎ .jpm 
`}

global.bannedmenu = (prefix) => {
return`Ⓟ = For Premium User

≡ *DANGER MENU*

ぎ .bankyuu1 
ぎ .bankyuu2 
ぎ .bankyuu3 
ぎ .bankyuu4 
ぎ .verify 
ぎ .logout 
`}

global.unbannedmenu = (prefix) => {
return`Ⓟ = For Premium User

≡ *UNBAN MENU*

ぎ .unbankyuu1 
ぎ .unbankyuu2 
ぎ .unbankyuu3 
ぎ .unbankyuu4 
ぎ .unbankyuu5 
ぎ .unbankyuu6 
ぎ .unbankyuu7 
`}

global.othermenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *OTHER MENU*

ぎ .ping 
ぎ .menu 
ぎ .listpem 
ぎ .liststicker 
ぎ .listimage 
ぎ .listvideo 
ぎ .listvn 
ぎ .listbadword 
ぎ .listpc 
ぎ .listgc 
ぎ .owner 
ぎ .rentbot Ⓟ
ぎ .listrentbot Ⓟ
ぎ .donate 
ぎ .friend 
ぎ .obfuscate 
ぎ .styletext 
ぎ .fliptext 
ぎ .tts 
ぎ .say 
ぎ .togif 
ぎ .toqr 
ぎ .bass 
ぎ .blown 
ぎ .deep 
ぎ .earrape 
ぎ .fast 
ぎ .fat 
ぎ .nightcore 
ぎ .reverse 
ぎ .robot 
ぎ .slow 
ぎ .smooth 
ぎ .squirrel 
ぎ .tinyurl 
ぎ .tinyurl 
ぎ .tovn 
ぎ .toaudio 
ぎ .tomp3 
ぎ .tomp4
ぎ .toimg 
ぎ .toonce 
ぎ .sticker 
ぎ .take 
ぎ .emoji 
ぎ .volume 
ぎ .ebinary 
ぎ .dbinary 
ぎ .ssweb 
ぎ .quoted 
ぎ .runtime 
ぎ .sound1 - sound161 
`}

global.downloadmenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *DOWNLOAD MENU*

ぎ .tiktokvideo 
ぎ .tiktokaudio 
ぎ .ytsearch 
ぎ .mediafire 
ぎ .play 
ぎ .ytmp3 
ぎ .ytmp4 
ぎ .google 
ぎ .spotify 
ぎ .gitclone 
ぎ .happymod 
`}

global.groupmenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *GROUP MENU*

ぎ .antilink 
ぎ .antiwame 
ぎ .grouplink 
ぎ .ephemeral 
ぎ .delete 
ぎ .setppgroup 
ぎ .setname 
ぎ .setdesc 
ぎ .add 
ぎ .kick 
ぎ .promote 
ぎ .demote 
ぎ .hidetag 
ぎ .tagall 
ぎ .editinfo 
ぎ .opentime 
ぎ .closetime 
ぎ .resetlink 
ぎ .autostickerpc 
ぎ .antilinkgc 
ぎ .antiwame 
ぎ .antilinkall 
ぎ .antilinktiktok 
ぎ .antilinkfb 
ぎ .antilinktwitter 
ぎ .antilinkig 
ぎ .antlinktg 
ぎ .antilinkytvid 
ぎ .antilinkytch 
ぎ .antivirus 
ぎ .antitoxic 
ぎ .nsfw 
ぎ .react 
`}

global.funmenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *FUN MENU*

ぎ .define 
ぎ .truth 
ぎ .dare 
ぎ .couple 
ぎ .soulmate 
ぎ .stupidcheck 
ぎ .handsomecheck 
ぎ .uncleancheck 
ぎ .hotcheck 
ぎ .smartcheck 
ぎ .greatcheck 
ぎ .evilcheck 
ぎ .dogcheck 
ぎ .coolcheck 
ぎ .waifucheck 
ぎ .awesomecheck 
ぎ .gaycheck 
ぎ .cutecheck 
ぎ .lesbiancheck 
ぎ .hornycheck 
ぎ .prettycheck 
ぎ .lovelycheck 
ぎ .uglycheck 
ぎ .hot 
ぎ .sexy 
ぎ .kind 
ぎ .idiot 
ぎ .handsome 
ぎ .beautiful 
ぎ .cute 
ぎ .pretty 
ぎ .lesbian 
ぎ .noob 
ぎ .bastard 
ぎ .foolish 
ぎ .nerd 
ぎ .asshole 
ぎ .gay 
ぎ .smart 
ぎ .stubble 
ぎ .doggo 
ぎ .horny 
ぎ .cunt 
ぎ .wibu 
ぎ .noobra 
ぎ .nibba 
ぎ .nibbi 
ぎ .comrade 
ぎ .mumu 
ぎ .rascal 
ぎ .scumbag  
ぎ .nuts 
ぎ .fagot 
ぎ .scoundrel 
ぎ .ditch 
ぎ .dope 
ぎ .gucci 
ぎ .lit 
ぎ .dumbass 
ぎ .crackhead 
ぎ .mf 
ぎ .motherfucker 
ぎ .sucker 
ぎ .fuckboy 
ぎ .playboy 
ぎ .fuckgirl 
ぎ .playgirl 
ぎ .quotes 
ぎ .can 
ぎ .is 
ぎ .when 
ぎ .where 
ぎ .what 
ぎ .how 
ぎ .rate 
ぎ .cry Ⓟ
ぎ .kill Ⓟ
ぎ .hug Ⓟ
ぎ .pat Ⓟ
ぎ .lick Ⓟ 
ぎ .kiss Ⓟ
ぎ .bite Ⓟ
ぎ .yeet Ⓟ
ぎ .bully Ⓟ
ぎ .bonk Ⓟ
ぎ .wink Ⓟ
ぎ .poke Ⓟ
ぎ .nom Ⓟ
ぎ .slap Ⓟ
ぎ .smile Ⓟ 
ぎ .wave Ⓟ
ぎ .awoo Ⓟ
ぎ .blush Ⓟ
ぎ .smug Ⓟ
ぎ .glomp Ⓟ 
ぎ .happy Ⓟ
ぎ .dance Ⓟ
ぎ .cringe Ⓟ
ぎ .cuddle Ⓟ
ぎ .highfive Ⓟ 
ぎ .shinobu Ⓟ
ぎ .handhold Ⓟ
ぎ .horny 
ぎ .checkme 
ぎ .confess 
ぎ .leave 
`}

global.stalkermenu = (prefix) => {
return `Ⓟ = For Premium User

*— sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜッ*

ぎ .igstalk Ⓟ
ぎ .ffstalk Ⓟ
ぎ .mlstalk Ⓟ
ぎ .npmstalk Ⓟ
ぎ .ghstalk Ⓟ
`}

global.randphotomenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *RANDHOM FOTO*

ぎ .aesthetic Ⓟ
ぎ .coffee Ⓟ
ぎ .wikimedia Ⓟ
ぎ .wallpaper Ⓟ
ぎ .art Ⓟ
ぎ .bts Ⓟ
ぎ .woof 
ぎ .meow 
ぎ .lizard 
ぎ .cosplay Ⓟ
ぎ .hacker Ⓟ
ぎ .cyber Ⓟ
ぎ .gamewallpaper Ⓟ
ぎ .islamic Ⓟ
ぎ .jennie Ⓟ
ぎ .jiso Ⓟ
ぎ .satanic Ⓟ
ぎ .justina Ⓟ
ぎ .cartoon Ⓟ
ぎ .pentol Ⓟ
ぎ .cat 
ぎ .kpop 
ぎ .exo Ⓟ
ぎ .lisa Ⓟ
ぎ .space Ⓟ
ぎ .car Ⓟ
ぎ .technology Ⓟ
ぎ .bike Ⓟ
ぎ .shortquote Ⓟ
ぎ .antiwork 
ぎ .hacking 
ぎ .boneka 
ぎ .rose 
ぎ .ryujin 
ぎ .ulzzangboy 
ぎ .ulzzanggirl 
ぎ .wallml 
ぎ .wallphone 
ぎ .mountain Ⓟ
ぎ .goose 
ぎ .profilepic 
ぎ .couplepic 
ぎ .programming Ⓟ
ぎ .pubg 
ぎ .blackpink 
ぎ .randomboy   
ぎ .randomgirl 
ぎ .hijab   
ぎ .chinese 
ぎ .indo 
ぎ .japanese 
ぎ .korean 
ぎ .malay 
ぎ .thai 
ぎ .vietnamese 
`}

global.randvideomenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *RAND0M VIDEO*

ぎ .tiktokgirl Ⓟ
ぎ .tiktoknukthy Ⓟ
ぎ .tiktokkayes Ⓟ
ぎ .tiktokpanrika Ⓟ
ぎ .tiktoknotnot Ⓟ
ぎ .tiktokghea Ⓟ
ぎ .tiktoksantuy Ⓟ
ぎ .tiktokbocil Ⓟ
`}

global.textpromenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *TEXTPRO MAKER*

ぎ .candy Ⓟ 
ぎ .christmas Ⓟ 
ぎ .3dchristmas Ⓟ 
ぎ .sparklechristmas Ⓟ
ぎ .deepsea Ⓟ 
ぎ .scifi Ⓟ 
ぎ .rainbow Ⓟ 
ぎ .waterpipe Ⓟ 
ぎ .spooky Ⓟ 
ぎ .pencil Ⓟ 
ぎ .circuit Ⓟ 
ぎ .discovery Ⓟ 
ぎ .metalic Ⓟ 
ぎ .fiction Ⓟ 
ぎ .demon Ⓟ 
ぎ .transformer Ⓟ 
ぎ .berry Ⓟ 
ぎ .thunder Ⓟ 
ぎ .magma Ⓟ 
ぎ .3dstone Ⓟ 
ぎ .neonlight Ⓟ 
ぎ .glitch Ⓟ 
ぎ .harrypotter Ⓟ 
ぎ .brokenglass Ⓟ 
ぎ .papercut Ⓟ 
ぎ .watercolor Ⓟ 
ぎ .multicolor Ⓟ 
ぎ .neondevil Ⓟ 
ぎ .underwater Ⓟ 
ぎ .graffitibike Ⓟ
ぎ .snow Ⓟ 
ぎ .cloud Ⓟ 
ぎ .honey Ⓟ 
ぎ .ice Ⓟ 
ぎ .fruitjuice Ⓟ 
ぎ .biscuit Ⓟ 
ぎ .wood Ⓟ 
ぎ .chocolate Ⓟ 
ぎ .strawberry Ⓟ 
ぎ .matrix Ⓟ 
ぎ .blood Ⓟ 
ぎ .dropwater Ⓟ 
ぎ .toxic Ⓟ 
ぎ .lava Ⓟ 
ぎ .rock Ⓟ 
ぎ .bloodglas Ⓟ 
ぎ .hallowen Ⓟ 
ぎ .darkgold Ⓟ 
ぎ .joker Ⓟ 
ぎ .wicker Ⓟ
ぎ .firework Ⓟ 
ぎ .skeleton Ⓟ 
ぎ .blackpink Ⓟ 
ぎ .sand Ⓟ 
ぎ .glue Ⓟ 
ぎ .1917 Ⓟ 
ぎ .leaves Ⓟ
`}

global.photooxymenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *PHOTOOXY MAKER*

ぎ .shadow Ⓟ 
ぎ .write Ⓟ 
ぎ .romantic Ⓟ 
ぎ .burnpaper Ⓟ
ぎ .smoke Ⓟ 
ぎ .narutobanner Ⓟ 
ぎ .love Ⓟ 
ぎ .undergrass Ⓟ
ぎ .doublelove Ⓟ 
ぎ .coffecup Ⓟ
ぎ .underwaterocean Ⓟ
ぎ .smokyneon Ⓟ
ぎ .starstext Ⓟ
ぎ .rainboweffect Ⓟ
ぎ .balloontext Ⓟ
ぎ .metalliceffect Ⓟ
ぎ .embroiderytext Ⓟ
ぎ .flamingtext Ⓟ
ぎ .stonetext Ⓟ
ぎ .writeart Ⓟ
ぎ .summertext Ⓟ
ぎ .wolfmetaltext Ⓟ
ぎ .nature3dtext Ⓟ
ぎ .rosestext Ⓟ
ぎ .naturetypography Ⓟ
ぎ .quotesunder Ⓟ
ぎ .shinetext Ⓟ
`}

global.ephoto360menu = (prefix) => {
return `Ⓟ = For Premium User

≡ *EPHOTO360 MAKER*

ぎ .glitchtext Ⓟ
ぎ .writetext Ⓟ
ぎ .advancedglow Ⓟ
ぎ .typographytext Ⓟ
ぎ .pixelglitch Ⓟ
ぎ .neonglitch Ⓟ
ぎ .flagtext Ⓟ
ぎ .flag3dtext Ⓟ
ぎ .deletingtext Ⓟ
ぎ .blackpinkstyle Ⓟ
ぎ .glowingtext Ⓟ
ぎ .underwatertext Ⓟ
ぎ .logomaker Ⓟ
ぎ .cartoonstyle Ⓟ
ぎ .papercutstyle Ⓟ
ぎ .watercolortext Ⓟ
ぎ .effectclouds Ⓟ
ぎ .blackpinklogo Ⓟ
ぎ .gradienttext Ⓟ
ぎ .summerbeach Ⓟ
ぎ .luxurygold Ⓟ
ぎ .multicoloredneon Ⓟ
ぎ .sandsummer Ⓟ
ぎ .galaxywallpaper Ⓟ
ぎ .1917style Ⓟ
ぎ .makingneon Ⓟ
ぎ .royaltext Ⓟ
ぎ .freecreate Ⓟ
ぎ .galaxystyle Ⓟ
ぎ .lighteffects Ⓟ
`}

global.nsfwmenu = (prefix) => {
return `Ⓟ = For Premium User

≡ *WIBU 18+ MENU*

ぎ .hentai 
ぎ .gifhentai 
ぎ .gifblowjob 
ぎ .hentaivid 
ぎ .hneko 
ぎ .nwaifu 
ぎ .animespank 
ぎ .trap 
ぎ .gasm 
ぎ .ahegao 
ぎ .ass 
ぎ .bdsm 
ぎ .blowjob 
ぎ .cuckold 
ぎ .cum 
ぎ .milf 
ぎ .eba 
ぎ .ero 
ぎ .femdom 
ぎ .foot 
ぎ .gangbang 
ぎ .glasses 
ぎ .jahy 
ぎ .masturbation 
ぎ .manga 
ぎ .neko-hentai 
ぎ .neko-hentai2 
ぎ .nsfwloli 
ぎ .orgy 
ぎ .panties  
ぎ .pussy 
ぎ .tentacles 
ぎ .thights 
ぎ .yuri 
ぎ .zettai 
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
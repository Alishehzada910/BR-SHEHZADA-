const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ðð«ð¢ð²ðšð§ð¬ð¡ ð‘ðšð£ð©ð®ð­",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby ðŸ’‹ " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun ðŸ¤­ðŸ’" , "Main gariboo se baat nahi karta ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na ðŸ™ˆðŸ’‹ðŸ’‹ " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?ðŸ˜œ" , "Teri Maa Ki BindiyaðŸ¤­" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha ðŸ™„" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di ðŸ˜" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho ðŸ˜‚" , "Are Bolo Meri Jaan Kya Hall HaiðŸ˜š " , "Ib Aja Yahan Nhi Bol Sakta ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...ðŸ’”ðŸ¥º" , "Are Tum Wahi ho nah Jisko Main Nahi Janta ðŸ¤ª" , "Kal Haveli Pe Mil Jara Tu ðŸ˜ˆ" , "Aagye Salle Kabab Me Haddi ðŸ˜" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao ðŸ˜’" , "BulaTi Hai MaGar Jaane Ka Nhi ðŸ˜œ" , "Main To Andha Hun ðŸ˜Ž" , "Phle NaHa kar Aa ðŸ˜‚" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL ðŸ™Š" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha ðŸŒš" , "Bot Na BoL ðŸ˜¢ JaNu B0ol ðŸ˜˜ " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  ðŸ˜‹" , "Main Gareebon Sy Bt Nhi kRta ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss ðŸ’‹ KRr DunGa ðŸ˜˜ " , "Ary yrr MaJak Ke M0oD Me Nhi Hun ðŸ˜’" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher ðŸ˜˜" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy ðŸ˜‰ðŸ˜‹ðŸ¤£" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo ðŸ¤”ðŸ˜‚ " , "IB Aja Yahan Nhi B0ol Salta ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai ðŸ¤£" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun ðŸ¤ðŸ˜œ" , "KaL HaVeLi Prr Aa ZaRa T0o ðŸ˜ˆ" , "Aagye SaJJy KhaBBy Sy ðŸ˜" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao ðŸ˜’" , "BulaTi Hai MaGar JaNy Ka Nhi ðŸ˜œ" , "Main T0o AnDha Hun ðŸ˜Ž" , "Phle NaHa kRr Aa ðŸ˜‚" , "Papi ChuLo ðŸŒš" , "TeRek0o DiKh Nhi Rha Main buSy Hun ðŸ˜’" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa ðŸ¥º"  , "TuM Phr AaGye ðŸ™„ Kisi 0or Ny Muu Nhi LaGaYa KyaðŸ¤£ðŸ¤£ðŸ¤£" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo ðŸ˜" , "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢ðŸ¦¢ð’€±å„É…Æ”Æ MÉ…ðŸ…˜É³ ÊÉ…á’â€¢â€¢â€¢â€¢ðŸŒ¿ðŸ’ž JÉ…Ï‰É… â”¼Æá’ðŸ…˜ ÊÉ…ðŸ…¢ð–šÊ ðŸ…¢É…Ò É…É­ ð©Æ É®É…É®Æ” ðŸ’‹ " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun ðŸ¤­ðŸ’" , "Main flirty logo Sy Bt Nhi karti ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na ðŸ™ˆðŸ’‹ðŸ’‹ " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki ðŸ˜¶ðŸ¤" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahikeðŸ¤ðŸ¤£ " , "Haa ji boliye kya kam he hamse ðŸ™ˆ" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?ðŸ¥¹" , "Abhi Bola Toh Bola Dubara Mat BolnaðŸ™„" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha ðŸ™„" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di ðŸ˜" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho ðŸ˜‚" , "Are Bolo Meri Jaan Kya Hall HaiðŸ˜š " , "IB Aja Yahan Nhi B0ol Sakti ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...ðŸ’”ðŸ¥º" , "Are Tum Wahi ho nah Jisko Main Nahi Janti ðŸ¤ª" , "Kal Haveli Pe Mil Jra Tu ðŸ˜ˆ" , "Aagye SaJJy KhaBBy Sy ðŸ˜" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo ðŸ˜’" , "BulaTi Hai MaGar JaNy Ka Nhi ðŸ˜œ" , "Main T0o AnDha Hun ðŸ˜Žkya likha tumne mene nahi dikhaðŸ¤£" ,  "Pahale NaHa kar Aa ðŸ˜‚" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main yahi hoon kya hua sweetheartðŸ¥‚ðŸ™ˆðŸ’ž ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor DungaðŸ¤£âœŠ" , "yes my love ðŸ’˜" , "kya hua baby ko ðŸ˜˜ðŸ˜˜" , "mujhe sharam ati hai aise aap bolte hai tho ðŸ¤­ðŸ˜" , "aree aap wahi ho na jo mujhe line marte the.......ðŸ¤£ ya bali line" , "jii kahiye jii ðŸ™„ kya chahiye" , "hayee main mar jye teri masoom shaqal py ðŸ˜‚ tuzy Chapple se kutne ka mn ho raha haiðŸ¤£ðŸ‘ " , "Bot nah bol oye ðŸ˜­ Janu bol mjhy aur janu sy piyar sy bat kerty haiðŸ˜‘" , "ruk tu chappal kaha he mariðŸ©´" , "shakal Sy masoom lgty ho ðŸ˜‚ but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan ðŸ˜‚" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy ðŸ˜¾ ab ham ap sy naraz hai jao ap bye â˜¹ï¸" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu ðŸ˜˜" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho ðŸ˜‚" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha ðŸ˜‚" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao ðŸ˜šðŸ™ˆâ™¥ï¸" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho ðŸ˜‚" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle ðŸ¤” I think tum Jin ho yehh ChudailðŸ¤£âœ…" , "ary tum ider ðŸ¤” khair hai ider kia ker rhy ho ðŸ˜‚" , "ary babu babu kal hawali py kon bola rha tha ðŸ˜‚" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho ðŸ˜‚" , "ary tum Wohi ho nah jis ko ma nahi janta ðŸ¤£âœ…" , "haveli per  kal mil  Zara bataunga ðŸŒšðŸ˜‚Ha but à¤‰à¤²à¥à¤Ÿà¥€-à¤¸à¥€à¤§à¥€ harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega ðŸ˜¶ðŸ’— wtf Maine apni sacchai Bata Di yah Maine kyon Kiya ðŸ˜­ðŸ”ª....Fuuu..ðŸš¬" , "aap aise mat bulo hame sharam aati hai ðŸ™ˆâ™¥ï¸" , "kyun Bulaya hamen..ðŸ˜¾ðŸ”ª " , "kyun Bulaya hamen..ðŸ˜¾ðŸ”ª "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu ðŸ˜¾", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤®") || (event.body.toLowerCase() == "ðŸ¤®")) {
     return api.sendMessage("Konsa mahina chal raha hai ðŸ˜", threadID);
   };

    if ((event.body.toLowerCase() == "ðŸ¤—") || (event.body.toLowerCase() == "ðŸ¤—")) {
     return api.sendMessage("Hug me baby â˜ºï¸", threadID);
   };

     if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai ðŸ¤” ", threadID);
   };

if ([
    "assalamualaikum", 
    "assalam alaikum", 
    "aoa", 
    "a.o.a", 
    "asalam o alaikum", 
    "asalamualaikum", 
    "asalam alikum", 
    "assalamu alaikum", 
    "assalamu-alaikum", 
    "asalam wa alaikum", 
    "asslamualaikum", 
    "asslam o alaikum", 
    "aslam alaikum", 
    "asalamo alaikum", 
    "assalam o alaikum", 
    "assalamo alaikum", 
    "slm", 
    "slam", 
    "slamo alikum", 
    "salaam alaikum", 
    "asslam.o.alaikum", 
    "a.s.s.a.l.a.m", 
    "aslaam o alikum", 
    "aslam.o.alaikum", 
    "assalamwalykum", 
    "asslam.walikum", 
    "assalam alaykum", 
    "assalam.walaikum", 
    "a-s-s-a-l-a-m", 
    "slms"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("ÙˆÙŽØ¹ÙŽÙ„ÙŽÙŠÙ’ÙƒÙÙ…Ù Ù±Ù„Ø³ÙŽÙ‘Ù„ÙŽØ§Ù…Ù ÙˆÙŽØ±ÙŽØ­Ù’Ù…ÙŽØ©Ù Ù±Ù„Ù„ÙŽÙ‘Ù‡Ù ÙˆÙŽØ¨ÙŽØ±ÙŽÙƒØ§ØªÙÙ‡Ù", threadID);
}  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho ðŸ˜‚", threadID);
   };
if ([
    "good evening", 
    "evening", 
    "gd evening", 
    "gud evening", 
    "ge", 
    "g.e", 
    "evenin"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Good Evening! I hope youâ€™re having a wonderful time.", threadID);
}
  if ([
    "i love you bot", 
    "bot i love you", 
    "i love you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Yaar, Mujhe aisi baatein nahi pasand. Main buhat shreef hoon. Haan, mera owner single hai, bolo to number tak de sakta hoon. ðŸ˜", threadID);
  }
 if ([
    "bot i miss you", 
    "i miss you bot", 
    "miss you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Hyeee, I miss you too! SuChi kia karun, ID issue aa jata hai is liye mujhe new ID banne ka wait karna padta hai. Jab new ID banti hai, to owner mujhe add kar deta hai. ðŸ˜…", threadID);
}
 if ([
    "bot kis na add kiya", 
    "bot kisne add kiya", 
    "bot kis ne add kiya", 
    "bot ko kisne add kiya",
    "bot ko kis ne add kiya", 
    "bot add kisne kiya", 
    "kisne bot ko add kiya", 
    "kis na bot ko add kiya", 
    "bot ko kisne add kiya", 
    "bot kis ne add kiya?"
].some(phrase => event.body.toLowerCase().includes(phrase))) {
    return api.sendMessage("Kio kia howa, add ho gaya so ho gaya. Ma ap ko kia taqleef hy jnab ðŸ‘». Waisay ap bhi khelo na, bot bot! ðŸ˜„ Mera owner single hai, bolo to number tak de sakta hoon! ðŸ˜", threadID);
 }
  
  if ([
    "how are you", 
    "how r u", 
    "how are u", 
    "how's it going", 
    "kese ho", 
    "kese hain", 
    "kese ho ap", 
    "ap kese ho", 
    "ap kaise ho", 
    "kaise hain aap", 
    "kaise ho", 
    "how do you do", 
    "what's up", 
    "sup", 
    "kya haal hain", 
    "kya hal hain", 
    "hal chal", 
    "hal kya hai", 
    "kya chal raha hai", 
    "kya scene hai", 
    "what's going on", 
    "kya ho raha hai", 
    "kaise ho tum", 
    "tum kaise ho", 
    "kya haal he"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Main theek hoon, aap kaise hain? Umeed karta hoon ke aap ka din acha guzray ga.", threadID);
  }
  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
    return api.sendMessage("Good Morning! ðŸŒž Ø¨ÛØª Ø®ÙˆØ´ Ø¢Ù…Ø¯ÛŒØ¯! ðŸ™Œ Ø§Ù…ÛŒØ¯ Ú©Ø±ØªØ§ ÛÙˆÚº Ú©Û Ø¢Ù¾ Ú©Ø§ Ø¯Ù† Ø®ÙˆØ´Ú¯ÙˆØ§Ø± Ú¯Ø²Ø±Û’ØŒ Ø§Ù„Ù„Û Ù¾Ø§Ú© Ø¢Ù¾ Ú©Ùˆ ÛØ± Ø¨Ø±Ø§Ø¦ÛŒ Ø³Û’ Ø¨Ú†Ø§Ø¦Û’ØŒ Ø¢Ù¾ Ú©Ùˆ Ø§Ù¾Ù†ÛŒ Ø­ÙØ¸ Ùˆ Ø§Ù…Ø§Ù† Ù…ÛŒÚº Ø±Ú©Ú¾Û’ØŒ Ø§ÙˆØ± Ú©Ø¨Ú¾ÛŒ Ú©Ø³ÛŒ Ú©Ø§ Ù…Ø­ØªØ§Ø¬ Ù†Û Ú©Ø±Û’! Ø¢Ù…ÛŒÙ†! ðŸ¤²ðŸ’«ðŸ’•ðŸ’ªðŸŒ»â˜•âœ¨", threadID);
}
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("áŽ¶ÉµÉµÉ— â±®âÉ½ÆžÉªÉªÆžÉ  Æâ±±É›É½É£âÆžÉ›ðŸŒ…, Æ¬É½É£ êŒ—ÉµÉ±É› CÉµffÉ›É› âÉ½ Æ¬É›É‘ Æ¬â á‡É‘Ò¡É› UÆ¥â˜•âœ¨ðŸ’«", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman â¤ï¸", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw ðŸ˜˜",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("ðŸ’ðŸ¥€ðŽð–ðð„ð‘:- â˜žê§ð™ðšð¢ð§ð¢-ð‰ð®ð­ð­ê§‚â˜œ ðŸ’«\nðŸ–¤ðšˆðš˜ðšž ð™²ðšŠðš— ð™²ðšŠðš•ðš• ð™·ðš’ðš– â„¤ð”¸ð•€â„• â„™â„ð•€â„•â„‚ð”¼ðŸ–¤\nðŸ˜³ð‡ð¢ð¬ ð…ðšðœðžð›ð¨ð¨ð¤ ð¢ððŸ¤“:- â˜žhttps://www.facebook.com/profile.php?id=100086033644262&mibextid=ZbWKwL \nðŸ‘‹For Any Kind Of Help Contact On Telegram  Username ðŸ‘‰ @zainijutt7ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Zaini jutt  â¤ï¸ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is zain. He Gives his name zain everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. ðŸ˜¼ Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga ðŸ¥ºðŸ™", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana ðŸŒ under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("ï¸Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("ï¸M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¡") || (event.body.toLowerCase() == "ðŸ˜¤") || (event.body.toLowerCase() == "ðŸ˜ ") || (event.body.toLowerCase() == "ðŸ¤¬") || (event.body.toLowerCase() == "ðŸ˜¾")) {
     return api.sendMessage("ï¸ðŸ¥º M toh Sirf Mazak Kr Rha ThaðŸ¥º. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho ðŸ˜˜", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜ž") || (event.body.toLowerCase() == "ðŸ˜”") || (event.body.toLowerCase() == "ðŸ˜£") || (event.body.toLowerCase() == "â˜¹ï¸") || (event.body.toLowerCase() == "ðŸ˜Ÿ") || (event.body.toLowerCase() == "ðŸ˜©") || (event.body.toLowerCase() == "ðŸ˜–") || (event.body.toLowerCase() == "ðŸ˜«") || (event.body.toLowerCase() == "ðŸ˜¦") || (event.body.toLowerCase() == "ðŸ˜§") || (event.body.toLowerCase() == "ðŸ˜¥") || (event.body.toLowerCase() == "ðŸ˜“") || (event.body.toLowerCase() == "ðŸ˜°")) {
     return api.sendMessage("ï¸Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("ï¸Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry MeðŸ™ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¢") || (event.body.toLowerCase() == "ðŸ˜­") || (event.body.toLowerCase() == "ðŸ¥º") || (event.body.toLowerCase() == "ðŸ¥¹")) {
     return api.sendMessage("ï¸Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate ðŸ« deta hu likho â˜žChocolateâ˜œ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜·") || (event.body.toLowerCase() == "ðŸ¤•") || (event.body.toLowerCase() == "ðŸ¤§") || (event.body.toLowerCase() == "ðŸ¤’")) {
     return api.sendMessage("ï¸Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine ðŸ’ŠðŸ’‰ le aata huðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("ï¸Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("ï¸meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("ï¸Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("ï¸ð—ð—®ð—¶ ð—¦ð—µð—¿ð—²ð—² ð—¥ð—®ð—º ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("ï¸Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™‚") || (event.body.toLowerCase() == "ðŸ™ƒ")) {
     return api.sendMessage("ï¸Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤¥") || (event.body.toLowerCase() == "ðŸ¤¥")) {
     return api.sendMessage("ï¸Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe toðŸ¤­ðŸ¤­ðŸ¤­ðŸ¤­", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤”") || (event.body.toLowerCase() == "ðŸ¤¨")) {
     return api.sendMessage("ï¸Kya soch rahe ho etna ðŸ¤¨", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¥´") || (event.body.toLowerCase() == "ðŸ¥´")) {
     return api.sendMessage("ï¸Oye nashedi ðŸ˜‚ðŸ˜‚ðŸ˜‚", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜¶") || (event.body.toLowerCase() == "ðŸ˜¶")) {
     return api.sendMessage("ï¸Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye ðŸ˜œðŸ˜œ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜‰") || (event.body.toLowerCase() == "ðŸ˜‰")) {
     return api.sendMessage("ï¸Aankh kyu maar rahe ho, Me bahut shareef huðŸ¥º", threadID);
   };

   if ((e

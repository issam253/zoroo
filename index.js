const express = require("express");
const app = express();

const texts = [
  "كتبوا عن الحب وعن الوفاء كثيرا ...ولم نجد في واقعهم إلا الخذلان🥀🥀💔",
  "❤️ عيونـــك أجمــل مــن السمـــاء بنجومهــا وضحڪتـــك أجمــل مــن البـــدر لو اڪتمـــل🖇️❤️",
  "‏النوم هو الشيء الوحيد الذي يستحق أن نعطيه أكبر من حجمه🫠",
  "_سلامآا على ارواح تَشوَهَتْ ومازالت تُقاوم_🖇️",
  "وعلى عَيْنَيها آ تتلى آيةً واحِدة .. إقْرَأْ بِإسْمِ رَبِّكَ الَّذِي خَلَقَ 🌸☁️🤎",
  "الخَمْرُ يُسْكِرُ مَنْ يُعَاقِرُ كَأْسَهُ، وَعَيْنَاهَا بِلَا كُؤُوسٍ تُسْكِرُ. -بُنِّيةُ العَينَينِ.😌🤎 #𝑺�𝒖𝒍👑",
  "°° *ارتـدت نقـابهـا الأســود وقـالــت : مـا رأيك ؟* *قال : أي رأي تسـأليـن عنـه* *وقـد جـعله الله لــون الليـل في السماء* *وجعلك قمــرًا بيـن النســاء*💎🌸",
  "وتبدو هادئاً كأنّك مُتصالحٌ مع كلِّ ما حولَك..ولرُّبما كان هذا النوع من السكينة حرباً صامتةً ضِدّ كلّ ِشيء !!🖤",
  ".★ لا ترهق نفسك مع بشر لا يستحقون العتاب..🖤👑 𝑫𝒐𝒏'𝒕 𝒃𝒖𝒓𝒅𝒆𝒏 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒉𝒐 𝒅𝒐 𝒏𝒐𝒕 𝒅𝒆𝒔𝒆𝒓𝒗𝒆 𝒃𝒍𝒂𝒎𝒆..🖤👑",
  "‏۞وَلَسَوْفَ يُعْـطِيكَ رَبُڪَ فَتَرْضـَى۞...💛✨",
  "لــيــتـــــنا نـــســـتـــطـــيـــع إيــقــاف الـــــــزمــــن عــــلـــــى لـــــحـــــظـــــات كـــنـــا بـــــهــــــا ســعــداء ⁰⁰.⁰⁰🖤🍷𝕀 𝕨𝕚𝕤𝕙 𝕨𝕖 𝕔𝕠𝕦𝕝𝕕 𝕤𝕥𝕠𝕡 𝕥𝕚𝕞𝕖 𝕠𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕤 𝕨𝕙𝕖𝕟 𝕨𝕖 𝕨𝕖𝕣𝕖 𝕙𝕒𝕡𝕡𝕪 ⁰⁰.⁰⁰🖤🍷",
  "الخَمْرُ يُسْكِرُ مَنْ يُعَاقِرُ كَأْسَهُ، وَعَيْنَاهَا بِلَا كُؤُوسٍ تُسْكِرُ. -بُنِّيةُ العَينَينِ.😌🤎 #𝑺𝒐𝒖𝒍👑",
  "مُتَوَاضِعَةٌ؛ لكِنْ لَهَا أَلْفُ هَيْبَةٍ.🧸🦋",
  ".★ لا ترهق نفسك مع بشر لا يستحقون العتاب..🖤👑 𝑫𝒐𝒏'𝒕 𝒃𝒖𝒓𝒅𝒆𝒏 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒉𝒐 𝒅𝒐 𝒏𝒐𝒕 𝒅𝒆𝒔𝒆𝒓𝒗𝒆 𝒃𝒍𝒂𝒎𝒆..🖤👑",
  "لا أحد يستحق أن يستحقك مرتين ..🖤🌻",
  "- لم تستطع ٱمرأة العزيز أن تنال سيدنا يوسف بإغرائها ، و ٱستطاعت ٱبنة شعيب أن تتزوّج سيدنا موسى بحيائها . تعفّفِي ؛ تنالِي فوقَ مُناكِ!🍂☺️",
  "لقيتك أرخص من العتاب قلت أخسرك…🖤✨",
  "الحُزن سببهُ الذكاء، كُلما زاد فهمك لأشياء معيَّنة كُلما تمنيتَ لو لم تفهمها. - تشارلز بوكوفسكي",
  "الحـــب كذبة اخترعها الفقــراء 🤡✨",
  "🔘 « قال عُبيد بن عُمير: تَـسبِيحَة بِحـمدِ الله في صَـحِيفَة مُـؤمِن، خـيرٌ له مِن جِـبَال الدُّنيَـا تَجـري مَـعَه ذَهَـبًا »..♡ [مُصنّف ابنِ أبِي شَيبَة] ",
  "دعِ الحيَاةَ تأتيكَ بأعنَف مالديهَا...لن يُهزَمَ شخصٌ يؤمنُ بنفسِه..🖤",
  "آلحيــة مثل آلبيـآنو.. هناك أصابع بيضاء وهي (السعادة) وهناك أصابع سوداء وهي (الحزن) ولكن تأكد إنك ستعزف بالإثنين لكي تعطي الحياة لحناً",
  "ما يُعجبني فِي نفسي: أني لا أجد في قلبي كراهِية لأحد إما أن أُحبه أو أن أُعرض عنه وأجعل علاقتي به سطحيّة .♥️",
  "كـان الـورد قبل لقـياگ غصـُن فيزهر حيــن تلمسـه يـداگِ 🌸🤍! 𝓑𝓮𝓯𝓸𝓻𝓮 𝓜𝓮𝓮𝓽𝓲𝓷𝓰 𝓨𝓸𝓾 𝓨𝓱𝓮 𝓤𝓸𝓼𝓮 𝔀𝓪𝓼 𝓪 𝓑𝓻𝓪𝓷𝓿𝓱 𝓪𝓷𝓭 𝓲𝓽 𝓑𝓵𝓸𝓸𝓶𝓼 𝓦𝓱𝓮𝓷 𝓨𝓸𝓾𝓻 𝓗𝓪𝓷𝓭𝓭𝓼 𝓣𝓸𝓾𝓬𝓱 🌸🤍!",
  "#لنفسي. آعــــشق شخصيتي فــــي عنآدي فــــي غروري فــــي تصرفآتي فأنــــا آنا وآبــــقئ آنا القــــمه😌👑",
  "بَيْنَمَا كَانَ الجَمِيعُ يَرَانِي وَحِيدَةً، كُنْتُ جَيْشًا كَامِلًا لِنَفْسِي.💛",
  "أرى شخٌص على المرآه يُحُبَني وما أجمل حُب الذات للذات ✨💜",
  "لا تيأس وأنت تعلم أن الله دوماً يخلق نوراً جديداً بعد كل ظلام🧚‍♀️💜🗞 𝑫𝒐𝒏'𝒕 𝒅𝒆𝒔𝒑𝒂𝒊𝒓 𝒘𝒉𝒊𝒍𝒆 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 𝑨𝒍𝒍𝒂𝒉 𝒂𝒍𝒘𝒂𝒚𝒔 𝒄𝒓𝒆𝒂𝒕𝒆𝒔 𝒏𝒆𝒘 𝒍𝒊𝒈𝒉𝒕 𝒂𝒇𝒕𝒆𝒓 𝒆𝒗𝒆𝒓𝒚 𝒅𝒂𝒓𝒌𝒏𝒆𝒔🧚‍♀️💜🗞🧸",
  "- تـوَصُِـفَ جُـمِـال الِـوࢪدُ وَهِـيْ أجُـمِـل مَـنـهُ:🙂🌸💋♡",
  "دع إبـتــسامتــڪ تـغـيـــر الـعــالم ولا تـــدع الـعـــالم يغـيـــر إبـتــسامتـڪ..🥷🏻🖤",
  "الْجَمَالُ جَمَالُ الرُّوحِ أَمَّا الْوَجْه فَحَاشَا لِلّه أَنْ يَخْلُقَ شَيْءًا قَبِيحًا ☘️🤍",
  "قد لا أملك أن أبقيگ بجانبي.. ولا أملك الأقدار كي أجعلگ قدري.. لكني أملك قـلب سأبقيگ فيه للأبد ❤️‍🔥",
  "تمر السنوات ويتأكد لي ان العائلة هي كل شيء.. 🤍✨."
];

const imgUrls = [
  "https://i.imgur.com/pALWyfE.jpeg",
  "https://i.imgur.com/K72ugWG.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/pALWyfE.jpeg",
  "https://i.imgur.com/K72ugWG.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/rUjgOgL.jpeg",
  "https://i.imgur.com/uoff1Wp.jpeg",
  "https://i.imgur.com/K72ugWG.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/rUjgOgL.jpeg",
  "https://i.imgur.com/uoff1Wp.jpeg",
  "https://i.imgur.com/eNrpGO2.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/pALWyfE.jpeg",
  "https://i.imgur.com/K72ugWG.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/rUjgOgL.jpeg",
  "https://i.imgur.com/uoff1Wp.jpeg",
  "https://i.imgur.com/jTilm3m.jpeg",
  "https://i.imgur.com/qmGF05z.jpeg",
  "https://i.imgur.com/hstd2Lb.jpeg",
  "https://i.imgur.com/rUjgOgL.jpeg",
  "https://i.imgur.com/uoff1Wp.jpeg",
  "https://i.imgur.com/rUjgOgL.jpeg",
  "https://i.imgur.com/uoff1Wp.jpeg",
  "https://i.imgur.com/eNrpGO2.jpeg",
  "https://i.imgur.com/jTilm3m.jpeg",
  "https://i.imgur.com/qmGF05z.jpeg",
  "https://i.imgur.com/mDBnIVZ.jpeg"
];

app.get("/iq", (req, res) => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const data = {
    text: texts[randomIndex],
    imgUrl: imgUrls[randomIndex]
  };
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

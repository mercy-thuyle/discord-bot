let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
  
  if(message.content === "guideverify") {
    let embed = new Discord.MessageEmbed()
    .setTitle("VERIFY - XÁC THỰC")
    .setDescription(":one: Vào <#840058200283414555> đọc thật kĩ luật của server. Sau khi đọc xong nếu đồng ý với BQT về nội quy thì tích ô **ĐỒNG Ý**. " + 
                    "\n :two:  Sau khi tích vào đồng ý, bạn sẽ được mở <#840058200283414556> tại đây bạn react vào biểu tượng các vai trò phù hợp với bản thân. "+
                    "Chọn sai có thể chọn lại. Sau khi đã chắc chắn thì tích vào ô **XÁC NHẬN** :white_check_mark:. Sau khi tích sẽ không thể react lại. "+
                    "(Các trường hợp nhầm lẫn, vui lòng liên hệ với BQT để được giải quyết.)" +
                    "\n :three: Trải nghiệm server và nhớ tuân thủ nội quy nhé ^^"+
                    "(hãy vào set ngày tháng năm sinh của mình tại <#840058202979565593> để được hưởng những đặc quyền trong sinh nhật của mình nhé) "+
                    "\n :arrow_right: ***Lưu ý***: Nếu có thắc mắc, hãy liên hệ các BQT ở <#840058201814597657> để được trợ giúp." + 
                    "\n -------------------------------------------------------- "+
                    "\n :one: Go <#840058200283414555> to read Terms and Conditions of Server. If you agree then react to :white_check_mark: "+
                    "\n :two: Then go to #840058200283414556>, react your favorite role. "+
                    "Then react to :white_check_mark: when you are sure everything is done (Carefully, you just have only one chance) "+
                    "\n :three: Enjoy yourself here. (Member can set Date Of Birth in <#840058202979565593> "+
                    "\n :arrow_right: ***Note***: Call for support at <#840058201814597657> ."
                   )
    .setColor("BLUE")
    .setFooter("Read carefully - Đọc thật kĩ")
    message.channel.send(embed)
  }

  if(message.content === "rule") {
    let embed = new Discord.MessageEmbed()
    .setTitle("RULE - NỘI QUY")
    .setColor("RED")
    message.channel.send(embed)
  }
  
  if(message.content === "setsn") {
    let embed = new Discord.MessageEmbed()
    .setTitle("HƯỚNG DẪN SET SINH NHẬT", true)
    .setColor("RED")
    .setDescription("\n Nhập sinh nhật theo mẫu sau: **bb.set[dấu cách][tháng]-[ngày]**"+
                    "\n :small_blue_diamond: Với các tháng là viết tắt theo tiếng anh như sau:" +
                    "\n Tháng 1 - Jan" +
                    "\n Tháng 2 - Feb" +
                    "\n Tháng 3 - Mar" +
                    "\n Tháng 4 - Apr" +
                    "\n Tháng 5 - May" +
                    "\n Tháng 6 - Jun" +
                    "\n Tháng 7 - Jul" +
                    "\n Tháng 8 - Aug" +
                    "\n Tháng 9 - Sep" +
                    "\n Tháng 10 - Oct" +
                    "\n Tháng 11 - Nov" +
                    "\n Tháng 12 - Dec" +
                    "\n :arrow_right: Ví dụ: Sinh ngày 19 tháng 2 sẽ nhập là ***bb.set Feb-19*** nhấn gửi là xong!"
                   )
    message.channel.send(embed)
  }
    


  
  if(message.content === "rule1") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":one: **Luật sẽ được cập nhật liên tục khi có lỗ hổng**")
    .setColor("RED")
    message.channel.send(embed)
  }
  
  if(message.content === "rule2") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":two: **Hãy biết tôn trọng:**")
    .setColor("RED")
    .setDescription("\n •    Tôn trọng BQT."+
                    "\n •    Tôn trọng mọi người. (tip: hãy bắt đầu câu chuyện bằng lời chào)"+
                    "\n •    Tôn trọng nội quy của server và quy định riêng của từng kênh. (tip: chỉ dùng bot ở đúng kênh bot)"+
                    "\n •    Các hành vi body-shaming, chửi bới, lăng mạ, miệt thị, kì thị, phân biệt đối xử, phân biệt vùng miền đều bị **CẤM**."+
                    "\n •    Sử dụng Tiếng Việt có dấu, hạn chế teencode và các từ gây khó hiểu."+
                    "\n •    Hạn chế ping @everyone, @here ở các kênh chung."+
                    "\n •    Hạn chế viết hoa toàn bộ, tránh gây khó chịu và thể hiện sự tôn trọng."+
                    "\n •    Không sử dụng acc clone trong server. (Tài khoản phải được xác thực)"
                   )
    message.channel.send(embed)
  }
  
  if(message.content === "rule3") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":three: **Nói KHÔNG với đồi trụy và vi phạm thuần phong mỹ tục.**", true)
    .setColor("RED")
    .setDescription("\n •    KHÔNG sử dụng các từ ngữ tục tĩu, khiếm nhã, thiếu văn hoá…"+
                    "\n •    KHÔNG đăng các nội dung phản cảm, sex, máu me kinh dị, 18+ …"+
                    "\n •    KHÔNG bình luận, đả kích về các vấn đề nhảy cảm sau: dân tộc, sắc tộc, chính trị, tôn giáo, giới tính, mê tín dị đoan."
                   )
    message.channel.send(embed)
  }
    
  if(message.content === "rule4") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":four: **Không SPAM**", true)
    .setColor("RED")
    .setDescription("\n •    Bao gồm cả việc spam tin nhắn, ảnh, link,... không liên quan, lặp lại, số lượng lớn hay quá nhanh gây ảnh hưởng đến người khác."+
                    "\n •    Không lạm dụng tag tất cả mọi người bằng tag everyone hay here khi chưa được sự cho phép của BQT."+
                    "\n •    Không quấy rối"+
                    "\n •    Bao gồm các hành vi gạ gẫm quá đà khi đối phương không muốn, gadit, spam tin nhắn gây khó chịu, ảnh hưởng đến tâm lý của người khác. Member nào bị quấy rối thì khiếu nại, liên hệ với BQT để giải quyết. "+
                    "\n •    Không đăng tải link không an toàn."
                   )
    message.channel.send(embed)
  }
  
  if(message.content === "rule5") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":five: **Không TOXIC**", true)
    .setColor("RED")
    .setDescription("\n •    Cảm thấy không hợp, hãy rút lui trong sự thân thiện! Mọi hành xử toxic, đùa quá trớn, gây war đều bị nghiêm **CẤM**.")
    message.channel.send(embed)
  }
    
  if(message.content === "rule6") {
    let embed = new Discord.MessageEmbed()
    .setTitle(":six: **Nói KHÔNG với đồi trụy và vi phạm thuần phong mỹ tục.**", true)
    .setColor("RED")
    .setDescription("\n •    Nghiêm **CẤM** các hành vi sử dụng server để quảng cáo, pr khi chưa được sự cho phép của BQT."+
                    "\n :arrow_right: Ngoài những luật chung cho toàn server, mỗi channel có thể có thêm những luật riêng. Đề nghị các member trước khi tham gia một channel hãy đọc kỹ phần giới thiệu và phần GHIM của channel đó"+
                    "\n :arrow_right: Mọi hành vi vi phạm luật server đều phải chịu hình phạt tùy theo mức độ, bao gồm: warning, mute, kick, ban tạm thời, ban vĩnh viễn."+
                    "\n :arrow_right: Nếu có thắc mắc về việc xử phạt hay muốn khiếu nại, tố cáo hãy liên hệ các BQT để được xử lý."
                   )
    .setFooter("Read carefully - Đọc thật kĩ")
    message.channel.send(embed)
  }

    if(message.content === "detention") {
    let embed = new Discord.MessageEmbed()
    .setTitle("DETENTION - XỬ LÝ VI PHẠM")
    .setDescription("Mọi hành vi vi phạm nội quy đều phải chịu hình phạt tùy theo mức độ, bao gồm: warning, mute, kick, ban tạm thời, ban vĩnh viễn."+
                    "\n :warning: ***Mức 1***: Với **3 lần** vi phạm đầu tiên, hình phạt chung là **WARN** có **MUTE**."+
                    "\n •    Lần thứ 1  là **WARN** "+
                    "\n •    Lần thứ 2 là **MUTE 5p**. (chép phạt **10 lần** tại #PHÒNG CŨI)"+
                    "\n •    Lần thứ 3 là **MUTE 30p**. (chép phạt **10 lần** tại #PHÒNG CŨI)"+
                    "\n :warning:***Mức 2***: Từ lần thứ 3 trở đi, thời gian phạt do BQT quyết định tuỳ mức độ vi phạm:"+
                    "\n •    Lần thứ 4 là **MUTE** từ **60p trở lên**. (chép phạt **10 lần** tại #PHÒNG CŨI)"+
                    "\n •    Lần thứ 5 là **MUTE** từ **1 ngày trở lên**. (chép phạt **10 lần** tại #PHÒNG CŨI)"+
                    "\n :warning:***Mức 3***: Vi phạm quá nhiều trong một thời gian ngắn (1 tuần vi phạm liên tục)"+
                    "\n •    Lần thứ 6 là **KICK**."+
                    "\n •    Lần thứ 7 là **BAN 1 ngày**."+
                    "\n •    Lần thứ 8 là **BAN 3 ngày**."+
                    "\n •    Lần thứ 9 là **BAN 1 tuần**."+
                    "\n •    Lần thứ 10 là **BAN vĩnh viễn**."+
                    "\n :arrow_right: Đặc biệt, có những nội quy nếu vi phạm quá **NẶNG** sẽ được BQT ưu ái xếp vào vi phạm ở mức 3. "+
                    "\n :arrow_right: Nếu có thắc mắc về việc xử phạt hay muốn khiếu nại, tố cáo hãy liên hệ các BQT ở <#840058201814597657> để được xử lý."
                   )
    .setColor("RED")
    .setFooter("Read carefully - Đọc thật kĩ")
    message.channel.send(embed)
  }
  
    if(message.content === "confirmrule") {
    let embed = new Discord.MessageEmbed()
    .setTitle("CONFIRM - XÁC NHẬN")
    .setDescription(":green_square: Tôi đã **ĐỌC**, **HIỂU** và **ĐỒNG Ý** với luật lệ và nội quy của Server."+
                    "\n :green_square: I have **READ**, **UNDERSTOOD** and **ACCEPTED** the Terms and Conditions of Server."
                   )
    .setColor("GREEN")
    .setFooter("Read carefully - Đọc thật kĩ")
    message.channel.send(embed)
  }
  
      if(message.content === "confirmrole") {
    let embed = new Discord.MessageEmbed()
    .setTitle("CONFIRM - XÁC NHẬN")
    .setDescription(":green_square: Tôi** XÁC NHẬN** thông tin trên là hoàn toàn chính xác."+
                    "\n :green_square: I have **CONFIRMED** that is true and done."
                   )
    .setColor("GREEN")
    .setFooter("Read carefully - Đọc thật kĩ")
    message.channel.send(embed)
  }  
    
  if(message.content === "region") {
    let embed = new Discord.MessageEmbed()
    .setTitle("REGION - KHU VỰC")
    .setDescription(":snowflake: : Miền Bắc "+
                    "\n :flame: : Miền Trung"+
                    "\n :cloud: : Miền Nam"+
                    "\n :ringed_planet: : Foreign - Nước ngoài"
                   )
    .setColor("YELLOW")
    .setFooter("Pick one")
    message.channel.send(embed)
  }
  
  if(message.content === "gender") {
    let embed = new Discord.MessageEmbed()
    .setTitle("GENDER - GIỚI TÍNH")
    .setDescription(":male_sign: : Male - Nam"+
                    "\n :female_sign: : Female - Nữ"
                   )
    .setColor("YELLOW")
    .setFooter("Pick one")
    message.channel.send(embed)
  }
  
    if(message.content === "game1") {
    let embed = new Discord.MessageEmbed()
    .setTitle("GAME GENRES - DÒNG GAME")
    .setDescription(":white_circle: : Sanbox "+
                    "\n :red_circle: : RTS"+
                    "\n :orange_circle: : FPS"+
                    "\n :blue_circle: : MOBA"+
                    "\n :green_circle: : RPG"
                   )
    .setColor("YELLOW")
    .setFooter("Pick many")
    message.channel.send(embed)
  }
  
      if(message.content === "game2") {
    let embed = new Discord.MessageEmbed()
    .setTitle("FAVORITE GAMES - SỞ THÍCH GAME")
    .setDescription(" <:gta_5:866995117721911306> - GTA "+
                    "\n <:lol:866995118795653140> - LEAGUE OF LEGENDS"+
                    "\n <:valorant_circle:866995114584834048> - VALORANT"+
                    "\n <:csgo:866995114550362113> - CS:GO"+
                    "\n <:pubg:866995119173140520> - PUBG"+
                    "\n <:cod:866995116357976075> - COD:WARZONE"+
                    "\n <:apex:866995110537461770> - APEX LEGENDS"+
                    "\n <:dota_2:866995110863831060> - DOTA 2"+
                    "\n <:minecraft:866995115738005514> - MINECRAFT"+
                    "\n <:dst:867016184918179890> - DON'T STARVE TOGETHER"+
                    "\n <:stardew_valley:866995110099943425> - STARDEW VALLEY"+
                    "\n <:genshin_impact:866995113284468736> - GENSHIN IMPACT"
                   )
    .setColor("YELLOW")
    .setFooter("Pick many")
    message.channel.send(embed)
  }  
  
  
      if(message.content === "announce") {
    let embed = new Discord.MessageEmbed()
    .setTitle("ANNOUNCE - THÔNG BÁO")
    .setDescription(":tada: : Thông báo Event Server "+
                    "\n :gift: : Thông báo Giveaway"+
                    "\n :wolf: : Thông báo Ma sói - Werewolf"+
                    "\n :microphone: : Thông báo Karaoke"
                   )
    .setColor("YELLOW")
    .setFooter("Pick one")
    message.channel.send(embed)
  }
  
    if(message.content === "class") {
    let embed = new Discord.MessageEmbed()
    .setTitle("CLASS - PHÂN LOẠI")
    .setDescription(":yin_yang: Erudite (The Intelligent) - Thông thái, uyên bác" +
                    "\n :trident: Valiant (The Brave) - Can đảm, gan dạ"+
                    "\n :beginner: Staunch (The Loyal) - Trung thành, tin tưởng"+
                    "\n :white_flower: Abnegation (The Selfless) - Vị tha, rộng lượng"+
                    "\n :eight_spoked_asterisk: Candor (The Honest) - Thẳng thắn, thật thà"+
                    "\n :diamond_shape_with_a_dot_inside: Amity (The Kind) - Thân thiện, hiền lành"+
                    "\n :fleur_de_lis: Shrewd (The Cunning) - Mưu trí, tinh ranh"
                   )
    .setColor("YELLOW")
    .setFooter("Pick one")
    message.channel.send(embed)
  }
  
})






client.login("token")
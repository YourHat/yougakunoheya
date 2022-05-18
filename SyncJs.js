
//Header
var HeaderContent = document.getElementById("WebTitle")

HeaderContent.innerHTML="<div id='titleMe' class='titleClose'><button class='TopMenu' onclick='OpenMenu()'>MENU</button><p class='TitleY'><a href='index.html' style='text-decoration:none;color:white;'>洋楽<span class='NonoNo'>の</span>部屋</a></p></div>";
// Footer Menu
var TitleMenuDrop=document.getElementById("titleMe");
var openCloseNumber = 0;
function OpenMenu(){
  if(openCloseNumber == 0){
    HeaderContent.innerHTML="<div id='titleMe' class='titleOpen'><button class='TopMenu' onclick='OpenMenu()'>CLOSE</button><p class='TitleY'><a href='index.html' style='text-decoration:none;color:white;'>洋楽<span class='NonoNo'>の</span>部屋</a></p><br>"
    +"<br><ul class='MenuList'>"
    +"<li class='ItemWLine'><a href='index.html'>HOME</a></li>"
    +"<li class='ItemWLine'><a href='Song.html'>SONG</a></li>"
    +"<li class='ItemWLine'><a href='Sonota.html'>ABOUT</a></li>"
    +"<li><a href='https://twitter.com/yougakunoheya'><img src='twitter.png' height = 30px><br><div style='font-size:0.5em;line-height:1.3em;color:white;letter-spacing:0.1em;'>洋楽リリース後すぐに和訳を見たい方は<br>ぜひTwitterをフォローしてください。</div></a></li></ul></div>";
  openCloseNumber = 1;
}else{
  HeaderContent.innerHTML="<div id='titleMe' class='titleClose'><button class='TopMenu' onclick='OpenMenu()'>MENU</button><p class='TitleY'><a href='index.html' style='text-decoration:none;color:white;'>洋楽<span class='NonoNo'>の</span>部屋</a></p></div>";
  openCloseNumber = 0;
}}

// Showing Ads for Disney Songs
if(document.getElementById("UnderTitleAffi")){
  var LyricsAffiAds1 = document.createElement('script');
  LyricsAffiAds1.async = true;
  LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  var LyricsAffiAds2 =document.createElement('ins');
  LyricsAffiAds2.className = "adsbygoogle";
  LyricsAffiAds2.style.display = "block";
  LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
  LyricsAffiAds2.dataset.adSlot = "8240592414";
  LyricsAffiAds2.dataset.adFormat = "horizontal";
  LyricsAffiAds2.dataset.fullWidthResponsive = "false";
  var LyricsAffiAds3 = document.createElement('script');
  LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
  var LyricsAddiAds = document.getElementById("UnderTitleAffi");
  LyricsAddiAds.appendChild(LyricsAffiAds1);
  LyricsAddiAds.appendChild(LyricsAffiAds2);
  LyricsAddiAds.appendChild(LyricsAffiAds3);
}

// if(document.getElementById("TopAffi")){
// var TopAff = document.getElementById("TopAffi")
// TopAff.innerHTML='<div class="Itemlists" style="margin-bottom:2em;"><a href="Eikaiwa.html" target="_blank" rel="noopener noreferrer"><div class="kijikoko" style="border-radius: 5px;"><p class="RefGazou"><img class="kijiPicNew" src="1eikaiwap.jpg".jpg" alt="無料体験" style="border-radius: 5px 0px 0px 5px;"> </p><div class="Uta" style="font-weight:bold;"><span id="titlead">無料体験・相談</span>ができる<span id="titlead">英会話教室</span>ってこんなに沢山あるの！？</div><br><div class="Eiga" style="margin-top:-3em;padding-left:110px;padding-right:1em;font-size:0.6em;line-height: 1.5em;"><span id="titlead">アメリカの大学</span>を卒業した当サイト管理人が<span id="titlead">気軽</span>に・<span id="titlead">簡単</span>に<span id="titlead">無料体験</span>・<span id="titlead">無料相談</span>ができる<span id="titlead">英会話教室</span>を解説しまとめました。</div></div></a></div>'
// +'<p style="text-align:center;font-weight:bold;font-size:0.7em;margin:-1.5em 0 1em 0;">↑<span id="titlead">洋楽をカッコよく歌いたい</span>・<span id="titlead">英語ができるようになりたい</span>人へ↑</p>';
// }

if(document.getElementById("TopAffi")){
  var LyricsAffiAds1 = document.createElement('script');
  LyricsAffiAds1.async = true;
  LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-41581290502266";
  LyricsAffiAds1.crossorigin = "anonymous";
  var LyricsAffiAds2 =document.createElement('ins');
  LyricsAffiAds2.className = "adsbygoogle";
  LyricsAffiAds2.style.display = "block";
  LyricsAffiAds2.dataset.adLayout = "in-article";
  LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
  LyricsAffiAds2.dataset.adSlot = "2457100157";
  LyricsAffiAds2.dataset.adFormat = "fluid";
  LyricsAffiAds2.dataset.fullWidthResponsive = "false";
  var LyricsAffiAds3 = document.createElement('script');
  LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
  var LyricsAddiAds = document.getElementById("TopAffi");
  LyricsAddiAds.appendChild(LyricsAffiAds1);
  LyricsAddiAds.appendChild(LyricsAffiAds2);
  LyricsAddiAds.appendChild(LyricsAffiAds3);
}
if(document.getElementById("underheadafi")){
  var LyricsAffiAds1 = document.createElement('script');
  LyricsAffiAds1.async = true;
  LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4158129050226668";
  LyricsAffiAds1.crossorigin = "anonymous";
  var LyricsAffiAds2 =document.createElement('ins');
  LyricsAffiAds2.className = "adsbygoogle";
  LyricsAffiAds2.style.display = "block";
  LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
  LyricsAffiAds2.dataset.adSlot = "9764195793";
  LyricsAffiAds2.dataset.adFormat = "horizontal";
  LyricsAffiAds2.dataset.fullWidthResponsive = "false";
  var LyricsAffiAds3 = document.createElement('script');
  LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
  var LyricsAddiAds = document.getElementById("underheadafi");
  LyricsAddiAds.appendChild(LyricsAffiAds1);
  LyricsAddiAds.appendChild(LyricsAffiAds2);
  LyricsAddiAds.appendChild(LyricsAffiAds3);
}






//ScrollEvent
YouT = 1;
function youtube_defer() {
//YoutubeLoad
    if(YouT == 1){
  var iframes = document.querySelectorAll('iframe');
  iframes.forEach(function(iframe){
    if(iframe.getAttribute('data-src')) {
      iframe.setAttribute('src',iframe.getAttribute('data-src'));
    }
  });
// Showing Ads For Disney Songs
  if(document.getElementById("LyricsAffi")){
        var LyricsAffiAds1 = document.createElement('script');
        LyricsAffiAds1.async = true;
        LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-415812905022666";
        LyricsAffiAds1.crossorigin = "anonymous";
        var LyricsAffiAds2 =document.createElement('ins');
        LyricsAffiAds2.className = "adsbygoogle";
        LyricsAffiAds2.style.display = "block";
        LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
        LyricsAffiAds2.dataset.adSlot = "3203491021";
        LyricsAffiAds2.dataset.adLayoutKey = "-ef+6k-30-ac+ty";
        LyricsAffiAds2.dataset.adFormat = "fluid";
        LyricsAffiAds2.dataset.fullWidthResponsive = "false";
        var LyricsAffiAds3 = document.createElement('script');
        LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
        var LyricsAddiAds = document.getElementById("LyricsAffi");
        LyricsAddiAds.appendChild(LyricsAffiAds1);
        LyricsAddiAds.appendChild(LyricsAffiAds2);
        LyricsAddiAds.appendChild(LyricsAffiAds3);
  }

  // if(document.getElementById("MiddleAffi")){
  //   var TopAff = document.getElementById("MiddleAffi")
  //   TopAff.innerHTML='<br><div style="text-align: center;"><div id="adfor"><span id="adfors">洋楽を上手に歌えるようになりたい、<br>洋楽を理解できるようになりたい方へ！</span></div></div>'
  //   +'<div class="Itemlists" style="margin-bottom:2em;"><a href="Eikaiwa.html"><div class="kijikokoAd"><p class="RefGazou"><img class="kijiPicNew" src="1eikaiwap.jpg".jpg" alt="無料体験" style="margin:10px;border-radius: 2px;"> </p>'
  //   +'<div class="Uta"><span style="background-color:rgb(223, 240, 255);padding:0.3em;border-radius: 2px;">関連記事</span>【400曲以上の洋楽を和訳してきた当サイトの翻訳者が厳選！<span id="titlead">無料体験</span>ができる<span id="titlead">オンライン英会話教室</span>７社他まとめ】</div><div style="text-align:center;">'
  //   +'<span style="text-align:center;border:solid rgb(160, 160, 160) 1px;padding: 0.4em 1em;color:rgb(161, 161, 161);">続きを読む</span></div></a></div>';
  //   }

    if(document.getElementById("MiddleAffi")){
        var LyricsAffiAds1 = document.createElement('script');
        LyricsAffiAds1.async = true;
        LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-415812905022666";
        LyricsAffiAds1.crossorigin = "anonymous";
        var LyricsAffiAds2 =document.createElement('ins');
        LyricsAffiAds2.className = "adsbygoogle";
        LyricsAffiAds2.style.display = "block";
        LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
        LyricsAffiAds2.dataset.adSlot = "5187057939";
        LyricsAffiAds2.dataset.adFormat = "auto";
        LyricsAffiAds2.dataset.fullWidthResponsive = "false";
        var LyricsAffiAds3 = document.createElement('script');
        LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
        var LyricsAffiAds4 = document.createElement("br");
        var LyricsAddiAds = document.getElementById("MiddleAffi");
        LyricsAddiAds.appendChild(LyricsAffiAds1);
        LyricsAddiAds.appendChild(LyricsAffiAds2);
        LyricsAddiAds.appendChild(LyricsAffiAds3);
        LyricsAddiAds.appendChild(LyricsAffiAds4);
    }
    if(document.getElementById("RelativeAffi")){
      var LyricsAffiAds1 = document.createElement('script');
      LyricsAffiAds1.async = true;
      LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4158129050226668";
      LyricsAffiAds1.crossorigin = "anonymous";
      var LyricsAffiAds2 =document.createElement('ins');
      LyricsAffiAds2.className = "adsbygoogle";
      LyricsAffiAds2.style.display = "block";
      LyricsAffiAds2.dataset.adFormat = "autorelaxed";
      LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
      LyricsAffiAds2.dataset.adSlot = "6706972130";
      LyricsAffiAds2.dataset.matchedContentRowsNum = "6";
      LyricsAffiAds2.dataset.matchedContentColumnsNum = "1";
      LyricsAffiAds2.dataset.matchedContentUiType = "image_card_sidebyside";
      var LyricsAffiAds3 = document.createElement('script');
      LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
        var LyricsAddiAds = document.getElementById("RelativeAffi");
        document.getElementById('RelativeAffi').innerHTML = '<br><div class="KaiCen"><h2 class="Kai">オススメの記事</h2></div><br>'
        LyricsAddiAds.appendChild(LyricsAffiAds1);
        LyricsAddiAds.appendChild(LyricsAffiAds2);
        LyricsAddiAds.appendChild(LyricsAffiAds3);
    }

    ///Showing new articles
    if(document.getElementById("NewArticle")){
      document.getElementById('NewArticle').innerHTML = '<br><br><div class="KaiCen"><h2 class="Kai">新しい記事</h2></div><br>' 
      +'<div class="Itemlists"><a href="WhatWouldYouDo.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="WhatWouldYouDoTM.jpg" alt="テイト・マクレー"> </p><div class="UtaNew">歌：What Would You Do</div><br><div class="EigaNew">歌手：Tate McRae（テイト・マクレー）</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>' 
      +'<div class="Itemlists"><a href="Slidin.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="slidinJasonDerulo.jpg" alt="ジェイソン・デルーロ"> </p><div class="UtaNew">歌：Slidin</div><br><div class="EigaNew">歌手：Jason Derulo（ジェイソン・デルーロ） </div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>' 
      +'<div class="Itemlists"><a href="HoldMyHand.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="holdmyhandlady.jpg" alt="レディー・ガガ"> </p><div class="UtaNew">歌：Hold My Hand</div><br><div class="EigaNew">歌手：Lady Gaga (レディー・ガガ)</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>' 
      +'<div class="Itemlists"><a href="CantHelpFallingInLove.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="elvispresley.jpg" alt="エルヴィス・プレスリー"> </p><div class="UtaNew">歌：CantHelpFallingInLove</div><br><div class="EigaNew">歌手：Elvis Presley (エルヴィス・プレスリー)</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="JailhouseRock.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="elvispresley.jpg" alt="エルヴィス・プレスリー"> </p><div class="UtaNew">歌：JailhouseRock</div><br><div class="EigaNew">歌手：Elvis Presley (エルヴィス・プレスリー)</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="LoveMeMore.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="lovememoreSamSmith.jpg" alt="サム・スミス"> </p><div class="UtaNew">歌：Love Me More</div><br><div class="EigaNew">歌手：Sam Smith（サム・スミス）</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'

      +'<div class="Itemlists"><a href="BamBam.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="BamBamCamila.jpg" alt="カミラ・カベロ"></p><div class="UtaNew">歌：Bam Bam</div><br><div class="EigaNew">歌手：Camila Cabello（カミラ・カベロ）, Ed Sheeran（エド・シーラン）</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="LoveSux.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="LoveItWhenYouHateMe.jpg" alt="アヴリル・ラヴィーン"></p><div class="UtaNew">歌：Love Sux</div><br><div class="EigaNew">歌手：Avril Lavigne（アヴリル・ラヴィーン）</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="FreakyDeaky.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="FreakyDeakyDoja.jpg" alt="ドージャ・キャット"></p><div class="UtaNew">歌：FreakyDeaky</div><br><div class="EigaNew">歌手：Tyga（タイガ）, Doja Cat（ドージャ・キャット）</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="DancingFeet.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="DancingFeetKygo.jpg" alt="DNCE"></p><div class="UtaNew">歌：Dancing Feet</div><br><div class="EigaNew">歌手：Kygo（カイゴ）, DNCE</div></div></a>'
      +'<div class="Gazoushutten"><a href="#">画像出典</a></div></div>'
;
      }
  YouT++;
     }       
    }

window.addEventListener('scroll', youtube_defer);

// Button to swich lyrics for Animation and Live Action
  
LAButton = document.getElementById("LAButton");
LLButton = document.getElementById("LLButton");
ALA=1;
function ScrollFunc(){
  if(ALA == 1){
         for(i=0;i<=LAN;i++){
                 C = "Animation"+ i;
                 document.getElementById(C).style.display = "block";
         }
         for(i=0;i<=LLN;i++){
                 C = "LiveAction"+ i;
                 document.getElementById(C).style.display = "none";
         }
  
  LAButton.style.backgroundColor = "mediumblue";
  LAButton.style.color = "white";
  LAButton.style.boxShadow ="0px 0px 0px 5px mediumblue"
  LAButton.style.border ="dashed 1px white"
  LLButton.style.backgroundColor = "aliceblue";
  LLButton.style.color = "silver";
  LLButton.style.boxShadow ="0px 0px 0px 5px aliceblue"
  LLButton.style.border = "dashed 1px cornflowerblue";
  ALA ++;
  }}
  window.addEventListener('scroll', ScrollFunc);
function clickA(){

       for(i=0;i<=LAN;i++){
               C = "Animation"+ i;
               document.getElementById(C).style.display = "block";
       }
       for(i=0;i<=LLN;i++){
               C = "LiveAction"+ i;
               document.getElementById(C).style.display = "none";
       }

LAButton.style.backgroundColor = "mediumblue";
LAButton.style.color = "white";
LAButton.style.boxShadow ="0px 0px 0px 5px mediumblue"
LAButton.style.border ="dashed 1px white"
LLButton.style.backgroundColor = "aliceblue";
LLButton.style.color = "silver";
LLButton.style.boxShadow ="0px 0px 0px 5px aliceblue"
LLButton.style.border = "dashed 1px cornflowerblue";
}
function clickL(){
       for(i=0;i<=LAN;i++){
               C = "Animation"+ i;
               document.getElementById(C).style.display = "none";
       }
       for(i=0;i<=LLN;i++){
               C = "LiveAction"+ i;
               document.getElementById(C).style.display = "block";
       }
       LLButton.style.backgroundColor = "mediumblue";
       LLButton.style.color = "white";
       LLButton.style.boxShadow ="0px 0px 0px 5px mediumblue"
       LLButton.style.border ="dashed 1px white"
       LAButton.style.backgroundColor = "aliceblue";
       LAButton.style.color = "silver";
       LAButton.style.boxShadow ="0px 0px 0px 5px aliceblue"
       LAButton.style.border = "dashed 1px cornflowerblue";

}


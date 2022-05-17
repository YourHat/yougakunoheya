
//Header
document.getElementById("WebTitle").innerHTML="<p class='title'><a href='index.html' style='text-decoration:none;color:white;'>洋楽<span class='NonoNo'>の</span>部屋</a></p>";
// Footer Menu
document.getElementById("FooterNav").innerHTML="<ul id='FUl'><li id='FHOME'><a href='index.html'><img id='IMGHOME' src='IconHome.png'><br>Home</a></li><li id='FNEW' ><a href='Song.html'><img id='IMGNEW' src='IconSongs.png'><br>Songs</a></li><li id='FCATEGORY'><a href='KijiItiran.html'><img id='IMGCATEGORY' src='IconArticles.png'><br>Blog</a></li><li id='FSEARCH' ><a href='Sonota.html'><img id='IMGSEARCH' src='IconSonota.png'><br>その他</a></li></ul>";
// Showing Ads for Blog
if(document.getElementById("UnderTitleAffiBlog")){
  var LyricsAffiAds1 = document.createElement('script');
  LyricsAffiAds1.async = true;
  LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  var LyricsAffiAds2 =document.createElement('ins');
  LyricsAffiAds2.className = "adsbygoogle";
  LyricsAffiAds2.style.display = "block";
  LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
  LyricsAffiAds2.dataset.adSlot = "4681304599";
  LyricsAffiAds2.dataset.adFormat = "horizontal";
  LyricsAffiAds2.dataset.fullWidthResponsive = "false";
  var LyricsAffiAds3 = document.createElement('script');
  LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
  var LyricsAddiAds = document.getElementById("UnderTitleAffiBlog");
  LyricsAddiAds.appendChild(LyricsAffiAds1);
  LyricsAddiAds.appendChild(LyricsAffiAds2);
  LyricsAddiAds.appendChild(LyricsAffiAds3);
}

if(document.getElementById("TopAffiBlog")){
  var LyricsAffiAds1 = document.createElement('script');
  LyricsAffiAds1.async = true;
  LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  var LyricsAffiAds2 =document.createElement('ins');
  LyricsAffiAds2.className = "adsbygoogle";
  LyricsAffiAds2.style.display = "block";
  LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
  LyricsAffiAds2.dataset.adSlot = "4681304599";
  LyricsAffiAds2.dataset.adFormat = "auto";
  LyricsAffiAds2.dataset.fullWidthResponsive = "false";
  var LyricsAffiAds3 = document.createElement('script');
  LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
  var LyricsAddiAds = document.getElementById("TopAffiBlog");
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
// Showing Ads 

    if(document.getElementById("MiddleAffiBlog")){
        var LyricsAffiAds1 = document.createElement('script');
        LyricsAffiAds1.async = true;
        LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        var LyricsAffiAds2 =document.createElement('ins');
        LyricsAffiAds2.className = "adsbygoogle";
        LyricsAffiAds2.style.display = "block";
        LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
        LyricsAffiAds2.dataset.adSlot = "4681304599";
        LyricsAffiAds2.dataset.adFormat = "auto";
        LyricsAffiAds2.dataset.fullWidthResponsive = "false";
        var LyricsAffiAds3 = document.createElement('script');
        LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
        var LyricsAffiAds4 = document.createElement("br");
        var LyricsAddiAds = document.getElementById("MiddleAffiBlog");
        LyricsAddiAds.appendChild(LyricsAffiAds1);
        LyricsAddiAds.appendChild(LyricsAffiAds2);
        LyricsAddiAds.appendChild(LyricsAffiAds3);
        LyricsAddiAds.appendChild(LyricsAffiAds4);
    }
    if(document.getElementById("BottomAffiBlog")){
        var LyricsAffiAds1 = document.createElement('script');
        LyricsAffiAds1.async = true;
        LyricsAffiAds1.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        var LyricsAffiAds2 =document.createElement('ins');
        LyricsAffiAds2.className = "adsbygoogle";
        LyricsAffiAds2.style.display = "block";
        LyricsAffiAds2.dataset.adClient = "ca-pub-4158129050226668";
        LyricsAffiAds2.dataset.adSlot = "4681304599";
        LyricsAffiAds2.dataset.adFormat = "auto";
        LyricsAffiAds2.dataset.fullWidthResponsive = "false";
        var LyricsAffiAds3 = document.createElement('script');
        LyricsAffiAds3.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
        var LyricsAddiAds = document.getElementById("BottomAffiBlog");
        LyricsAddiAds.appendChild(LyricsAffiAds1);
        LyricsAddiAds.appendChild(LyricsAffiAds2);
        LyricsAddiAds.appendChild(LyricsAffiAds3);
    }



    ///Showing new articles
    if(document.getElementById("NewArticle")){
      document.getElementById('NewArticle').innerHTML = '<br><br><div class="KaiCen"><h2 class="Kai">新しい記事</h2></div><br>'
      +'<div class="Itemlists"><a href="IronHeart.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="IronheartWiki.jpg" alt="アイアンハート"> </p><div class="UtaNew">アイアンハートってどんなマーベルヒーロー？</div><br><div class="EigaNew">2021/8/02</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://en.wikipedia.org/wiki/Ironheart_(character)">画像出典</a></div></div>'      
      +'<div class="Itemlists"><a href="Namor.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="NamorComic.jpg" alt="ネイモア・ザ・サブマリナー"></p><div class="UtaNew">ネイモア・ザ・サブマリナーってどんなマーベルヒーロー？</div><br><div class="EigaNew">2021/8/01</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://marvel.fandom.com/wiki/Namor_McKenzie_(Earth-616)">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="KateBishop.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="ComicKateBishop.jpg" alt="ケイト・ビショップ"> </p><div class="UtaNew">ケイト・ビショップってどんなマーベルヒーロー？</div><br><div class="EigaNew">2021/7/22</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://comicstore.marvel.com/Hawkeye-Kate-Bishop-Vol-3-Family-Reunion/digital-comic/48027">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="CassieLangCom.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="CassieLangCom.jpg" alt="キャシー・ラング"> </p><div class="UtaNew">キャシー・ラングってどんなマーベルヒーロー？</div><br><div class="EigaNew">2021/7/19</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://comicvine.gamespot.com/cassie-lang/4005-40516/">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="ShangChi.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="MasterofKungFu.jpg" alt="シャン・チー"> </p><div class="UtaNew">シャン・チー（シャンチー）ってどんなマーベルヒーロー？</div><br><div class="EigaNew">2021/7/17</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://marvel.fandom.com/wiki/Shang-Chi_(Earth-616)">画像出典</a></div></div>'
      +'<div class="Itemlists"><a href="ElectricalParadeDreamlights2020Quiz.html"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicture" src="ElectricalPatTDL.jpg" alt="エレクトリカルパレード"></p><div class="UtaNew">エレクトリカルパレードで流れる曲を全て知っていますか？</div><br><div class="EigaNew">歌手：2021/7/11</div></div></a>'
      +'<div class="Gazoushutten"><a href="https://www.tokyodisneyresort.jp/tdl/show/detail/913/">画像出典</a></div></div>';
      }
  YouT++;
     }       
    }

window.addEventListener('scroll', youtube_defer);






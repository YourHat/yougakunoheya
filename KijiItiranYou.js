var KJ = [
    ["BobIgerPic.jpg","ボブ・アイガー","https://www.thewaltdisneycompany.com/disney-spotlights-comprehensive-direct-to-consumer-strategy-at-2019-investor-day/","BobIger.html","「ボブ・アイガー」ディズニーを衰退から救った6代目CEO","2019/12/25"],
    ["CassieLangCom.jpg","キャシー・ラング","https://comicvine.gamespot.com/cassie-lang/4005-40516/","CassieLang.html","キャシー・ラングってどんなマーベルヒーロー？","2021/7/19"],
    ["ElectricalPatTDL.jpg","エレクトリカルパレード","https://www.tokyodisneyresort.jp/tdl/show/detail/913/","ElectricalParadeDreamlights2020Quiz.html","エレクトリカルパレードで流れる曲を全て知っていますか？","2021/07/11"],

    ["Castle.JPG","感動するCM","","DisneyCommercials.html","世界中のディズニーの感動するCMを集めてみた！","2019/10/13"],

    ["ComicKateBishop.jpg","ケイト・ビショップ","https://comicstore.marvel.com/Hawkeye-Kate-Bishop-Vol-3-Family-Reunion/digital-comic/48027","KateBishop.html","ケイト・ビショップってどんなマーベルヒーロー？","2021/7/22"],
    ["IronheartWiki.jpg","アイアンハート","https://en.wikipedia.org/wiki/Ironheart_(character)","IronHeart.html","アイアンハートってどんなマーベルヒーロー？","2021/8/02"],

    ["IronManInSpace.jpg","アイアンマンの葬式","https://theriver.jp/russo-endgame-mcu/","AvengersEndgameTheKid.html","アベンジャーズ・エンドゲームでアイアンマンの葬式にいた子供は一体誰？","2019/7/14"],
    ["LinManuelMiranda.jpg","リン・マニュエル・ミランダ","https://www.hollywoodreporter.com/news/lin-manuel-miranda-returning-broadway-1219692","LinManuelMiranda.html","「リン・マニュエル・ミランダ」ディズニーの次の世代の音楽を担う作曲家","2020/01/05"],

    ["MasterofKungFu.jpg","シャン・チー","https://marvel.fandom.com/wiki/Shang-Chi_(Earth-616)","ShangChi.html","シャン・チー（シャンチー）ってどんなマーベルヒーロー？","2021/7/17"],
    ["MovieHercules.jpg","ヘラクレス","https://www.shopdisney.com/hercules-dvd-1363735","LiveActionHercules.html","Hercules（ヘラクレス）の実写版が製作予定！？","2019/7/28"],
    ["MCUPhase4.jpg","アベンジャーズ・エンドゲーム","hhttps://screenrant.com/mcu-phase-4-movies-in-development/","AfterAvengers4.html","アベンジャーズ・エンドゲームの後はどうなるの？","2019/9/08"],
    ["NamorComic.jpg","ネイモア・ザ・サブマリナー","https://marvel.fandom.com/wiki/Namor_McKenzie_(Earth-616)","Namor.html","ネイモア・ザ・サブマリナーってどんなマーベルヒーロー？","2021/8/01"],

    ["TheLittleMermaidPic2.jpg","リトル・マーメイド","https://www.latimes.com/entertainment/movies/la-et-mn-little-mermaid-ariel-halle-bailey-20190703-story.html","TheLittleMermaidLiveAction.html","実写版リトルマーメイドでわかっている事","2019/9/22"],



];

var Kiji = document.getElementById("KijiDayo");
var Yomuu = document.getElementById("Yomu");
var i=0;
var e=0;

function Yomikomi(){
    if(e+5 <= KJ.length){
for(var i=e;i<e+5;i++){
    Kiji.insertAdjacentHTML('beforeend','<div class="Itemlists"><a href="'+KJ[i][3]+'"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicNew" src="'+KJ[i][0]+'" alt="'+KJ[i][1]+'"> </p><div class="Uta">'+KJ[i][4]+'</div><br><div class="Eiga">'+KJ[i][5]+'</div></div></a><div class="Gazoushutten"><a href="'+KJ[i][2]+'">画像出典</a></div></div>');
};
e = e+5;
return e;
}else if(e+4 <= KJ.length){
    for(var i=e;i<e+4;i++){
        Kiji.insertAdjacentHTML('beforeend','<div class="Itemlists"><a href="'+KJ[i][3]+'"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicNew" src="'+KJ[i][0]+'" alt="'+KJ[i][1]+'"> </p><div class="Uta">'+KJ[i][4]+'</div><br><div class="Eiga">'+KJ[i][5]+'</div></div></a><div class="Gazoushutten"><a href="'+KJ[i][2]+'">画像出典</a></div></div>');
    };
    e = e+4;
    return e;
    }else if(e+3 <= KJ.length){
        for(var i=e;i<e+3;i++){
            Kiji.insertAdjacentHTML('beforeend','<div class="Itemlists"><a href="'+KJ[i][3]+'"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicNew" src="'+KJ[i][0]+'" alt="'+KJ[i][1]+'"> </p><div class="Uta">'+KJ[i][4]+'</div><br><div class="Eiga">'+KJ[i][5]+'</div></div></a><div class="Gazoushutten"><a href="'+KJ[i][2]+'">画像出典</a></div></div>');
        };
        e = e+3;
        return e;
        }else if(e+2 <= KJ.length){
            for(var i=e;i<e+2;i++){
                Kiji.insertAdjacentHTML('beforeend','<div class="Itemlists"><a href="'+KJ[i][3]+'"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicNew" src="'+KJ[i][0]+'" alt="'+KJ[i][1]+'"> </p><div class="Uta">'+KJ[i][4]+'</div><br><div class="Eiga">'+KJ[i][5]+'</div></div></a><div class="Gazoushutten"><a href="'+KJ[i][2]+'">画像出典</a></div></div>');
            };
            e = e+2;
            return e;
            }else  if(e+1 <= KJ.length){
                for(var i=e;i<e+1;i++){
                    Kiji.insertAdjacentHTML('beforeend','<div class="Itemlists"><a href="'+KJ[i][3]+'"><div class="kijikoko"><p class="RefGazou"><img class="kijiPicNew" src="'+KJ[i][0]+'" alt="'+KJ[i][1]+'"> </p><div class="Uta">'+KJ[i][4]+'</div><br><div class="Eiga">'+KJ[i][5]+'</div></div></a><div class="Gazoushutten"><a href="'+KJ[i][2]+'">画像出典</a></div></div>');
                };
                e = e+1;
                return e;
                }else{
 Yomuu.innerHTML=" ";
}
};
window.onload=Yomikomi();

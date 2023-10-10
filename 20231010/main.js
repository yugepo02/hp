//jQueryの練習
console.log("jQueryの練習だ");

//jQueryエントリーポイント
$(document).ready(()=>{
    console.log("Document準備完了");
    //Dom操作
    $("#target").text("サザe");
    //Domで要素に追加<最後>
    $("#isono").append("<li>ワカメ</li>");
    $("#isono").append("<li>多羅尾</li>")
    $("#isono").append("<li>波平</li>")
    $("#isono").append("<li>カツオ</li>")
    $("#isono").append("<li>🚢</li>")
    $("#isono").append("<li>マスオ</li>")
    //Domで要素に追加（先頭）
    $("#isono").prepend("<li>サザエ</li>")
    $("#hint").text("水死体")
    //ポケモンリスト
    $("#pokemon").append("<li>リザード</li>")
    $("#pokemon").append("<li>リザードン</li>")
    $("#pokemon").append("<li>フシギダネ</li>")
    $("#pokemon").append("<li>フシギソウ</li>")
    $("#pokemon").append("<li>フシギバナ</li>")
    $("#pokemon").append("<li>ゼニガメ</li>")
    $("#pokemon").append("<li>カメール</li>")
    $("#pokemon").append("<li>カメックス</li>")
    $("#pokemon").append("<li>コラッタ</li>")
    $("#pokemon").append("<li>ラッタ</li>")
    $("#pokemon").append("<li>ポッポ</li>")
    $("#pokemon").append("<li>ピジョン</li>")
    $("#pokemon").append("<li>ピジョット</li>")
    $("#pokemon").append("<li>キャタピー</li>")
    $("#pokemon").append("<li>トランセル</li>")
    $("#pokemon").append("<li>バタフリー</li>")
    $("#pokemon").append("<li>ビートル</li>")
    $("#pokemon").append("<li>コクーン</li>")
    $("#pokemon").append("<li>スピアー</li>")
    $("#pokemon").append("<li>イシツブテ</li>")
    $("#pokemon").append("<li>ゴローン</li>")
    $("#pokemon").append("<li>ゴローニャ</li>")
    $("#pokemon").append("<li>イワーク</li>")
    $("#pokemon").append("<li>ハガネール</li>")
    $("#pokemon").append("<li>ピィ</li>")
    $("#pokemon").append("<li>ピッピ</li>")
    $("#pokemon").append("<li>ピクシー</li>")
});
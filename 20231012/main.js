console.log("aaa")
click_kaisuu=0
let tomas=`<img src="./to-masu.png" width=50px>`
let tomas2=`<img src="./to-masu2.jpg" width=50px>`
let tomas3=`<img src="./to-masu3.jpg" width=50px>`
//""の中身は画像をおきたいところのタグ名を入れる
//エントリーポイント
$("document").ready(()=>{
    console.log("ドキュメント準備OK");
});
//ボタンのクリックイベント
$("#my_btn").click(()=>{
    
    click_kaisuu+=1
    if(click_kaisuu >=6)
    $("h3").append(tomas2)
    console.log("やあ")
    $("h3").append(tomas);
    console.log("クリックした")
        console.log("機関車が現れた")
         if(click_kaisuu>=10)
        $("h3").append(tomas3);
})
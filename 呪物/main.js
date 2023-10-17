//let tomas=`<img src="./tomasu_1.png" width=50px>`
//let tomas2=`<img src="./tomasu_2.jpg" width=50px>`
//let tomas3=`<img src="./tomasu_3.jpg" width=50px>`
  
    
let n=0;
    $("#btn").click(()=>{
       
        
        n = Math.floor(Math.random() * 3+1);
//画像のパスを作
console.log(n);
        //let path =;

	//画像を変えてみる
	$("#imageAre").attr("src","./tomasu_"+n+".png")
    });

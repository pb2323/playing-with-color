function hexaToRGB(code){
    let obj={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"A":10,"B":11,"C":12,"D":13,"E":14,"F":15};
    let red=obj[code[0]]*16+obj[code[1]];
    let green=obj[code[2]]*16+obj[code[3]];
    let blue=obj[code[4]]*16+obj[code[5]];
    $("#result").text(`RGB(${red},${green},${blue})`);
}
function RGBToHexa(r,g,b){
    let obj={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"};
    let red=Number(r)
    let green=Number(g)
    let blue=Number(b)
    let f1red=obj[Math.floor(red/16)];
    let f1blue=obj[Math.floor(blue/16)];
    let f1green=obj[Math.floor(green/16)];
    let f2red=obj[Math.floor(((red/16)-Math.floor(red/16))*16)]
    let f2green=obj[Math.floor(((green/16)-Math.floor(green/16))*16)]
    let f2blue=obj[Math.floor(((blue/16)-Math.floor(blue/16))*16)]
    let final=f1red+f2red+f1green+f2green+f1blue+f2blue;
    $("#result").text(`#${final}`);
}
function cli(n){
    if(n==1){
        let r=$("input[name='red']").val();
        let g=$("input[name='green']").val();
        let b=$("input[name='blue']").val();
        RGBToHexa(r,g,b);
    }
    else{
        let hexa=$("input[type='text']").val();
        hexaToRGB(hexa);
    }
}
function check(n){
    if(n==1)
    {
        $("#sec").css("display","none");
        $("#ini").css("display","block");
        $("input[type='number']").prop('required',true);
        $("input[type='text']").prop('required',false);
    }
    else
    {
        $("#ini").css("display","none");
        $("#sec").css("display","block");
        $("input[type='number']").prop('required',false);
        $("input[type='text']").prop('required',true);
    }
}
function c(n){
    console.log()
}
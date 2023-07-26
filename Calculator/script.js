var exp=new Array();
var ans;
var arr=document.getElementsByClassName("key");
var ans_display=document.getElementById("ans");
var exp_display=document.getElementById("expression");
var is_printed=false;
function input(){
    var x=this.getAttribute("data-value");
    // var i=parseInt(this.getAttribute("data-index"));
    // arr[i]["background-color"]="cyan";
    // setTimeout(resetColor,100);
    if(is_printed){
        exp.splice(0,exp.length);
        is_printed=false;
    }
    if(x=="="){
        if(exp.length==0){
            ans_display.innerText=ans;
        }
        else{
            try {
                ans = eval(exp.join(""));
            }
            catch (ex) {
                ans = ex;
            }
            ans_display.innerText = ans;
            is_printed = true;
        }
    }
    else if(x=="ac"){
        ans_display.innerText="";
        exp_display.innerText="";
        exp.splice(0,exp.length);
        ans="";
    }
    else if(x=="cancel"){
        exp.pop();
        exp_display.innerText=exp.join("");
    }
    else{
        exp.push(x);
        exp_display.innerText=exp.join("");
    }
    if(exp.length==0){
        ans_display.innerText=ans;
    }
    else{
        try {
            ans = eval(exp.join(""));
        }
        catch (ex) {
            ans = ex;
        }
        ans_display.innerText = ans;
        // is_printed = true;
    }
}

function resetColor(){
    var i=this.getAttribute("data-index");
    arr[i]["background-color"]="#246067";
}

for(var i=0;i<arr.length;i++){
    arr[i].addEventListener('click',input);
    // arr[i].addEventListener('click',background);
}
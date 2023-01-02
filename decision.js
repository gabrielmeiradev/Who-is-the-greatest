function classificar(){
    var a2 = document.getElementById("f1").value,
        b2 = document.getElementById("f2").value,
        c2 = document.getElementById("f3").value;

    let o  = document.getElementById("order");
    let oa = document.getElementById("ordera");

    var a = parseInt(a2),
        b = parseInt(b2),
        c = parseInt(c2);

    var answer;
    var answer2;

    var w = document.getElementById("bg");

    if (a2.length < 1 || b2.length < 1 || c2.length < 1 || a == b || b == c || a == c){
        w.style.backgroundColor = "rgb(255, 208, 0)";
        w.innerHTML = "🤓 Fill all the fields with diferent numbers";
    }
    else{
        w.style.backgroundColor = "rgba(255, 255, 255, 1)";
        w.innerHTML = "🌳 Decision tree algorithm";
    if (a<b){
        if (a<c){
            if(b<c){
             answer = "A < B < C";
             answer2 = a + " < " + b + " < " + c;   
            }
            else if(b>c){
             answer = "A < C < B";
             answer2 = a + " < " + c + " < " + b;
            }
        }
        else if(a>c){
            answer = "C < A < B";
            answer2 = c + " < " + a + " < " + b;
        }
    }
    else if(b<a){
        if(a<c){
            answer = "B < A < C";
            answer2 = b + " < " + a + " < " + c;
        }
        else if(a>c){
            if(b<c){
                answer2 = "B < C < A";
                answer2 = b + " < " + c + " < " + a;
            }
            else if(b>c){
                answer = "C < B < A";
                answer2 = c + " < " + b + " < " + a;
            }
        }
    }
    
    oa.innerHTML = answer2
    o.innerHTML = answer;
}

}
function getValue() {
    var p_str = document.getElementById("p").value;
    var p = parseInt(p_str);
    console.log(p);
    var q_str = document.getElementById("q").value;
    var q = parseInt(q_str);
    pqformel (p, q);
  }
  
  
function pqformel(p, q){

    var del1 = p * -0.5;
    var del2 = Math.pow(p * 0.5, 2) -q;
    
    var svar1 = del1 + Math.sqrt(del2);
    var svar2 = del1 - Math.sqrt(del2);
    
    document.getElementById("svar1").innerHTML=svar1;
    document.getElementById("svar2").innerHTML=svar2;
    }
    

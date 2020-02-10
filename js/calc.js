function sum(a, b) {
    return a + b;
  }


  function pqformel(p, q){

    var del1 = p * -0.5;
    var del2 = Math.pow(p * 0.5, 2) -q;
    
    var svar1 = del1 + Math.sqrt(del2);
    var svar2 = del1 - Math.sqrt(del2);
    
    return "svar 1 = " + svar1 + " svar 2 = " + svar2;
    }

  module.exports = { sum, pqformel };
  
function summation(number_A,number_B){
    var result = document.getElementById("result")

   if(number_A < 0 && number_B < 0){
     alert("Vui lòng nhập số lớn hơn 0")  
   }else{
    result.value = Number(number_A) + Number(number_B);
   }
}
function subtraction(number_A,number_B){
     var result = document.getElementById("result")
    
   if(number_A < 0 && number_B < 0){
     alert("Vui lòng nhập số lớn hơn 0")  
   }else{
    result.value = Number(number_A) - Number(number_B);
   }
}
function multiplication(number_A,number_B){
    var result = document.getElementById("result")
    
    if(number_A < 0 && number_B < 0){
      alert("Vui lòng nhập số lớn hơn 0")  
    }else{
     result.value = Number(number_A) * Number(number_B);
    }
}
function division(number_A,number_B){
    var result = document.getElementById("result")
    
    if(number_A < 0 && number_B < 0){
      alert("Vui lòng nhập số lớn hơn 0")  
    }else{
     result.value = Number(number_A) / Number(number_B);
    }
}
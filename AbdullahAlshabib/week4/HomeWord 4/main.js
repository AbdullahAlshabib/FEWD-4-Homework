function Number0() {
    
    
    var inputNumber = document.getElementById("Number").value;
    var result;
    
    if (inputNumber % 3 === 0) 
     {
        result = "Pling";
    }
    
        else if (inputNumber % 5 == 0 )  
        {
        result = "Plang";
    }
    
        else if (inputNumber % 7 == 0 )  
        {
        result = "Plong";
    }
    
        else {
        result =+ inputNumber;
      
    }
    
  document.getElementById("result").innerHTML =  result; 
  
  console.log(result);

}
  


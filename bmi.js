const form= document.querySelector('form')

function f1(obj){
    obj.height.innerValue=" ";
    obj.weight.innerValue=" ";
    obj.bmi.innerValue=" ";
  }
    
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#results');
    const clear= document.querySelector('.clear');
    

    if(height<0 || isNaN(height) || height===''){
        result.innerHTML = 'Please enter a valid Data';
        return;
    }
    else if(weight<0 || isNaN(weight) || weight===''){

        result.innerHTML = 'Please enter a valid Data';
        return;
    }
    else{
        const bmi= (weight / ((height*height)/ 10000)).toFixed(2);
        //show result
        result.innerHTML = bmi;
        return;
    }
}

);
//   function f1(obj){
//     obj.height.innerValue="";
//     obj.weight.innerValue="";
//     obj.bmi.innerValue="";


//   }
    




// function f1(obj){
//     obj.height.innerValue=" ";
//     obj.weight.innerValue=" ";
//     obj.bmi.innerValue=" ";


//   }
   

// function calculateBMI() {
//     var heightInput = document.getElementById("height");
//     var weightInput = document.getElementById("weight");
//     var resultDiv = document.getElementById("results");
  
//     var height = parseFloat(heightInput.value);
//     var weight = parseFloat(weightInput.value);
  
//     if (isNaN(height) || isNaN(weight)) {
//       resultDiv.innerHTML = "Please enter valid height and weight.";
//       return;
//     }
  
//     var bmi = weight / ((height / 100) ** 2);
//     var category = "";
  
//     if (bmi < 18.5) {
//       category = "Underweight";
//     } else if (bmi < 25) {
//       category = "Normal weight";
//     } else if (bmi < 30) {
//       category = "Overweight";
//     } else {
//       category = "Obese";
//     }
  
//     resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
//   }
//   //@codewithcurious.com
  
//   function calculateBMI() {
//     var heightInput = document.getElementById("height");
//     var weightInput = document.getElementById("weight");
//     var resultDiv = document.getElementById("result");
  
//     var height = parseFloat(heightInput.value);
//     var weight = parseFloat(weightInput.value);
  
//     if (isNaN(height) || isNaN(weight)) {
//       resultDiv.innerHTML = "Please enter valid height and weight.";
//       return;
//     }
  
//     var bmi = weight / ((height / 100) ** 2);
//     var category = "";
  
//     if (bmi < 18.5) {
//       category = "Underweight";
//     } else if (bmi < 25) {
//       category = "Normal weight";
//     } else if (bmi < 30) {
//       category = "Overweight";
//     } else {
//       category = "Obese";
//     }
  
//     resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
//   }
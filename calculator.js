const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	//extended:true can be used
    //urlencoded is for form data 
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
	
var result = num1 + num2 ;
	
res.send("The result after addition is : " + result);
});

/* .......BMI Calculator.......*/
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    let wt = Number( req.body.wt);
    let ht = Number( req.body.ht);

    let result = wt/(ht*ht);
    Math.round(result);
    res.send("Your BMI is: "+result+" kg/m^2");
    //res.send("BMI Calculator is active");
});
/**.............. */

app.listen(3000, function(){
console.log("server is running on port 3000");
})


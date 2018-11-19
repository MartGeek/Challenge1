let result = document.getElementById('result');
let button = document.getElementById('priceChecker');
button.onclick = () =>{
	let input= document.querySelectorAll(".enteredNumber");
	let totalQuotes =0; 
	for (let item of input){
		let newValue = parseInt(item.value);
		totalQuotes+=newValue;
		if (item.value ==="" || newValue <=0){
		result.innerHTML= `Enter a valid weight of the courier please`
		return false;
	};
	};
	
	
		result.innerHTML= `The price of delivering the courier is ${totalQuotes*1000} Rwf`
	};



let addParcel= document.getElementById('addingChecker');
addParcel.onclick =()=>{
let div= document.createElement("div");
let price = document.getElementById("pricing");
div.innerHTML = `<div class='textbox'> 
				<input type="text" name="" placeholder="Describe the courier here please">

			</div>
			<span>From:</span>
			<div class="textbox">
				<input type="country" name="" placeholder= "Type the collection location">
			</div>
			<span>To:</span>
			<div class="textbox">
				<input type="text" name="" placeholder="Type the delivery location">
			</div>
			<div class='textbox'>
				<input type="number" name="" placeholder='Enter weight here' class ='enteredNumber'>
			</div>		

`
price.appendChild(div);
};


const toggleVertBar= ()=> {
	document.getElementById('vertical_Nav').classList.toggle('active');
}



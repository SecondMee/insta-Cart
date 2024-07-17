/*// Step 1: Select all buttons
const buttons = document.querySelectorAll('button');

// Step 2: Attach event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Your event handling code here
	const p =this.parentNode;
	console.log(p);
        //console.log(`Button ${button.textContent} clicked.`);
        // Add more functionality as needed
    });
});
*/

/*const buttons = document.querySelectorAll('button');

let cartPic = false;

buttons.forEach(button =>{
	button.addEventListener('click',function(){
		const parent = this.parentNode;	
		console.log(parent);
		console.log(parent.getAttribute('id').charAt(1));
		const id = parent.getAttribute('id').charAt(1);
		parent.childNodes[8].innerHTML = parseInt(parent.childNodes[8].innerHTML)+1;
		console.log(parent.childNodes);
		console.log(parent.parentNode.childNodes);
		console.log(parent.childNodes[2]);
	});
});*/

const minusButtons = document.getElementsByClassName('minusBtn');
for(let i=0; i<minusButtons.length; i++){
	minusButtons[i].addEventListener('click', function(){
		const parent = this.parentNode;
		/*console.log(parent);
		console.log(parent.childNodes);
		console.log(parent.parentNode.childNodes);
		console.log(parent.parentNode);
		console.log("innerHTML value issssss: "+ parent.parentNode.childNodes[5].innerHTML);
		console.log("textcontent value issssss: "+ parent.parentNode.childNodes[5].textContent.substr(7));
		console.log("quantity : "+parent.childNodes[3].value);*/
		let count = parseInt(parent.childNodes[3].value);
		console.log("counttttttttttttttting");
		console.log(count);
		console.log(count=='1');
		if((count-1)>0){
			parent.childNodes[3].value = count-1;
			swap(this.parentNode.childNodes[3].getAttribute('id'));
			computeTotal();
		}
		else if(count=='1'){
			parent.childNodes[3].value = count-1;
			swap(this.parentNode.childNodes[3].getAttribute('id'));
			document.getElementById("cart-image").innerHTML='';
			document.getElementById("cart-total").innerHTML='';
			computeTotal();
		}
	});
}

const plusButtons = document.getElementsByClassName('plusBtn');
for(let i =0; i <plusButtons.length; i++){
	plusButtons[i].addEventListener('click',function(){
		console.log("checkkkkk carttttt");
		console.log("none: ");
		console.log(document.getElementById("cart-head").style.display=='none');
		console.log("on: ");
		console.log(document.getElementById("cart-head").style.display!='none');
		const parent = this.parentNode;
		console.log(parent);
		let count = parseInt(parent.childNodes[3].value);
		if(count<100){
			parent.childNodes[3].value = count+1;
			computeTotal();
		}
		swap(this.parentNode.childNodes[3].getAttribute('id'));
	});
}

function computeTotal(){	
	//window.scrollTo({top:0,behavior:"smooth"});
	/*const divTag = document.querySelector(".cart-container");
	const children= divTag.querySelectorAll('*');
	children.forEach(ele => {divTag.removeChild(ele)});	
	console.log(divTag);*/

	//document.getElementById('cart-head').style.display = 'flex';
	
	const totalCard = document.getElementById("cart-image");
	totalCard.innerHTML='';

	const totalhead = document.getElementById("cart-head");
	const totalCount = document.getElementById("cart-total");

	let fruitPrice = 0n;
	
	const allFruits = document.getElementsByClassName("product");
	const allFruitQuantity = document.getElementsByClassName("textBox");
	console.log("fruitsssssss312");
	console.log(allFruits);

	console.log(allFruits[0].childNodes[5].textContent);
	let html='';
	let html3='';
	let productCount=0;
	for(let i=0; i<allFruits.length; i++){
		const str = allFruits[i].childNodes[5].textContent;
		/*console.log(str);
		console.log(str.substr(7));*/
		const quantity = allFruitQuantity[i].value;
		/*console.log("nodessssssssssssssss");
		console.log(allFruits[i].getAttribute('id').substr(1));*/
		let fruitId = allFruits[i].getAttribute('id').substr(1);
		if(quantity>0){
			productCount++;
			console.log("quant   :"+quantity);
			const img = allFruits[i].childNodes[3];
			const imgCart = document.createElement("img");
			imgCart.src = img.src;

			html+=`
				<div class= "checkout">
					<img src="${img.src}">
					<p>Quantity:</p>
					<p>Price:</p>
					<p>${allFruits[i].childNodes[1].textContent}</p>
					<div class= "quantity">
						<button class="minusBtn">-</button>
						<input type="text" class="textBoxC" id="c${fruitId}" value=${allFruits[i].childNodes[7].childNodes[3].value}>
						<button class="plusBtn">+</button>
					</div>
					<p>${allFruits[i].childNodes[5].textContent.substr(7)}</p>
				</div>
			`;
			fruitPrice += BigInt(allFruits[i].childNodes[7].childNodes[3].value)*BigInt(allFruits[i].childNodes[5].textContent.substr(7));

			//const totalCard = document.getElementById("cartTotal");
			//console.log(totalCard);
			//totalCard.appendChild(imgCart);
		}
	}

	//<input type="text class="checkoutIn" value=${allFruits[i].childNodes[7].childNodes[3].value}>


	html3+=`
		<p>Total: ${fruitPrice}</p>
	`;
	
	totalCard.innerHTML=html;
	totalCount.innerHTML=html3;
	/*const cart = document.getElementById('cartTotal');
	cart.scrollTop=cart.scrollHeight;*/
	check();
	console.log("checkkkkkkkkkkkkkkkkkkking");
	    //console.log(window.getComputedStyle("cartHead").getPropertyValue('display'));
	console.log("--");
	const ele5 = document.getElementById("cart-head");
	/*console.log("ele");
	console.log(window.getComputedStyle(ele5).getPropertyValue('display'));
	console.log("ele none");
	console.log(window.getComputedStyle(ele5).getPropertyValue('display')=='none');
	console.log(document.getElementById("cart-head").style.display=='none');
	console.log(allFruits.length=='0');*/
	console.log(productCount);
	//console.log(productCount=='0');
	//console.log(window.getComputedStyle(ele5).getPropertyValue('display')=='none'||productCount=='0');
	if(window.getComputedStyle(ele5).getPropertyValue('display')=='none'||productCount=='0')
		hide();

}

function check(){
	//console.log("checkout");
	const all = document.querySelectorAll('.checkout');
	/*console.log(all);
	for (let i = 0; i < all[0].childNodes.length; i++) {
    		console.log(all[0].childNodes[i]);
	}
	console.log("divvv check");
	const all2 = document.querySelectorAll('.checkout .quantity');
	console.log(all2);
	for (let i = 0; i < all2.length; i++) {
    		console.log(all2[i]);
	}
	console.log("--------------");
	console.log(all2[0].childNodes);
	console.log(all2[0].childNodes[1]);
	console.log(all2[0].childNodes[5]);
	console.log(all2[0].childNodes[3].value);
	*/
	const checkOutMinus = document.querySelectorAll('.checkout .quantity .minusBtn');
	const checkOutPlus  = document.querySelectorAll('.checkout .quantity .plusBtn');

	checkOutMinus.forEach(btn=>{
		btn.addEventListener('click',function(){
			const textInput = this.parentNode.childNodes[3];
			let count = parseInt(textInput.value);

			if((count-1)>0){
				textInput.value = count-1;
				swap(this.parentNode.childNodes[3].getAttribute('id'));
				computeTotal();
			}
			else if(count=='1'){
				textInput.value = count-1;
				swap(this.parentNode.childNodes[3].getAttribute('id'));
				document.getElementById("cart-image").innerHTML='';
				document.getElementById("cart-total").innerHTML='';
				computeTotal();
			}

		});
	});
	
	checkOutPlus.forEach(btn=>{
		btn.addEventListener('click',function(){
			const textInput = this.parentNode.childNodes[3];
			let count = parseInt(textInput.value);

			if(count<100){
				textInput.value = count+1;
				swap(this.parentNode.childNodes[3].getAttribute('id'));
				computeTotal();
			}

		});

	});
	
	
	const checkOutText  = document.querySelectorAll('.checkout .quantity .textBoxC');
	console.log(checkOutText);
	checkOutText.forEach(txt =>{
		txt.addEventListener('keydown',checkBack2);
	});
}

function swap(str){
	const checkOutText = document.getElementById(`c${str.substr(1)}`);
	const cartText = document.getElementById(`a${str.substr(1)}`);
	console.log("swapppppppppppppp");
	console.log(cartText.value);
	console.log(checkOutText.value);
	if(str.charAt(0)=='c'){
		cartText.value = checkOutText.value;
	}else{
		checkOutText.value = cartText.value;
	}
}


//document.getElementById('cartBtn').addEventListener('click',computeTotal);

function inputQuant(event){
		event.preventDefault()
		/*console.log(event.key);
		let key = event.key;
		if(!valid(key)){
			event.preventDefault()	
		}
		else{
			let num = this.value;
			console.log(num);
			console.log(event);
			console.log(event.key);	
			if(num==0){
				event.preventDefault();
				this.value=event.key;
			}
			else{
				num += event.key;
			}
			if(parseInt(num)>100)
				event.preventDefault();
			
			event.preventDefault();
		}*/
}


function checkBack(event){
		/*
		if(event.key==='Backspace' && this.value.length==1){
			event.preventDefault();
			this.value=0;
		}*/
		event.preventDefault();
}

function checkBack2(event){
		event.preventDefault();
}


const allInputs= document.querySelectorAll('.textBox');
allInputs.forEach(txt =>{
	txt.addEventListener('keypress',inputQuant);

	txt.addEventListener('keydown',checkBack);

});

/*document.getElementById('deleteBtn').addEventListener('click',function(){
	document.getElementById("cart-head").style.display='none';
	document.getElementById("cart-image").innerHTML='';
	document.getElementById("cart-total").innerHTML='';
});
*/

function itemCount(){
	const allFruits = document.getElementsByClassName("product");
	const allFruitQuantity = document.getElementsByClassName("textBox");
	let productCount=0;
	for(let i=0; i<allFruits.length; i++){
		const str = allFruits[i].childNodes[5].textContent;
		const quantity = allFruitQuantity[i].value;
		if(quantity>0){
			productCount++;
		}
	}
	return productCount>0;
}

document.getElementById('cartBtn').addEventListener('click',function(){

	
	const ele = document.getElementById("cart-head");
	console.log("display:");
	//console.log(itemCount());
	console.log(window.getComputedStyle(ele).getPropertyValue('display')=='none');
	if(window.getComputedStyle(ele).getPropertyValue('display')=='none'&&itemCount()){
		unhide();
		//cartPic=true;
	}else{
		/*document.getElementById("cart-head").style.display='none';
		document.getElementById("cart-image").innerHTML='';
		document.getElementById("cart-total").innerHTML='';*/
		hide();
		//cartPic=false;	
	}
});

function hide(){
	document.getElementById("cart-head").style.display='none';
	document.getElementById("cart-image").style.display='none';
	document.getElementById("cart-total").style.display='none';

}
function unhide(){
	document.getElementById("cart-head").style.display='flex';
	document.getElementById("cart-image").style.display='flex';
	document.getElementById("cart-total").style.display='block';
}


/*const cartInput = document.querySelectorAll('.checkoutin');
console.log("cartinterprewrwerwe");
console.log(cartInput);
cartInput.forEach(text =>{
	text.addEventListener('keypress',inputQuant);

	text.addEventListener('keydown',checkBack);

});

document.addEventListener('DOMContentLoaded', function() {
 	const a = document.querySelectorAll('.checkoutin');
	a.forEach(txt => {
		txt.addEventListener('mouseover',function(){
			console.log(hi);
		});
	});
});*/



/*(function(){
	const diff = document.querySelectorAll('.textBox');
	diff.forEach(btn => {
			btn.value=0;
			//console.log("this is the value  "  +btn.value);
	});
})();*/


function valid(num){
	return /^[0-9]$/.test(num);
}
let canceling = document.getElementsByClassName('cancelButton');
for (let button of canceling){
	button.onclick = ()=>{		
		let parent = button.parentNode.parentNode;
		let status = parent.children[4].innerHTML; 
		if (status ==="Not Delivered"){
		let grandParent = parent.parentNode; 

		grandParent.removeChild(parent);
		}else{
			alert("It can't bcause it is in process or delivered");
		};
	};
};
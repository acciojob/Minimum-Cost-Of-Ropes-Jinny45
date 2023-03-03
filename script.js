function minCostFormRope() {
  //your code here
	a.preventDefault();
	var inputElement = document.querySelector('input').value;
	var arr = inputElement.split(',');
	arr.sort(function(a,b){return a-b});
     while(arr.length>1){
		 var res = Number(arr[0]) + Number(arr[1]);
		 arr.splice(0,2);
		 aee.push(res);
		 cost+=res;
		 arr.sort(function(a,b){return a-b});
	 }
	document.getElementById("result").textContent = cost;
  
  
  
}  

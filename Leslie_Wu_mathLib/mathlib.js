module.exports = function (){
	return{
		add: function(num1,num2){
			console.log("Add:",num1+num2);
		},

		multiply: function(num1,num2){
			console.log("Multiply:",num1*num2);
		},

		square: function(num){
			console.log("Square:",num*num);
		},

		random: function(num1,num2){
			var rand = 0;
			if(num1>num2){
				rand = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
			}
			else if(num1 == num2){
				rand = num1;
			}
			else{
				rand = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
			}
			console.log("Random:",rand);
		}
	}
};

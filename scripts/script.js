(function(){
	// Создание обьекта Монстры
	var monstrs = {
		name : "",
		level : "",
		head : "",
		sayName : function(){
			console.log("My name is ", this.name);
		},
		shut : function(nameMonstr, shutName){
			console.log("------------------------------------------------------------------");
			console.log(this.name, " ", shutName, " ", nameMonstr.name);
			if((nameMonstr.head) > 0){
				nameMonstr.head -= this.uron;
				if(nameMonstr.head > 0)
					console.log(nameMonstr.name, " head is ", nameMonstr.head);
				else
					console.log("You killed ", nameMonstr.name);
			}
			else
				console.log(nameMonstr.name, " is dead");
		}
	};
	//Создание Котомонстров
	var catMonstrs = {
		level : 50,
		head : 50,
		uron : 5,
		scratch : function(nameMonstr){
			this.shut(nameMonstr, "scratch");
			}
		};	
	catMonstrs.__proto__ = monstrs;

	//Создание обьекта Птицемонстров
	var birdMonstrs = {
		level : 60,
		head : 60,
		uron : 3,
		bite : function(nameMonstr){
			this.shut(nameMonstr, "bite");
			}
		};	
	birdMonstrs.__proto__ = monstrs;
	//-----------------------------------
	var catMonstrs1 = {
		name : "catMonstrs1"
	};
	catMonstrs1.__proto__ = catMonstrs;
	//-----------------------------------
	var catMonstrs2 = {
		name : "catMonstrs2"
	};
	catMonstrs2.__proto__ = catMonstrs;
	//-----------------------------------
	var catMonstrs3 = {
		name : "catMonstrs3"
	};
	catMonstrs3.__proto__ = catMonstrs;
	//-----------------------------------
	var catMonstrs4 = {
		name : "catMonst"
	};
	catMonstrs4.__proto__ = catMonstrs;
	//-----------------------------------
	var  birdMonstrs1 = {
		name : "birdMonstrs1"
	};
	 birdMonstrs1.__proto__ =  birdMonstrs;
	 //-----------------------------------
	var  birdMonstrs2 = {
		name : "birdMonstrs2"
	};
	 birdMonstrs2.__proto__ =  birdMonstrs;
	 //-----------------------------------
	var  birdMonstrs3 = {
		name : " birdMonstrs3"
	};
	 birdMonstrs3.__proto__ =  birdMonstrs;
	 //-----------------------------------
	var  birdMonstrs4 = {
		name : " birdMonstrs4"
	};
	 birdMonstrs4.__proto__ =  birdMonstrs;
		
	catMonstrs1.scratch(catMonstrs4);
	catMonstrs2.scratch(catMonstrs4);
	catMonstrs3.scratch(catMonstrs4);
	birdMonstrs3.bite(catMonstrs4);
	catMonstrs1.scratch(catMonstrs4);
	catMonstrs2.scratch(catMonstrs4);
	catMonstrs3.scratch(catMonstrs4);
	birdMonstrs3.bite(catMonstrs4);
	catMonstrs1.scratch(catMonstrs4);
	catMonstrs2.scratch(catMonstrs4);
	catMonstrs3.scratch(catMonstrs4);
	birdMonstrs3.bite(catMonstrs4);
	catMonstrs1.scratch(catMonstrs4);
	catMonstrs2.scratch(catMonstrs4);
	
	console.log(catMonstrs1.head, " ", catMonstrs2.head, " ", catMonstrs3.head, " ", catMonstrs4.head);
	birdMonstrs3.sayName();
}());
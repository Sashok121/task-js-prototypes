(function(){
	// Создание обьекта Монстры
	function Monstrs() {
        this.name = "";       
    }
    Monstrs.prototype.head = "";
    Monstrs.prototype.uron = "";
    Monstrs.prototype.sayName = function(){
		console.log("My name is ", this.name);
	};
	Monstrs.prototype.shut = function(nameMonstr, shutName){
		console.log("------------------------------------------------------------------");
		console.log(this.name,  " ", shutName, " ", nameMonstr.name);
		if((nameMonstr.head) > 0){
			nameMonstr.heads(this.uron);
			if(nameMonstr.head > 0)
				console.log(nameMonstr.name, " head is ", nameMonstr.head);
			else
				console.log("You killed ", nameMonstr.name);
		}
		else
			console.log(nameMonstr.name, " is dead");
	};
	Monstrs.prototype.heads = function(uron){
		this.head -= uron;
	};
    
    
  
	function catMonstrs(obj){
		Monstrs.call(this);
		this.name = obj.name || "";		
	};	
	catMonstrs.prototype = Object.create(Monstrs.prototype);	
	catMonstrs.prototype.head = 50;
	catMonstrs.prototype.uron = 5;
	catMonstrs.prototype.scratch = function(nameMonstr){
			this.shut(nameMonstr, "scratch");
			};
	catMonstrs.prototype.constructor = catMonstrs;	
	
	//Создание обьекта Птицемонстров
	function birdMonstrs(obj){
		Monstrs.call(this);
		this.name = obj.name || "";		
	};	
	birdMonstrs.prototype = Object.create(Monstrs.prototype);	
	birdMonstrs.prototype.head = 60;
	birdMonstrs.prototype.uron = 3;
	birdMonstrs.prototype.bite = function(nameMonstr){
			this.shut(nameMonstr, "bite");
			};
	birdMonstrs.prototype.constructor = catMonstrs;
	//-----------------------------------
	var catMonstrs1 = new catMonstrs({name:"catMonstrs1"});
	
	//-----------------------------------
	var catMonstrs2 = new catMonstrs({name:"catMonstrs2"});
	
	
	
	//-----------------------------------
	var catMonstrs3 = new catMonstrs({name:"catMonstrs3"});
	//-----------------------------------
	var catMonstrs4 = new catMonstrs({name:"catMonstrs4"});
	//-----------------------------------
	var  birdMonstrs1 = new birdMonstrs({name:"birdMonstrs1"});
	 //-----------------------------------
	var  birdMonstrs2 = new birdMonstrs({name:"birdMonstrs2"});
	 //-----------------------------------
	var  birdMonstrs3 = new birdMonstrs({name:"birdMonstrs3"});
	 //-----------------------------------
	var  birdMonstrs4 = new birdMonstrs({name:"birdMonstrs4"});
		
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
	
	console.log(catMonstrs2);
	birdMonstrs3.sayName();
}());
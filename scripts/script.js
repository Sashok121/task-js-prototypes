(function(){
	// Создание обьекта Монстры
	var Monstrs = {
        name: "",
        head: "",
        uron:"",
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
    
  
	var catMonstrs = function(obj){
		this.name = obj.name || "";
		this.level = 50;
		this.head = 50;
		this.uron = 5;
		this.scratch = function(nameMonstr){
			this.shut(nameMonstr, "scratch");
			};
		};	
	catMonstrs.prototype = Monstrs;	

	//Создание обьекта Птицемонстров
	var birdMonstrs = function(obj){
		this.name = obj.name || "";
		this.level =60;
		this.head = 60;
		this.uron = 3;
		this.bite = function(nameMonstr){
			this.shut(nameMonstr, "bite");
			}
		};	
	birdMonstrs.prototype = Monstrs;
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
	
	
	birdMonstrs3.sayName();
}());
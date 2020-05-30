var budgCtr = (function() {

var Expense = function(id , description , value) {
    this.id = id,
    this.description = description,
    this.value = value
}


var Income = function(id , description , value) {
    this.id = id,
    this.description = description,
    this.value = value
}
 
var data = {
    allItems : {
        exp : [],
        inc : [],
    },
 totals = {
     exp : 0,
     inc : 0,
 } 

}

})();


var uiCtr = (function() {

var domStrings = {
    inputType : '.add__type',
    inputDescription : '.add__description',
    inputValue : '.add__value',
    inputBtn :'.add__btn', 
}

    return {
        getInput : function() {
            return {
             type : document.querySelector(domStrings.inputType).value ,
             description : document.querySelector(domStrings.inputDescription).value,
             value : document.querySelector(domStrings.inputValue).value 
        }
    },
        getdomStrings : function(){
            return  domStrings
        }


    }
        
    


})();

var Ctr = (function(uiCtr,budgCtr) {


    var addEventListners = function(){
        var Dom = uiCtr.getdomStrings()
        document.querySelector(Dom.inputBtn).addEventListener('click',ctrlAdd)
    
        document.addEventListener('keypress',function(event){
            if (event.which === 13 || event.which === 13 ) {
                ctrlAdd()
            }
        })
    }

  
    var ctrlAdd = function() {
 
        //get the input field
        var input = uiCtr.getInput()
        console.log(input)

        //add the item to the budget controller

        //display on ui

        //calculate budget

        //display budget
        
    }

    return{
        init : function() {
            addEventListners()
        }
    }

})(uiCtr,budgCtr);
Ctr.init()

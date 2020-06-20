class Game{
    constructor(){}

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
          
   
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }

    
    start(){
        if(gameState===0){
            form1=new Form1();
            form1.display();
        }
    }
   
    displaySurvey(){
        if(gameState===1){
            form2=new Form2();
            form2.display();
        }
    }
}
    

  

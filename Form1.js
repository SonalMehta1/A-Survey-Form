class Form1{
    constructor(){}

    display(){
        var nameLabel=createElement("h3");
        nameLabel.position(550,85);
        nameLabel.html("Name:");

        var input1=createInput("Name");
        input1.position(650,100);
        input1.size(250,30);

        var emailLabel=createElement("h3");
        emailLabel.position(550,145);
        emailLabel.html("Email-Id:");

        var input2=createInput("Email");
        input2.position(650,160);
        input2.size(250,30);

        var NextButton=createButton("Next");
        NextButton.position(800,220);
        NextButton.size(100,30);

        NextButton.mousePressed(function(){

            var name=input1.value();
            var email=input2.value();
            
            input1.hide();
            input2.hide();
            nameLabel.hide();
            emailLabel.hide();
            NextButton.hide();

            game.update(1);
            game.displaySurvey();

            if(userCount){
                user.updateUserCount(userCount+1);
                user.updateUserDetails(name,email);
                
            }
        })
  
    }

}
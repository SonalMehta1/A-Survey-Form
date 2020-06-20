class Form2{
    constructor(){}

    display(){
        var Q1=createElement("h2");
        Q1.position(360,80);
        Q1.html("Q1. Do you think we need to have free lunch meals in our school canteen "+"<br/>"+"or the kids who are very poor? ");
    
        var A1=createRadio();
        A1.style('font-size','25px');
        A1.option("Yes  ");
        A1.option("No");
        A1.position(400,180);
       
        var Q2=createElement("h2");
        Q2.position(360,280);
        Q2.html("Q2. Would you be willing to contribute a small amount every month "+"<br/>"+"for such a program? ");
       

        var A2=createRadio();
        A2.style("font-size",'25px');
        A2.option("Yes  ");
        A2.option("No");
        A2.position(400,380);

        var Q3=createElement("h2");
        Q3.position(360,480);
        Q3.html("Q3. How much per month would you be willing to pay? ");
    
        var A3=createRadio();
        A3.style("font-size",'25px');
        A3.option("100  ");
        A3.option("500  ");
        A3.option("1000  ");
        A3.option("More  ");
        A3.position(400,580);
  
        var greeting=createElement("h1");

        var SubmitButton=createButton("Submit");
        SubmitButton.position(800,650);
        SubmitButton.size(100,30);

        SubmitButton.mousePressed(function(){

            pushAnswers(A1.value(),A2.value(),A3.value());
        
            Q1.hide();
            Q2.hide();
            Q3.hide();
            A1.hide();
            A2.hide();
            A3.hide();
            SubmitButton.hide();

            greeting.html("Thanks for filling out the form!")
            greeting.position(450,350);
        })   
    }

}
function pushAnswers(a1,a2,a3){
    var Ans=[a1,a2,a3];
    user.updateVote(Ans);

}
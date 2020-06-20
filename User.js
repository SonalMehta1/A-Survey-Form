class User{
    constructor(){}

    getUserCount(){
        var userCountRef=database.ref("userCount");
        userCountRef.on("value",function(data){
            userCount=data.val();     
        });
    }
   
    updateUserCount(count){
        database.ref("/").update({
            userCount:count
        })    
    }

    updateUserDetails(name,email){
        var userIndex="User"+userCount;
       
        database.ref("Users/"+userIndex).update({
            name:name,
            email:email
        })
    }

    updateVote(Ans){
        var userIndex="User"+userCount;
       
        database.ref("Users/"+userIndex).update({
            Vote:Ans
        })
    }
}
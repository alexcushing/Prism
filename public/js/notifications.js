/**
 * Created by tyler on 3/9/16.
 */

//VERY simple way of adding the images to the profile
$(document).ready(function () {
    console.log("hello");

    $('#notifbut').click(function(){
        var notifications = "";
        var numNotif =0;
        for(var i=0; i < currentUser.notifications.length; i++) {
            notifications += currentUser.notifications[i].content + " " + currentUser.notifications[i].seen;
            console.log("/notification/"+ currentUser._id + "/" + currentUser.notifications[i]._id + "/seen");
            if(currentUser.notifications[i].seen === false){
                console.log(currentUser.notifications[i].seen);
                numNotif++;
                $.post("/notification/"+ currentUser._id + "/" + currentUser.notifications[i]._id + "/seen", {
                    success: function(data) {
                        console.log("success");
                    }
                });
            }
            console.log(numNotif);
        }

        console.log(notifications);

    });

});

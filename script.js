$(document).ready(function(){

    // Show after 1s
    setTimeout(showModal, 1000);

    function showModal(){
        $("#myModal").show();
    }

    $("#closeBtn").click(function(){
        $("#myModal").hide();
    })

})
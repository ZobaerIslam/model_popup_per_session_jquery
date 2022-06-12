$(document).ready(function(){

    // Show after 1s
    setTimeout(showModal, 1000);

    function showModal(){

        var is_already_show = sessionStorage.getItem('alreadyShow');
        if(is_already_show != 'already shown') {
            sessionStorage.setItem("alreadyShow", "already shown");
            $("#myModal").show();
        } else {
            console.log(is_already_show);
        }

    }

    $("#closeBtn").click(function(){
        $("#myModal").hide();
    })

})
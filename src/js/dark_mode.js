var switchStatus = false;
$("#togBtn").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        set_black_theme();// To verify
    }
    else {
       switchStatus = $(this).is(':checked');
       unset_blacktheme();// To verify
    }
});


function set_black_theme()
{
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
   // document.nodeValue.style.background ="black";
}

function  unset_blacktheme()
{
    document.body.style.background = "white";
    document.body.style.color = "black";
}
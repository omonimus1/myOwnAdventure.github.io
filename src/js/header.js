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
    alert("is set");
}

function  unset_blacktheme()
{
    alert("unset")
}
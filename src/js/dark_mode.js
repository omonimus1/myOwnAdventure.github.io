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
    colorLinks("black");
}



function  unset_blacktheme()
{
    document.body.style.background = "white";
    document.body.style.color = "black";
    colorLinks("blue");
}



function colorLinks(color_name)
{
    var links = document.getElementsByClassName("story_link");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = color_name;  
        }
    }  
}
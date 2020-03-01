
var switchStatus = false;
// 5 day after, expire
//Vue.$cookies.config('5d')

$("#togBtn").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        set_black_theme();// To verify
                
    }
    else {
        unset_blacktheme();// To verify
   
    }
});




function set_black_theme()
{    
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "black";
    colorLinks("black");
    Console.log(getCookie(switchIsSelected));
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
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
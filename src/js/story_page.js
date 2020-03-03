function getPageTitle()
{
    var title = document.title;
    alert(title);
    set_parameters(title);

}


function set_parameters(title)
{   
    var end_flow_story = 0;
    var creativity = 0;
    var boringess = 0; 
   if(title == "Back home")
    {
        end_flow_story = 100;
        creativity = 64;
        boringess = 10;
       
    }
    else if(title == "Stranger met Pollicino Father")
    {   
        end_flow_story = 60;
        creativity = 86;
        boringess = 4;
    }
    else if(title == "Pollicino has been stolen")
    {
        end_flow_story = 58;
        creativity = 100;
        boringess = 2; 
    }
    else if(title == "Pollicino was never born")
    {
        end_flow_story = 100;
        creativity = 0;
        boringess = 100; 
    }
    set_value_performance(end_flow_story , creativity ,boringess);
}

function set_value_performance( flow_story , creativity , boringess )
{
    // Set vlaues to the three different ranges
    document.getElementsByTagName("INPUT")[1].setAttribute("value", flow_story);
    document.getElementsByTagName("INPUT")[2].setAttribute("value", creativity);
    document.getElementsByTagName("INPUT")[3].setAttribute("value", boringess);

    // Set the ranges visible
    document.getElementById("valutation").style.visibility = "visible";
}
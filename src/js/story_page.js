function getPageTitle()
{
    var title = document.title;
    alert(title);
    set_parameters(title);

}


function set_parameters(title)
{   
   if(title == "Back home")
    {
        var end_flow_story = 100;
        var creativity = 85;
        var boringess = 10;
       
    }
    set_value_performance(end_flow_story , creativity ,boringess);
}

function set_value_performance( flow_story , creativity , boringess )
{
    document.getElementsByTagName("INPUT")[1].setAttribute("value", flow_story);
    //document.getElementsById("storyFlowValidation").setAttribute

    document.getElementsByTagName("INPUT")[2].setAttribute("value", creativity);
    document.getElementsByTagName("INPUT")[3].setAttribute("value", boringess);

 

    document.getElementById("valutation").style.visibility = "visible";
}
/* Get title page of our web page */
function getPageTitle() {
    var title = document.title;
    set_parameters(title);
}

/* Set values of the Flow_story, creativity and boringness */
function set_parameters(title) {
    if (title == "Back home") {
        // Parameters: flow_story, creativity, boringness
        set_value_performance(100, 64, 10);
    } else if (title == "Stranger met Pollicino Father")
        set_value_performance(60, 86, 4);
    else if (title == "Pollicino has been stolen")
        set_value_performance(58, 100, 2);
    else if (title == "Pollicino was never born")
        set_value_performance(100, 0, 100);
    else if (title == "Pollicino Intro")
        set_value_performance(5, 5, 0);
    else if (title = "Pollicino is growing Up")
        set_value_performance(10, 20, 0);
}

function set_value_performance(flow_story, creativity, boringess) {
    // Set vlaues to the three different ranges
    document.getElementsByTagName("INPUT")[1].setAttribute("value", flow_story);
    document.getElementsByTagName("INPUT")[2].setAttribute("value", creativity);
    document.getElementsByTagName("INPUT")[3].setAttribute("value", boringess);

    // Set the ranges visible
    document.getElementById("valutation").style.visibility = "visible";
}
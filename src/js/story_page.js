function getPageTitle()
{
    var title = document.title;
    alert(title);
    create_range_element(title);

}


function create_range_element(title)
{
    // Create the new node to insert
    let newNode = document.createElement("INPUT");
    newNode.setAttribute("type", "range");

    // Get a reference to the parent node
    let parentDiv = document.getElementById("valutation").parentNode

    // Begin test case [ 1 ] : Existing childElement (all works correctly)
    let sp2 = document.getElementById("valutation")
    parentDiv.insertBefore(newNode, sp2)
}
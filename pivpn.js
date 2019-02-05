var activePage = GetURLParameter('activePage');
if (activePage == null){ activePage = 0; }
                                                                                                                                                                           
function UpdateAddon () {
  $.getJSON('dynamic.json', function(data) {
    $.extend(data, getData('static'));
                                                                                                                                                                           
    textToDisplay = "";
    markerString = "Since";
    textData = data.vpn_clients;                                                                                                                                           
    textArray = textData.trim().slice(textData.indexOf(markerString) + (markerString.length + 6)).replace(/[^ -~]+/g, ";").replace(",",";").split(";");
    next = 0;                                                                                                                                                              
                                                                                                                                                                           
    for (i = 0; i < textArray.length; i++){
        if ( i == next ){
          textToDisplay = textToDisplay + "<tr>";
          next = next + 6;                                                                                                                                                 
        }                                                                                                                                                                  
                                                                                                                                                                           
        textToDisplay = textToDisplay + "<td>" + textArray[i] + "</td>";
                                                                                                                                                                           
        if (i == next + 5){
          textToDisplay = textToDisplay + "</tr>";
        }                                                                                                                                                                  
    }                                                                                                                                                                      
                                                                                                                                                                           
    $("#addonInsertionPoint").html(textToDisplay);
  })                                                                                                                                                                       
}   

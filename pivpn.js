var activePage = GetURLParameter('activePage');
if (activePage == null){ activePage = 0; }

function UpdateAddon () {
  options = '<p>'+
              'No option available for this addon'+
            '</p>'
  $(options).insertBefore("#optionsInsertionPoint")

  $.getJSON('dynamic.json', function(data) {
    $.extend(data, getData('static'));

    textToDisplay = "";
    markerString = "Since";
    textData = data.vpn_clients;
    textArray = (textData.trim().slice(textData.indexOf(markerString) + (markerString.length + 6)).replace(/[^ -~]+/g, ";").replace(",",";").split(";")).filter(function (el) {
       return el != "";
    });
    next = 0;

    if (textArray[0]!=="No Clients Connected!,"){
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
    }
  })
}

$(function () {
  UpdateAddon();
});

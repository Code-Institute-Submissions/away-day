/* Taken from Code Institute tutorial*/
/* Could do a separate initMap for each league when the league name is clicked? */

var map;

const bunArminia = [
    52.031920, 8.516527
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map-api"), {
        zoom: 6,
            center: {
                lat: 53.000001,
                lng: -5.934766
            }
        });
/* Everything beyond this point only needs to display once a club name is clicked */

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 53.771963, lng: -2.688759}, 
        {lat: 53.568498, lng: -2.938022},
        {lat: 53.337334, lng: -6.257684},
        {lat: 52.850788, lng: -9.203393}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
            /*, icon: "images/crests/epl/arsenal.png" --- can add custom markers using this at league level */
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    /* format works! Now follow the below links for tips on passing IDs onclick, then changing the src attr on the script (will also require an ID)
    
    https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
    https://www.ronvangorp.com/change-link-url-with-jquery/

    For the former, add to all buttons, then pass the ID to the template literal below (keep array numbers as they are)
    For the latter there is likely to be better information once you read the Google Tutorial.

    https://www.google.com/maps/dir/?api=1&parameters - link displays directions

    %2c in the link below is the way to properly encode a comma
    */
    console.log(`https://www.google.com/maps/@?api=1&map_action=map&center=${bunArminia[0]}%2c%20${bunArminia[1]}&zoom=10`); 
}

/* Sitepoint tuturial (see README) uses this script to build a script reference with custom parameters, could use this
   for onclick events for each club button, e.g. 'callback=initMap' + eplWolves + 'search=pubs' or something?

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});


*/
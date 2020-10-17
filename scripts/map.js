/* initMap function taken from Code Institute tutorial, all other information
sourced from Google API documentation (see README) unless otherwise stated */
var map;

/* Bundesliga */

const bunArminia = document.getElementById("bunArminia");
const bunArminiaLL = {lat: 52.031920, lng: 8.516527};
const bunAugs07LL = {lat: 48.355273, lng: 10.875904};
const bunBayer04LL = {lat: 51.038144, lng: 7.002157};
const bunBayernLL = {lat: 48.218678, lng: 11.624804};
const bunDortmundLL = {lat: 99.999999, lng: 99.999999};
const bunBorMGBLL = {lat: 99.999999, lng: 99.999999};
const bunEinFraLL = {lat: 99.999999, lng: 99.999999};
const bunSCFreiLL = {lat: 99.999999, lng: 99.999999};
const bunHerthaLL = {lat: 99.999999, lng: 99.999999};
const bunHoffenLL = {lat: 99.999999, lng: 99.999999};
const bun1FCKolnLL = {lat: 99.999999, lng: 99.999999};
const bunLeipzigLL = {lat: 99.999999, lng: 99.999999};
const bunMainzLL = {lat: 99.999999, lng: 99.999999};
const bunSchalkeLL = {lat: 99.999999, lng: 99.999999};
const bunStuttgLL = {lat: 99.999999, lng: 99.999999};
const bunUnionBLL = {lat: 99.999999, lng: 99.999999};
const bunWerderLL = {lat: 99.999999, lng: 99.999999};
const bunWolfsbLL = {lat: 99.999999, lng: 99.999999};

/* Championship */

const flcBarnsleyLL = {lat: 53.552195, lng: -1.467781};
const flcBirCtyLL = {lat: 52.475680, lng: -1.868044};
const flcBlaRovLL = {lat: 53.728503, lng: -2.489116};
const flcBourneLL = {lat: 50.735213, lng: -1.838267};
const flcBrentfLL = {lat: 51.490683, lng: -0.288730};
const flcBriCtyLL = {lat: 51.440148, lng: -2.620163};
const flcCarCtyLL = {lat: 51.472770, lng: -3.203034};
const flcCovCtyLL = {lat: 52.475680, lng: -1.868044};
const flcDerCouLL = {lat: 52.914937, lng: -1.447248};
const flcHudTowLL = {lat: 53.654194, lng: -1.768365};
const flcLutTowLL = {lat: 51.884147, lng: -0.431487};
const flcMiBoroLL = {lat: 54.578218, lng: -1.216750};
const flcMillwallLL = {lat: 51.485908, lng: -0.050878};
const flcNorCtyLL = {lat: 52.622028, lng: 1.309118};
const flcNotForLL = {lat: 52.939948, lng: -1.132911};
const flcPrestonLL = {lat: 53.772229, lng: -2.688216};
const flcQPRangLL = {lat: 51.509319, lng: -0.232108};
const flcReadingLL = {lat: 51.422398, lng: -0.982545};
const flcRotUtdLL = {lat: 53.426874, lng: -1.362421};
const flcSheWedLL = {lat: 53.411400, lng: -1.500750};
const flcStoCtyLL = {lat: 52.988429, lng: -2.175439};
const flcSwaCtyLL = {lat: 51.642683, lng: -3.934559};
const flcWatfordLL = {lat: 51.649876, lng: -0.401648};
const flcWycWanLL = {lat: 51.630529, lng: -0.800300};

/* GAA*/

const gaaAntrimLL = {lat: 99.999999, lng: 99.999999};
const gaaArmaghLL = {lat: 99.999999, lng: 99.999999};
const gaaCarlowLL = {lat: 99.999999, lng: 99.999999};
const gaaCavanLL = {lat: 99.999999, lng: 99.999999};
const gaaClareLL = {lat: 99.999999, lng: 99.999999};
const gaaCorkLL = {lat: 51.899744, lng: -8.435278};
const gaaDerryLL = {lat: 54.993008, lng: -7.333548};
const gaaDonegalLL = {lat: 99.999999, lng: 99.999999};
const gaaDownLL = {lat: 99.999999, lng: 99.999999};
const gaaDublinLL = {lat: 53.360496, lng: -6.251235};
const gaaFermanLL = {lat: 99.999999, lng: 99.999999};
const gaaGalwayLL = {lat: 99.999999, lng: 99.999999};
const gaaKerryLL = {lat: 99.999999, lng: 99.999999};
const gaaKildareLL = {lat: 99.999999, lng: 99.999999};
const gaaKilkenLL = {lat: 99.999999, lng: 99.999999};
const gaaLaoisLL = {lat: 99.999999, lng: 99.999999};
const gaaLeitrimLL = {lat: 99.999999, lng: 99.999999};
const gaaLimLL = {lat: 99.999999, lng: 99.999999};
const gaaLongfLL = {lat: 99.999999, lng: 99.999999};
const gaaLouthLL = {lat: 99.999999, lng: 99.999999};
const gaaMayoLL = {lat: 99.999999, lng: 99.999999};
const gaaMeathLL = {lat: 99.999999, lng: 99.999999};
const gaaMonaLL = {lat: 99.999999, lng: 99.999999};
const gaaOffalyLL = {lat: 99.999999, lng: 99.999999};
const gaaRosLL = {lat: 99.999999, lng: 99.999999};
const gaaSligoLL = {lat: 54.257355, lng: -8.465722};
const gaaTippLL = {lat: 99.999999, lng: 99.999999};
const gaaTyroneLL = {lat: 99.999999, lng: 99.999999};
const gaaWaterLL = {lat: 52.254657, lng: -7.128762};
const gaaWestmLL = {lat: 99.999999, lng: 99.999999};
const gaaWexfordLL = {lat: 99.999999, lng: 99.999999};
const gaaWicklowLL = {lat: 99.999999, lng: 99.999999};

/* NHL*/

const nhlDucksLL = {lat: 99.999999, lng: 99.999999};
const nhlCoyotesLL = {lat: 99.999999, lng: 99.999999};
const nhlBruinsLL = {lat: 99.999999, lng: 99.999999};
const nhlSabresLL = {lat: 99.999999, lng: 99.999999};
const nhlFlamesLL = {lat: 99.999999, lng: 99.999999};
const nhlCanesLL = {lat: 99.999999, lng: 99.999999};
const nhlAvsLL = {lat: 99.999999, lng: 99.999999};
const nhlBHawksLL = {lat: 99.999999, lng: 99.999999};
const nhlJacketsLL = {lat: 99.999999, lng: 99.999999};
const nhlStarsLL = {lat: 99.999999, lng: 99.999999};
const nhlWingsLL = {lat: 99.999999, lng: 99.999999};
const nhlOilersLL = {lat: 99.999999, lng: 99.999999};
const nhlPanthersLL = {lat: 99.999999, lng: 99.999999};
const nhlKingsLL = {lat: 99.999999, lng: 99.999999};
const nhlWildLL = {lat: 99.999999, lng: 99.999999};
const nhlHabsLL = {lat: 99.999999, lng: 99.999999};
const nhlPredsLL = {lat: 99.999999, lng: 99.999999};
const nhlDevilsLL = {lat: 99.999999, lng: 99.999999};
const nhlIslandLL = {lat: 99.999999, lng: 99.999999};
const nhlRangersLL = {lat: 99.999999, lng: 99.999999};
const nhlSensLL = {lat: 99.999999, lng: 99.999999};
const nhlFlyersLL = {lat: 99.999999, lng: 99.999999};
const nhlPenguinsLL = {lat: 99.999999, lng: 99.999999};
const nhlSharksLL = {lat: 99.999999, lng: 99.999999};
const nhlBluesLL = {lat: 99.999999, lng: 99.999999};
const nhlTampaLL = {lat: 99.999999, lng: 99.999999};
const nhlLeafsLL = {lat: 99.999999, lng: 99.999999};
const nhlCanucksLL = {lat: 99.999999, lng: 99.999999};
const nhlKnightsLL = {lat: 99.999999, lng: 99.999999};
const nhlCapitalsLL = {lat: 99.999999, lng: 99.999999};
const nhlJetsLL = {lat: 99.999999, lng: 99.999999};

/* Premier League*/

const eplArsenalLL = {lat: 51.555119, lng: -0.108315};
const eplAstVilLL = {lat: 52.509344, lng: -1.885077};
const eplBriAlbLL = {lat: 50.861666, lng: -0.083798};
const eplBurnleyLL = {lat: 53.788920, lng: -2.230139};
const eplChelseaLL = {lat: 51.481711, lng: -0.190867};
const eplCryPalLL = {lat: 51.398206, lng: -0.085412};
const eplEvertonLL = {lat: 53.438699, lng: -2.966390};
const eplFulhamLL = {lat: 51.474689, lng: -0.221389};
const eplLeeUtdLL = {lat: 53.777766, lng: -1.572214};
const eplLeiCtyLL = {lat: 52.620248, lng: -1.142294};
const eplLiverpLL = {lat: 53.430797, lng: -2.960969};
const eplManCtyLL = {lat: 53.483032, lng: -2.200471};
const eplManUtdLL = {lat: 53.463050, lng: -2.291088};
const eplNewUtdLL = {lat: 54.975505, lng: -1.621579};
const eplSheUtdLL = {lat: 53.370407, lng: -1.470744};
const eplSouthaLL = {lat: 50.905765, lng: -1.391138};
const eplTSpursLL = {lat: 51.604100, lng: -0.066446};
const eplWestBromLL = {lat: 52.508960, lng: -1.963938};
const eplWestHamLL = {lat: 51.538626, lng: -0.016449};
const eplWolvesLL = {lat: 52.590184, lng: -2.130412};

/* Super League*/

const slrCasTigLL = {lat: 53.729517, lng: -1.340833};
const slrCatDraLL = {lat: 42.722828, lng: 2.885358};
const slrHudGiaLL = {lat: 53.654194, lng: -1.768365};
const slrHullFCLL = {lat: 53.746286, lng: -0.367702};
const slrHullKRLL = {lat: 53.754022, lng: -0.265279};
const slrLeeRhiLL = {lat: 53.816331, lng: -1.582257};
const slrSaintsLL = {lat: 53.447313, lng: -2.726213};
const slrSalRedLL = {lat: 53.469339, lng: -2.374945};
const slrWakTriLL = {lat: 53.669707, lng: -1.479360};
const slrWarWolLL = {lat: 53.394812, lng: -2.595800};
const slrWigWarLL = {lat: 53.547562, lng: -2.654000};

/* League of Ireland */

const loiBohsLL = {lat: 53.361751, lng: -6.275308};
const loiBohs = document.getElementById("loiBohs");
const loiCorkCtyLL = {lat: 51.885509, lng: -8.467874};
const loiCorkCty = document.getElementById("loiCorkCty");
const loiDerCtyLL = {lat: 54.990601, lng: -7.336107};
const loiDerCty = document.getElementById("loiDerCty");
const loiDundalkLL = {lat: 53.998930, lng: -6.416433};
const loiDundalk = document.getElementById("loiDundalk");
const loiFHarpsLL = {lat: 53.310339, lng: -6.228142};
const loiFHarps = document.getElementById("loiFHarps");
const loiShaRovLL = {lat: 53.283324, lng: -6.373823};
const loiShaRov = document.getElementById("loiShaRov");
const loiSliRovLL = {lat: 54.269872, lng: -8.487382};
const loiSliRov = document.getElementById("loiSliRov");
const loiShelsLL = {lat: 53.367465, lng: -6.251664};
const loiShels = document.getElementById("loiShels");
const loiPatsLL = {lat: 53.340936, lng: -6.316799};
const loiPats = document.getElementById("loiPats");
const loiWaterfLL = {lat: 52.245894, lng: -7.125159};
const loiWaterf = document.getElementById("loiWaterf");

function initMap() {
    map = new google.maps.Map(document.getElementById("map-api"), {
        zoom: 6,
            center: {
                lat: 53.000001,
                lng: -6.934766
            },
        mapTypeId: 'satellite'
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

    /* format works! Now follow the below links for tips on passing IDs onclick for search types (pub, etc.), then changing the src attr on the script (will also require an ID)
    
    https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
    https://www.ronvangorp.com/change-link-url-with-jquery/

    For the former, add to all buttons, then pass the ID to the template literal below (keep array numbers as they are)
    For the latter there is likely to be better information once you read the Google Tutorial.

    https://www.google.com/maps/dir/?api=1&parameters - link displays directions

    
    */ 

    google.maps.event.addDomListener(bunArminia, 'click', function() {
        map.setCenter(bunArminiaLL);
        map.setZoom(15);
    });
    
    google.maps.event.addDomListener(loiBohs, 'click', function() {
        map.setCenter(loiBohsLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiCorkCty, 'click', function() {
        map.setCenter(loiCorkCtyLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiDerCty, 'click', function() {
        map.setCenter(loiDerCtyLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiDundalk, 'click', function() {
        map.setCenter(loiDundalkLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiFHarps, 'click', function() {
        map.setCenter(loiFHarpsLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiShaRov, 'click', function() {
        map.setCenter(loiShaRovLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiSliRov, 'click', function() {
        map.setCenter(loiSliRovLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiPats, 'click', function() {
        map.setCenter(loiPatsLL);
        map.setZoom(15);
    });

    google.maps.event.addDomListener(loiWaterf, 'click', function() {
        map.setCenter(loiWaterfLL);
        map.setZoom(15);
});
};



$("#bunArminia").on("click",function() {
    /* %2c in the link below is the way to properly encode a comma */
    console.log(`https://www.google.com/maps/@?api=1&map_action=map&center=${bunArminia[0]}%2c%20${bunArminia[1]}&zoom=13`);
});

/* function bunArminia() {
    map = new google.maps.Map(document.getElementById("map-api"), {
    center: {
        lat: bunArminia[0],
        lng: bunArminia[1],
    zoom: 14;
$(document).ready(function() {
    $(".dropdown-club").on("click",function(bunArminia) {


} */

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
/* Scripts for map-specific interactivity */

var map;
var mapCenter;
var infoWindow;
var service;

/* Map Customisers */

const food = document.getElementById("food");
const pubs = document.getElementById("pubs");
const hotels = document.getElementById("hotels");
const coffee = document.getElementById("coffee");

/* Bundesliga */

const bunArminia = document.getElementById("bunArminia");
const bunArminiaLL = {lat: 52.031920, lng: 8.516527};
const bunAugs07 = document.getElementById("bunAugs07");
const bunAugs07LL = {lat: 48.355273, lng: 10.875904};
const bunBayer04 = document.getElementById("bunBayer04");
const bunBayer04LL = {lat: 51.038144, lng: 7.002157};
const bunBayern = document.getElementById("bunBayern");
const bunBayernLL = {lat: 48.218678, lng: 11.624804};
const bunDortmund = document.getElementById("bunDortmund");
const bunDortmundLL = {lat: 51.492514, lng: 7.451786};
const bunBorMGB = document.getElementById("bunBorMGB");
const bunBorMGBLL = {lat: 51.174654, lng: 6.385398};
const bunEinFra = document.getElementById("bunEinFra");
const bunEinFraLL = {lat: 50.068566, lng: 8.645404}; 
const bunSCFrei = document.getElementById("bunSCFrei");
const bunSCFreiLL = {lat: 47.988916, lng: 7.892965};
const bunHertha = document.getElementById("bunHertha");
const bunHerthaLL = {lat: 52.514665, lng: 13.239504};
const bunHoffen = document.getElementById("bunHoffen");
const bunHoffenLL = {lat: 49.278285, lng: 8.842133};
const bun1FCKoln = document.getElementById("bun1FCKoln");
const bun1FCKolnLL = {lat: 50.933446, lng: 6.875294};
const bunLeipzig = document.getElementById("bunLeipzig");
const bunLeipzigLL = {lat: 51.345772, lng: 12.348245};
const bunMainz = document.getElementById("bunMainz");
const bunMainzLL = {lat: 49.983939, lng: 8.224529};
const bunSchalke = document.getElementById("bunSchalke");
const bunSchalkeLL = {lat: 51.554544, lng: 7.067659};
const bunStuttg = document.getElementById("bunStuttg");
const bunStuttgLL = {lat: 48.792177, lng: 9.232084};
const bunUnionB = document.getElementById("bunUnionB");
const bunUnionBLL = {lat: 52.457389, lng: 13.568086};
const bunWerder = document.getElementById("bunWerder");
const bunWerderLL = {lat: 53.066468, lng: 8.837651};
const bunWolfsb = document.getElementById("bunWolfsb");
const bunWolfsbLL = {lat: 52.432655, lng: 10.803845};

/* Championship */

const flcBarnsl = document.getElementById("flcBarnsl");
const flcBarnslLL = {lat: 53.552195, lng: -1.467781};
const flcBirCty = document.getElementById("flcBirCty");
const flcBirCtyLL = {lat: 52.475680, lng: -1.868044};
const flcBlaRov = document.getElementById("flcBlaRov");
const flcBlaRovLL = {lat: 53.728503, lng: -2.489116};
const flcBourne = document.getElementById("flcBourne");
const flcBourneLL = {lat: 50.735213, lng: -1.838267};
const flcBrentf = document.getElementById("flcBrentf");
const flcBrentfLL = {lat: 51.490683, lng: -0.288730};
const flcBriCty = document.getElementById("flcBriCty");
const flcBriCtyLL = {lat: 51.440148, lng: -2.620163};
const flcCarCty = document.getElementById("flcCarCty");
const flcCarCtyLL = {lat: 51.472770, lng: -3.203034};
const flcCovCty = document.getElementById("flcCovCty");
const flcCovCtyLL = {lat: 52.475680, lng: -1.868044};
const flcDerCou = document.getElementById("flcDerCou");
const flcDerCouLL = {lat: 52.914937, lng: -1.447248};
const flcHudTwn = document.getElementById("flcHudTwn");
const flcHudTwnLL = {lat: 53.654194, lng: -1.768365};
const flcLutTwn = document.getElementById("flcLutTwn");
const flcLutTwnLL = {lat: 51.884147, lng: -0.431487};
const flcMBoro = document.getElementById("flcMBoro");
const flcMBoroLL = {lat: 54.578218, lng: -1.216750};
const flcMillwall = document.getElementById("flcMillwall");
const flcMillwallLL = {lat: 51.485908, lng: -0.050878};
const flcNorCty = document.getElementById("flcNorCty");
const flcNorCtyLL = {lat: 52.622028, lng: 1.309118};
const flcForest = document.getElementById("flcForest");
const flcForestLL = {lat: 52.939948, lng: -1.132911};
const flcPreston = document.getElementById("flcPreston");
const flcPrestonLL = {lat: 53.772229, lng: -2.688216};
const flcQPR = document.getElementById("flcQPR");
const flcQPRLL = {lat: 51.509319, lng: -0.232108};
const flcReading = document.getElementById("flcReading");
const flcReadingLL = {lat: 51.422398, lng: -0.982545};
const flcRotUtd = document.getElementById("flcRotUtd");
const flcRotUtdLL = {lat: 53.426874, lng: -1.362421};
const flcSheWed = document.getElementById("flcSheWed");
const flcSheWedLL = {lat: 53.411400, lng: -1.500750};
const flcStoCty = document.getElementById("flcStoCty");
const flcStoCtyLL = {lat: 52.988429, lng: -2.175439};
const flcSwaCty = document.getElementById("flcSwaCty");
const flcSwaCtyLL = {lat: 51.642683, lng: -3.934559};
const flcWatford = document.getElementById("flcWatford");
const flcWatfordLL = {lat: 51.649876, lng: -0.401648};
const flcWycWan = document.getElementById("flcWycWan");
const flcWycWanLL = {lat: 51.630529, lng: -0.800300};

/* GAA*/

const gaaAntrim = document.getElementById("gaaAntrim");
const gaaAntrimLL = {lat: 54.573336, lng: -5.983965};
const gaaArmagh = document.getElementById("gaaArmagh");
const gaaArmaghLL = {lat: 54.343612, lng: -6.662301};
const gaaCarlow = document.getElementById("gaaCarlow");
const gaaCarlowLL = {lat: 52.847014, lng: -6.916394};
const gaaCavan = document.getElementById("gaaCavan");
const gaaCavanLL = {lat: 53.981635, lng: -7.360457};
const gaaClare = document.getElementById("gaaClare");
const gaaClareLL = {lat: 52.846618, lng: -8.978299};
const gaaCork = document.getElementById("gaaCork");
const gaaCorkLL = {lat: 51.899744, lng: -8.435278};
const gaaDerry = document.getElementById("gaaDerry");
const gaaDerryLL = {lat: 54.993008, lng: -7.333548};
const gaaDonegal = document.getElementById("gaaDonegal");
const gaaDonegalLL = {lat: 54.801474, lng: -7.780035};
const gaaDown = document.getElementById("gaaDown");
const gaaDownLL = {lat: 54.163056, lng: -6.334669};
const gaaDublin = document.getElementById("gaaDublin");
const gaaDublinLL = {lat: 53.360496, lng: -6.251235};
const gaaFerman = document.getElementById("gaaFerman");
const gaaFermanLL = {lat: 54.350993, lng: -7.634873};
const gaaGalway = document.getElementById("gaaGalway");
const gaaGalwayLL = {lat: 53.263209, lng: -9.084249};
const gaaKerry = document.getElementById("gaaKerry");
const gaaKerryLL = {lat: 52.066276, lng: -9.508995};
const gaaKildare = document.getElementById("gaaKildare");
const gaaKildareLL = {lat: 53.179602, lng: -6.794628};
const gaaKilken = document.getElementById("gaaKilken");
const gaaKilkenLL = {lat: 52.656317, lng: -7.239840};
const gaaLaois = document.getElementById("gaaLaois");
const gaaLaoisLL = {lat: 53.026000, lng: -7.302395};
const gaaLeitrim = document.getElementById("gaaLeitrim");
const gaaLeitrimLL = {lat: 53.948022, lng: -8.076134};
const gaaLim = document.getElementById("gaaLim");
const gaaLimLL = {lat: 52.670030, lng: -8.654156};
const gaaLong = document.getElementById("gaaLong");
const gaaLongLL = {lat: 53.739491, lng: -7.804902};
const gaaLouth = document.getElementById("gaaLouth");
const gaaLouthLL = {lat: 53.723659, lng: -6.359391};
const gaaMayo = document.getElementById("gaaMayo");
const gaaMayoLL = {lat: 53.853532, lng: -9.286314};
const gaaMeath = document.getElementById("gaaMeath");
const gaaMeathLL = {lat: 53.649729, lng: -6.693866};
const gaaMona = document.getElementById("gaaMona");
const gaaMonaLL = {lat: 54.185650, lng: -7.233461};
const gaaOffaly = document.getElementById("gaaOffaly");
const gaaOffalyLL = {lat: 53.280130, lng: -7.489335};
const gaaRos = document.getElementById("gaaRos");
const gaaRosLL = {lat: 53.624867, lng: -8.180865};
const gaaSligo = document.getElementById("gaaSligo");
const gaaSligoLL = {lat: 54.257355, lng: -8.465722};
const gaaTipp = document.getElementById("gaaTipp");
const gaaTippLL = {lat: 52.682102, lng: -7.825931};
const gaaTyrone = document.getElementById("gaaTyrone");
const gaaTyroneLL = {lat: 54.614203, lng: -7.297066};
const gaaWater = document.getElementById("gaaWater");
const gaaWaterLL = {lat: 52.254657, lng: -7.128762};
const gaaWestm = document.getElementById("gaaWestm");
const gaaWestmLL = {lat: 53.528091, lng: -7.337921};
const gaaWexford = document.getElementById("gaaWexford");
const gaaWexfordLL = {lat: 52.332595, lng: -6.475867};
const gaaWicklow = document.getElementById("gaaWicklow");
const gaaWicklowLL = {lat: 52.852616, lng: -6.334831};

/* NHL*/

const nhlDucks = document.getElementById("nhlDucks");
const nhlDucksLL = {lat: 33.807845, lng: -117.876555};
const nhlCoyotes = document.getElementById("nhlCoyotes");
const nhlCoyotesLL = {lat: 33.531940, lng: -112.261141};
const nhlBruins = document.getElementById("nhlBruins");
const nhlBruinsLL = {lat: 42.366347, lng: -71.062122};
const nhlSabres = document.getElementById("nhlSabres");
const nhlSabresLL = {lat: 42.874968, lng: -78.876373};
const nhlFlames = document.getElementById("nhlFlames");
const nhlFlamesLL = {lat: 51.037346, lng: -114.051897};
const nhlCanes = document.getElementById("nhlCanes");
const nhlCanesLL = {lat: 35.803303, lng: -78.722027};
const nhlAvs = document.getElementById("nhlAvs");
const nhlAvsLL = {lat: 39.748632, lng: -105.007807};
const nhlBHawks = document.getElementById("nhlBHawks");
const nhlBHawksLL = {lat: 41.880675, lng: -87.674270};
const nhlJackets = document.getElementById("nhlJackets");
const nhlJacketsLL = {lat: 39.969249, lng: -83.005882};
const nhlStars = document.getElementById("nhlStars");
const nhlStarsLL = {lat: 32.790468, lng: -96.810416};
const nhlWings = document.getElementById("nhlWings");
const nhlWingsLL = {lat: 42.341039, lng: -83.055342};
const nhlOilers = document.getElementById("nhlOilers");
const nhlOilersLL = {lat: 53.547081, lng: -113.497614};
const nhlPanthers = document.getElementById("nhlPanthers");
const nhlPanthersLL = {lat: 26.158421, lng: -80.325272};
const nhlKings = document.getElementById("nhlKings");
const nhlKingsLL = {lat: 34.043169, lng: -118.267133};
const nhlWild = document.getElementById("nhlWild");
const nhlWildLL = {lat: 44.944790, lng: -93.101167};
const nhlHabs = document.getElementById("nhlHabs");
const nhlHabsLL = {lat: 45.496175, lng: -73.569267};
const nhlPreds = document.getElementById("nhlPreds");
const nhlPredsLL = {lat: 936.159122, lng: -86.778571};
const nhlDevils = document.getElementById("nhlDevils");
const nhlDevilsLL = {lat: 40.733726, lng: -74.171051};
const nhlIsland = document.getElementById("nhlIsland");
const nhlIslandLL = {lat: 40.722936, lng: -73.590634};
const nhlRangers = document.getElementById("nhlRangers");
const nhlRangersLL = {lat: 40.750653, lng: -73.993527};
const nhlSens = document.getElementById("nhlSens");
const nhlSensLL = {lat: 45.296939, lng: -75.926962};
const nhlFlyers = document.getElementById("nhlFlyers");
const nhlFlyersLL = {lat: 39.901267, lng: -75.172081};
const nhlPenguins = document.getElementById("nhlPenguins");
const nhlPenguinsLL = {lat: 40.439530, lng: -79.989490};
const nhlSharks = document.getElementById("nhlSharks");
const nhlSharksLL = {lat: 37.332670, lng: -121.901331};
const nhlBlues = document.getElementById("nhlBlues");
const nhlBluesLL = {lat: 38.626790, lng: -90.202568};
const nhlTampa = document.getElementById("nhlTampa");
const nhlTampaLL = {lat: 27.942605, lng: -82.451793};
const nhlLeafs = document.getElementById("nhlLeafs");
const nhlLeafsLL = {lat: 43.643482, lng: -79.379287};
const nhlCanucks = document.getElementById("nhlCanucks");
const nhlCanucksLL = {lat: 49.277921, lng: -123.108584};
const nhlKnights = document.getElementById("nhlKnights");
const nhlKnightsLL = {lat: 36.102773, lng: -115.178250};
const nhlCapitals = document.getElementById("nhlCapitals");
const nhlCapitalsLL = {lat: 38.898044, lng: -77.020962};
const nhlJets = document.getElementById("nhlJets");
const nhlJetsLL = {lat: 49.892657, lng: -97.143664};

/* Premier League*/

const eplArsenal = document.getElementById("eplArsenal");
const eplArsenalLL = {lat: 51.555119, lng: -0.108315};
const eplVilla = document.getElementById("eplVilla");
const eplVillaLL = {lat: 52.509344, lng: -1.885077};
const eplBriAlb = document.getElementById("eplBriAlb");
const eplBriAlbLL = {lat: 50.861666, lng: -0.083798};
const eplBurnley = document.getElementById("eplBurnley");
const eplBurnleyLL = {lat: 53.788920, lng: -2.230139};
const eplChelsea = document.getElementById("eplChelsea");
const eplChelseaLL = {lat: 51.481711, lng: -0.190867};
const eplPalace = document.getElementById("eplPalace");
const eplPalaceLL = {lat: 51.398206, lng: -0.085412};
const eplEverton = document.getElementById("eplEverton");
const eplEvertonLL = {lat: 53.438699, lng: -2.966390};
const eplFulham = document.getElementById("eplFulham");
const eplFulhamLL = {lat: 51.474689, lng: -0.221389};
const eplLeeds = document.getElementById("eplLeeds");
const eplLeedsLL = {lat: 53.777766, lng: -1.572214};
const eplLeiCty = document.getElementById("eplLeiCty");
const eplLeiCtyLL = {lat: 52.620248, lng: -1.142294};
const eplLiverp = document.getElementById("eplLiverp");
const eplLiverpLL = {lat: 53.430797, lng: -2.960969};
const eplManCty = document.getElementById("eplManCty");
const eplManCtyLL = {lat: 53.483032, lng: -2.200471};
const eplManUtd = document.getElementById("eplManUtd");
const eplManUtdLL = {lat: 53.463050, lng: -2.291088};
const eplNewUtd = document.getElementById("eplNewUtd");
const eplNewUtdLL = {lat: 54.975505, lng: -1.621579};
const eplSheUtd = document.getElementById("eplSheUtd");
const eplSheUtdLL = {lat: 53.370407, lng: -1.470744};
const eplSaints = document.getElementById("eplSaints");
const eplSaintsLL = {lat: 50.905765, lng: -1.391138};
const eplSpurs = document.getElementById("eplSpurs");
const eplSpursLL = {lat: 51.604100, lng: -0.066446};
const eplWestBrom = document.getElementById("eplWestBrom");
const eplWestBromLL = {lat: 52.508960, lng: -1.963938};
const eplWestHam = document.getElementById("eplWestHam");
const eplWestHamLL = {lat: 51.538626, lng: -0.016449};
const eplWolves = document.getElementById("eplWolves");
const eplWolvesLL = {lat: 52.590184, lng: -2.130412};

/* Super League*/

const slrCasTig = document.getElementById("slrCasTig");
const slrCasTigLL = {lat: 53.729517, lng: -1.340833};
const slrCatDra = document.getElementById("slrCatDra");
const slrCatDraLL = {lat: 42.722828, lng: 2.885358};
const slrHudGia = document.getElementById("slrHudGia");
const slrHudGiaLL = {lat: 53.654194, lng: -1.768365};
const slrHullFC = document.getElementById("slrHullFC");
const slrHullFCLL = {lat: 53.746286, lng: -0.367702};
const slrHullKR = document.getElementById("slrHullKR");
const slrHullKRLL = {lat: 53.754022, lng: -0.265279};
const slrLeeRhi = document.getElementById("slrLeeRhi");
const slrLeeRhiLL = {lat: 53.816331, lng: -1.582257};
const slrSaints = document.getElementById("slrSaints");
const slrSaintsLL = {lat: 53.447313, lng: -2.726213};
const slrSalRed = document.getElementById("slrSalRed");
const slrSalRedLL = {lat: 53.469339, lng: -2.374945};
const slrWakTri = document.getElementById("slrWakTri");
const slrWakTriLL = {lat: 53.669707, lng: -1.479360};
const slrWarWol = document.getElementById("slrWarWol");
const slrWarWolLL = {lat: 53.394812, lng: -2.595800};
const slrWigWar = document.getElementById("slrWigWar");
const slrWigWarLL = {lat: 53.547562, lng: -2.654000};

/* League of Ireland */

const loiBohs = document.getElementById("loiBohs");
const loiBohsLL = {lat: 53.361751, lng: -6.275308};
const loiCorkCty = document.getElementById("loiCorkCty");
const loiCorkCtyLL = {lat: 51.885509, lng: -8.467874};
const loiDerCty = document.getElementById("loiDerCty");
const loiDerCtyLL = {lat: 54.990601, lng: -7.336107};
const loiDundalk = document.getElementById("loiDundalk");
const loiDundalkLL = {lat: 53.998930, lng: -6.416433};
const loiFHarps = document.getElementById("loiFHarps");
const loiFHarpsLL = {lat: 54.797961, lng: -7.778669};
const loiShaRov = document.getElementById("loiShaRov");
const loiShaRovLL = {lat: 53.283324, lng: -6.373823};
const loiSliRov = document.getElementById("loiSliRov");
const loiSliRovLL = {lat: 54.269872, lng: -8.487382};
const loiShels = document.getElementById("loiShels");
const loiShelsLL = {lat: 53.367465, lng: -6.251664};
const loiPats = document.getElementById("loiPats");
const loiPatsLL = {lat: 53.340936, lng: -6.316799};
const loiWaterf = document.getElementById("loiWaterf");
const loiWaterfLL = {lat: 52.245894, lng: -7.125159};

/* Map Setup */

/* initMap function taken from Code Institute tutorial */

try {
function initMap() {
    map = new google.maps.Map(document.getElementById("map-api"), {
        zoom: 6,
            center: {
                lat: 53.000001,
                lng: -6.934766
            },
        mapTypeId: 'hybrid'
        });
    
    /* Event Listeners */

    /* Bundesliga */

    google.maps.event.addDomListener(bunArminia, 'click', function() {
        map.setCenter(bunArminiaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunAugs07, 'click', function() {
        map.setCenter(bunAugs07LL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunBayer04, 'click', function() {
        map.setCenter(bunBayer04LL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunBayern, 'click', function() {
        map.setCenter(bunBayernLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunBorMGB, 'click', function() {
        map.setCenter(bunBorMGBLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunDortmund, 'click', function() {
        map.setCenter(bunDortmundLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunEinFra, 'click', function() {
        map.setCenter(bunEinFraLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunHertha, 'click', function() {
        map.setCenter(bunHerthaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunHoffen, 'click', function() {
        map.setCenter(bunHoffenLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bun1FCKoln, 'click', function() {
        map.setCenter(bun1FCKolnLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunLeipzig, 'click', function() {
        map.setCenter(bunLeipzigLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunMainz, 'click', function() {
        map.setCenter(bunMainzLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunSCFrei, 'click', function() {
        map.setCenter(bunSCFreiLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunSchalke, 'click', function() {
        map.setCenter(bunSchalkeLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunStuttg, 'click', function() {
        map.setCenter(bunStuttgLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunUnionB, 'click', function() {
        map.setCenter(bunUnionBLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunWerder, 'click', function() {
        map.setCenter(bunWerderLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(bunWolfsb, 'click', function() {
        map.setCenter(bunWolfsbLL);
        map.setZoom(16);
    });
    
    /* Championship */

    google.maps.event.addDomListener(flcBarnsl, 'click', function() {
        map.setCenter(flcBarnslLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcBirCty, 'click', function() {
        map.setCenter(flcBirCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcBriCty, 'click', function() {
        map.setCenter(flcBriCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcBlaRov, 'click', function() {
        map.setCenter(flcBlaRovLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcBourne, 'click', function() {
        map.setCenter(flcBourneLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcBrentf, 'click', function() {
        map.setCenter(flcBrentfLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcCarCty, 'click', function() {
        map.setCenter(flcCarCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcCovCty, 'click', function() {
        map.setCenter(flcCovCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcDerCou, 'click', function() {
        map.setCenter(flcDerCouLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcForest, 'click', function() {
        map.setCenter(flcForestLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcHudTwn, 'click', function() {
        map.setCenter(flcHudTwnLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcLutTwn, 'click', function() {
        map.setCenter(flcLutTwnLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcMBoro, 'click', function() {
        map.setCenter(flcMBoroLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcMillwall, 'click', function() {
        map.setCenter(flcMillwallLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcNorCty, 'click', function() {
        map.setCenter(flcNorCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcPreston, 'click', function() {
        map.setCenter(flcPrestonLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcQPR, 'click', function() {
        map.setCenter(flcQPRLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcReading, 'click', function() {
        map.setCenter(flcReadingLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcRotUtd, 'click', function() {
        map.setCenter(flcRotUtdLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcSheWed, 'click', function() {
        map.setCenter(flcSheWedLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcStoCty, 'click', function() {
        map.setCenter(flcStoCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcSwaCty, 'click', function() {
        map.setCenter(flcSwaCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcWatford, 'click', function() {
        map.setCenter(flcWatfordLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(flcWycWan, 'click', function() {
        map.setCenter(flcWycWanLL);
        map.setZoom(16);
    });

    /* GAA */

    google.maps.event.addDomListener(gaaAntrim, 'click', function() {
        map.setCenter(gaaAntrimLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaArmagh, 'click', function() {
        map.setCenter(gaaArmaghLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaCarlow, 'click', function() {
        map.setCenter(gaaCarlowLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaCavan, 'click', function() {
        map.setCenter(gaaCavanLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaClare, 'click', function() {
        map.setCenter(gaaClareLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaCork, 'click', function() {
        map.setCenter(gaaCorkLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaDerry, 'click', function() {
        map.setCenter(gaaDerryLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaDonegal, 'click', function() {
        map.setCenter(gaaDonegalLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaDown, 'click', function() {
        map.setCenter(gaaDownLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaDublin, 'click', function() {
        map.setCenter(gaaDublinLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaFerman, 'click', function() {
        map.setCenter(gaaFermanLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaGalway, 'click', function() {
        map.setCenter(gaaGalwayLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaKerry, 'click', function() {
        map.setCenter(gaaKerryLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaKildare, 'click', function() {
        map.setCenter(gaaKildareLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaKilken, 'click', function() {
        map.setCenter(gaaKilkenLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaLaois, 'click', function() {
        map.setCenter(gaaLaoisLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaLeitrim, 'click', function() {
        map.setCenter(gaaLeitrimLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaLim, 'click', function() {
        map.setCenter(gaaLimLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaLong, 'click', function() {
        map.setCenter(gaaLongLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaLouth, 'click', function() {
        map.setCenter(gaaLouthLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaMayo, 'click', function() {
        map.setCenter(gaaMayoLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaMeath, 'click', function() {
        map.setCenter(gaaMeathLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaMona, 'click', function() {
        map.setCenter(gaaMonaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaOffaly, 'click', function() {
        map.setCenter(gaaOffalyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaRos, 'click', function() {
        map.setCenter(gaaRosLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaSligo, 'click', function() {
        map.setCenter(gaaSligoLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaTipp, 'click', function() {
        map.setCenter(gaaTippLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaTyrone, 'click', function() {
        map.setCenter(gaaTyroneLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaWater, 'click', function() {
        map.setCenter(gaaWaterLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaWestm, 'click', function() {
        map.setCenter(gaaWestmLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaWexford, 'click', function() {
        map.setCenter(gaaWexfordLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(gaaWicklow, 'click', function() {
        map.setCenter(gaaWicklowLL);
        map.setZoom(16);
    });

    /* NHL */

    google.maps.event.addDomListener(nhlAvs, 'click', function() {
        map.setCenter(nhlAvsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlBHawks, 'click', function() {
        map.setCenter(nhlBHawksLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlBlues, 'click', function() {
        map.setCenter(nhlBluesLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlBruins, 'click', function() {
        map.setCenter(nhlBruinsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlCanes, 'click', function() {
        map.setCenter(nhlCanesLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlCanucks, 'click', function() {
        map.setCenter(nhlCanucksLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlCapitals, 'click', function() {
        map.setCenter(nhlCapitalsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlCoyotes, 'click', function() {
        map.setCenter(nhlCoyotesLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlDevils, 'click', function() {
        map.setCenter(nhlDevilsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlDucks, 'click', function() {
        map.setCenter(nhlDucksLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlFlames, 'click', function() {
        map.setCenter(nhlFlamesLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlFlyers, 'click', function() {
        map.setCenter(nhlFlyersLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlHabs, 'click', function() {
        map.setCenter(nhlHabsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlIsland, 'click', function() {
        map.setCenter(nhlIslandLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlJackets, 'click', function() {
        map.setCenter(nhlJacketsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlJets, 'click', function() {
        map.setCenter(nhlJetsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlKings, 'click', function() {
        map.setCenter(nhlKingsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlKnights, 'click', function() {
        map.setCenter(nhlKnightsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlLeafs, 'click', function() {
        map.setCenter(nhlLeafsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlOilers, 'click', function() {
        map.setCenter(nhlOilersLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlPanthers, 'click', function() {
        map.setCenter(nhlPanthersLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlPenguins, 'click', function() {
        map.setCenter(nhlPenguinsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlPreds, 'click', function() {
        map.setCenter(nhlPredsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlRangers, 'click', function() {
        map.setCenter(nhlRangersLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlSabres, 'click', function() {
        map.setCenter(nhlSabresLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlSens, 'click', function() {
        map.setCenter(nhlSensLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlSharks, 'click', function() {
        map.setCenter(nhlSharksLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlStars, 'click', function() {
        map.setCenter(nhlStarsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlTampa, 'click', function() {
        map.setCenter(nhlTampaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlWild, 'click', function() {
        map.setCenter(nhlWildLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(nhlWings, 'click', function() {
        map.setCenter(nhlWingsLL);
        map.setZoom(16);
    });

    /* Premier League  */

    google.maps.event.addDomListener(eplArsenal, 'click', function() {
        map.setCenter(eplArsenalLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplBriAlb, 'click', function() {
        map.setCenter(eplBriAlbLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplBurnley, 'click', function() {
        map.setCenter(eplBurnleyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplChelsea, 'click', function() {
        map.setCenter(eplChelseaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplEverton, 'click', function() {
        map.setCenter(eplEvertonLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplFulham, 'click', function() {
        map.setCenter(eplFulhamLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplLeeds, 'click', function() {
        map.setCenter(eplLeedsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplLeiCty, 'click', function() {
        map.setCenter(eplLeiCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplLiverp, 'click', function() {
        map.setCenter(eplLiverpLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplManCty, 'click', function() {
        map.setCenter(eplManCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplManUtd, 'click', function() {
        map.setCenter(eplManUtdLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplNewUtd, 'click', function() {
        map.setCenter(eplNewUtdLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplPalace, 'click', function() {
        map.setCenter(eplPalaceLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplSaints, 'click', function() {
        map.setCenter(eplSaintsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplSheUtd, 'click', function() {
        map.setCenter(eplSheUtdLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplSpurs, 'click', function() {
        map.setCenter(eplSpursLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplVilla, 'click', function() {
        map.setCenter(eplVillaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplWestBrom, 'click', function() {
        map.setCenter(eplWestBromLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplWestHam, 'click', function() {
        map.setCenter(eplWestHamLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(eplWolves, 'click', function() {
        map.setCenter(eplWolvesLL);
        map.setZoom(16);
    });

    /* Super League */
    
    google.maps.event.addDomListener(slrCasTig, 'click', function() {
        map.setCenter(slrCasTigLL);
        map.setZoom(16);
    });
    
    google.maps.event.addDomListener(slrCatDra, 'click', function() {
        map.setCenter(slrCatDraLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrHudGia, 'click', function() {
        map.setCenter(slrHudGiaLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrHullFC, 'click', function() {
        map.setCenter(slrHullFCLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrHullKR, 'click', function() {
        map.setCenter(slrHullKRLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrLeeRhi, 'click', function() {
        map.setCenter(slrLeeRhiLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrSaints, 'click', function() {
        map.setCenter(slrSaintsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrSalRed, 'click', function() {
        map.setCenter(slrSalRedLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrWakTri, 'click', function() {
        map.setCenter(slrWakTriLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrWarWol, 'click', function() {
        map.setCenter(slrWarWolLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(slrWigWar, 'click', function() {
        map.setCenter(slrWigWarLL);
        map.setZoom(16);
    });

    /* League of Ireland */
    
    google.maps.event.addDomListener(loiBohs, 'click', function() {
        map.setCenter(loiBohsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiCorkCty, 'click', function() {
        map.setCenter(loiCorkCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiDerCty, 'click', function() {
        map.setCenter(loiDerCtyLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiDundalk, 'click', function() {
        map.setCenter(loiDundalkLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiFHarps, 'click', function() {
        map.setCenter(loiFHarpsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiShaRov, 'click', function() {
        map.setCenter(loiShaRovLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiShels, 'click', function() {
        map.setCenter(loiShelsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiSliRov, 'click', function() {
        map.setCenter(loiSliRovLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiPats, 'click', function() {
        map.setCenter(loiPatsLL);
        map.setZoom(16);
    });

    google.maps.event.addDomListener(loiWaterf, 'click', function() {
        map.setCenter(loiWaterfLL);
        map.setZoom(16);
    });

    /* Search Box Setup */

    const input = document.getElementById("custom-input");
    const searchBox = new google.maps.places.SearchBox(input);
    /* map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); This code is in the original tutorial, I've removed it */ 

    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
            return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
    map.fitBounds(bounds);
    });

    /* Places Customisation - code here roughly follows Google API and Google Code Labs tutorials found in the README */

    /* Event Listener and Marker Creation for Pubs */

    google.maps.event.addDomListener(pubs, 'click', function() {
        console.log("PUBS SUCCESS");
        /* add in a line that clears any already existing markers */

        let pubsRequest = {
            location: map.getCenter(),
            radius: 1000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            type: ['bar']
        };

        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(pubsRequest, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /* for loop restricts markers to top 5 items only */
                for (let i = 0; i < 5; i++) {
                    marker(results[i]);
                }
                /* pubsRequest.location allows the map to stay centred on the stadium chosen */
                map.setCenter(pubsRequest.location);
                map.setZoom(14);
            }
        });
    });

    /* Event Listener and Marker Creation for Food */

    google.maps.event.addDomListener(food, 'click', function() {
        console.log("FOOD SUCCESS");
        /* add in a line that clears any already existing markers */

        let foodRequest = {
            location: map.getCenter(),
            radius: 1000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(foodRequest, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /* for loop restricts markers to top 5 items only */
                for (let i = 0; i < 5; i++) {
                    marker(results[i]);
                }
                /* foodRequest.location allows the map to stay centred on the stadium chosen */
                map.setCenter(foodRequest.location);
                map.setZoom(14);
            }
        });
    });

    /* Event Listener and Marker Creation for Hotels */

    google.maps.event.addDomListener(hotels, 'click', function() {
        console.log("HOTEL SUCCESS");
        /* add in a line that clears any already existing markers */

        let hotelRequest = {
            location: map.getCenter(),
            radius: 1000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            type: ['lodging']
        };

        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(hotelRequest, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /* for loop restricts markers to top 5 items only */
                for (let i = 0; i < 5; i++) {
                    marker(results[i]);
                }
                /* hotelRequest.location allows the map to stay centred on the stadium chosen */
                map.setCenter(hotelRequest.location);
                map.setZoom(14);
            }
        });
    });

    /* Event Listener and Marker Creation for Cafes */

    google.maps.event.addDomListener(coffee, 'click', function() {
        console.log("CAFE SUCCESS");
        /* add in a line that clears any already existing markers */

        let cafeRequest = {
            location: map.getCenter(),
            radius: 1000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            type: ['cafe']
        };

        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(cafeRequest, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                /* for loop restricts markers to top 5 items only */
                for (let i = 0; i < 5; i++) {
                    marker(results[i]);
                }
                /* hotelRequest.location allows the map to stay centred on the stadium chosen */
                map.setCenter(cafeRequest.location);
                map.setZoom(14);
            }
        });
    });
}
console.log("Successfully called Google Maps API");
} catch (e) {
    alert(`Uh oh! Looks like Google has scored an own goal! Please refresh the page, it's still 0-0 lads!`);
    console.log(`Uh oh! Looks like Google has scored an own goal! Please refresh the page, it's still 0-0 lads!`);
    /* add a line in here for image display to replace alert above*/
}

/* The marker, showDetails and getDetails functions for the creation of markers, infoWindows 
and sourcing photos below are taken from the Code Labs tutorial in the README.md */

function marker(place) {
    const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
    };

    const marker = new google.maps.Marker({
        map,
        icon,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location,
        title: place.name
    });
    
    google.maps.event.addListener(marker, "click", () => {
        let request = {
            placeId: place.place_id,
            fields: ['name', 'formatted_address', 'geometry', 'rating',
                'website', 'photos']
            /* needs an event handler in case one of the fields is undefined */
        };

        /* Returns details only after click to reduce API requests */
        service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status)
        });
    });
}

function showDetails(placeResult, marker) {

    let placeInfowindow = new google.maps.InfoWindow();
        let rating = "None";
        let placePhoto = placeResult.photos[0].getUrl();
        if (placeResult.rating) rating = placeResult.rating;
        placeInfowindow.setContent(
            `<div>
                <div style="text-transform: uppercase; color: #8e2be2"><b>${placeResult.name}</b></div>
                <br>
                <img src="${placePhoto}" alt="${placeResult.name}" width="200px" height="200px">
                <br>
                <br>
                Rating: ${rating}
                <br>
                <a href="${placeResult.website}" target="_blank" style="color: #05e680">Website</a>
                <br>
                </div>`);
        placeInfowindow.open(marker.map, marker);
        /* needs code to close any open windows: look in section 4E of the tutorial for some ideas around adding classes then removing
        any items that contain said classes.*/
        /* picture needs to be smaller on mobile display */
        /* below is not currently working
        currentInfoWindow.close();
        currentInfoWindow = placeInfowindow; */
}

/* add event listener here to prompt map to recentre to relevant when clicking gm-ui-hover-effect */


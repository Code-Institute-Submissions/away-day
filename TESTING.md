<img src="images/site/namebar.PNG">

## User Stories

1. I'm travelling a long way for this match and need somewhere to stay overnight before the match;
 - 

2. Our train arrives a couple of hours before the match, where is good for a beer?
 - 

3. We've heard horror stories about the food at the ground we're visiting, can I find something decent to eat after the match?
 - 

4. We were at the match yesterday and visited too many of the pubs your site recommended, can you find me a good hangover coffee?
 - 

6. Just because I'm a football fan doesn't mean I want to drink all day, how can I search for some other things to do?
 - 

7. A local friend recommended me somewhere to go, I just need to find it on the map;
 - 

8. My club or league is missing, I'd like to ask the site owner to add them to the next release!
 - 


## Bugfixes

- I spent a lot of time trying to get the club crests to display in a neat way inside the drop-down menus. I piled the CSS 
rules up in an attempt to force them elements to do what I wanted, but eventually realised the power of the Element Inspector
in the browser and simply turned parameters on and off again until I found the solution that I needed. Some of the links I
have [credited](README.md) helped me realise that with CSS there rule is often 'less is more'.
- Harnessing power of Google Maps, getting and setting properties, displaying markers and information
- Occasionally the call to Google's Places API would fail on account of the callback to my initMap function, and no amount of 
tinkering with Try/Catch would get any alternative images to show up in place of the #map box. I tried moving scripts around 
and removing the async property from the script tags, but luckily Kevin Loughrey at Code Institute was on hand to advise my to
load the function in the <body> tag instead of in the script call to Google. This had the dual effect of successfully displaying
my Try/Catch tests to the console, but also ensuring that the catch message never needed to be logged. 
- 
- 
- 
- 
- 


## Outstanding Issues

- There is some bleed between the mobile-specific and desktop-specific jQuery scripts. Both work fine upon loading but 
once you switch between screen sizes in developer mode the hover event listener can stick in place until another icon is 
clicked. Given that most users would not sit and flick between two screen sizes while using the app, I decided to leave 
this unfixed as time was at a premium.
- Mobile header display
- ShareThis
- Collapse dropdown on crest click (mobile only)
- Remove markers upon new club search - fixing place search was priority as it markers often overlapped, whereas very few of the clubs
are in close proximity

## Validation

### Issues Raised

### Certificates
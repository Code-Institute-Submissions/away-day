<img src="images/site/namebar.PNG">

Welcome to my interactive front-end development milestone project. For this project I chose to create Away Day, a website that harnesses Google APIs to provide football fans with the best pubs, clubs and hotels close to the opponent's stadium.

The idea behind this project is that the most dedicated sports fans will know their hometown inside out, but they can spend up to half of their time following their team away from home. AwayDay gives fans the best hotels, restaurants, pubs and cafes within a couple of clicks, taking the 

## User Experience

### Styling

- A [Balsamiq](https://www.balsamiq.com/) wireframe for this project is included in the repository, with [desktop/tablet](wireframes/ADdesktab.pdf) and [mobile](wireframes/ADmobile.pdf) versions.

I used the following hex colours, selecting using [Pixlr](https://www.pixlr.com/):

 - #05e680 is a light green that is the primary colour of the site. I used the satellite setting of the Google Maps API, so I wanted something that provided a good contrast to this, as well as evoking a sports field.
 - #8a2be2 is a violet that acts as a secondary colour, seen predominantly when hovering on links or items that customise the map. 
 - #ffffff

- Fonts
- Icons
- Miscellaneous Design Decisions

### User Stories

Testing for each of the below user stories is included within the [testing log](TESTING.md).

1. As a fan, I would like to get directions to the stadium;
2. As a fan, I would like to find the nearest pub to the stadium;
3. As a fan, I would like to find a hotel to stay in;
4. I need to call or email a particular destination
5. My club or league is missing, I'd like to ask the site owner to add them to the next release


## Features

### Existing Features
- locate ground for any club in the following leagues:
    - Football/Soccer
        - [English Championship](https://www.efl.com/clubs-and-competitions/sky-bet-championship/);
        - [English Premier League](https://www.premierleague.com/);
        - [German Bundesliga](https://www.bundesliga.com/en/bundesliga);
        - [League of Ireland Premier Division](https://sseairtricityleague.ie/);
    - Gaelic Football and Hurling
        - [Gaelic Athletic Association](https://www.gaa.ie/);
    - Ice Hockey
        - [National Hockey League](https://www.nhl.com/);
    - Rugby League
        - [European Super League](https://superleague.co.uk/);
- find pubs
- find hotels
- find nightclubs
- get directions to ground from any location

### Features to Implement

- Share plans with friends
- Rollout to more leagues, sports and countries - main priorities are Pro14 and English Premiership rugby union, NFL, NBA, MLB, NRL and AFL
- A wider league selection would certainly require a re-structure of the drop-down options, I think the format I've used is already at the limit of what it can display well
- Fixture API implementation - the holy grail!
- Travel API implementation

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML is the language used to display and structure information on any website.

- [CSS3](https://en.wikipedia.org/wiki/CSS3)
    - Cascading Style Sheets is the language used to style HTML content.

- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap's grid framework helped me bring my initial wireframe ideas to life.

- [Javascript](https://www.javascript.com/)
    - The language that makes the web interactive.

- [jQuery](https://jquery.com/)
    - An open-source Javascript library that simplifies interactive web design.

- [Font Awesome](https://fontawesome.com/)
    - Font Awesome's free package provides a comprehensive icon suite that is fully customisable in CSS.
    
- [Google Fonts](https://fonts.google.com/)
    - Google's free service provided countless fonts to help your project stand out.

- [Gitpod](https://www.gitpod.io/)
    - A software development editor perfect for personal or collaborative use.

- [GitHub](https://www.github.com/)
    - The world's leading code-hosting platform.

- [EmailJS](https://www.emailjs.com/)
    - Client-side Javascript software that I used to create the this project's contact form.

- [Balsamiq](https://www.balsamiq.com/)
    - An intuitive drafting tool that enables visual planning at the start of a project.

- [Pixlr](https://www.pixlr.com/)
    - Pixlr is a great free software package that enabled me to quickly pick out hex colors and edit images;

- [Favicon.io](https://favicon.io/)
    - A quick and easy tool to create favicons for display in the address bar.

- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview)
    - Allows installation and customisation of Google's map engine, as well as a large amount of requests, for no fee.

- [Google Places API](https://developers.google.com/places/web-service/overview/)
    - Google's world-leading destination library can be bolted on to the initial Javascript API request to return the details of millions of locations worldwide.

- [Google Routes API](https://cloud.google.com/maps-platform/routes)
    - 


## Testing

I have included a [testing log](TESTING.md) within the repository.

>>> In terms of look and feel, the site is similar across all browsers. The tablet and desktop views are almost identical, while mobile devices always drop into col-12 formatting.

>>> I tested this project primarily on Firefox but also Chrome and Edge, taking advantage of the screen size options to test using iPad, Samsung Galaxy and Kindle Fire. I also tested the site on my own Huawei device.

## Deployment

I used [GitHub](https://www.github.com/) as the host for this project, and [GitPod](https://www.gitpod.io/) to write it, using just one branch.

I deployed this project to GitHub Pages using the following method:

    Locate the desired repository in your repository list and open it;
    Navigate to the Settings heading in the repository heading;
    Locate the GitHub Pages heading at the bottom of the page;
    Click the button beneath the Source sub-heading and change this from 'None' to 'Master Branch';
    Once the page reloads, locate the GitHub Pages heading again;
    If successful, a green box will appear beneath the heading with the link to your deployed page;
    This page will only update with new content once that content has been pushed from your developer environment.

### Cloning

Assuming you already have Git [installed](https://git-scm.com/download/), anybody can clone this repository by following these steps:

    Open the command prompt/terminal on your machine;
    Type the command 'cd' followed by the directory you wish to store the repository in;
    Go to the top of the [GitHub repository](https://github.com/kiehozero/away-day/) and click the green 'Code' drop-down button;
    Copy the [link provided](https://github.com/kiehozero/away-day.git);
    Return to the Command Prompt and type 'git clone' followed by the copied address.

For an in-depth guide to cloning repositories, click [here](https://www.howtogeek.com/451360/how-to-clone-a-github-repository/), from which my steps above were taken.

## Credits
- [Map help](https://www.sitepoint.com/google-maps-javascript-api-the-right-way/)
- [Map tutorial](https://www.youtube.com/playlist?list=PLgGbWId6zgaXFR4SW_3qJ55cxmEqRNIzx)
- [Google tutorials](https://developers.google.com/maps/documentation)
- [Google Code Labs tutorial](https://codelabs.developers.google.com/codelabs/google-maps-nearby-search-js/#0)
- [StackOverflow](https://stackoverflow.com/questions/18616040/bootstrap-horizontal-drop-down) - this link was the one that got the horizontal drop-down bar sorted
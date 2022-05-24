# invicta

## Used Technologies

### This app uses vue nuxt as a basis and scss preprocessor for work with styling and css

### Libraries and Nuxt Modules:

Three js: for work with 3D cards model on the main page;
Sharer js: for sharing with people if device doesn't support navigator share api;
Vue Emoji Picker: for work with emojies in the chat and bio in vue and nuxt;
Cookie Universal Nuxt: for work with cookies for saving logged in state in nuxt;
Nuxt Uid Nuxt: for help to generate random ids in nuxt(not neccesary);
Smooth Scroll: for smooth scroll on website

Also will use:
Chart js: for work with charts in dashboards and invicta ads;
Some library for avatar cropping for changing user avatar;

## Application data

Because data on the website will load dynamically from apis and databases I stored all data in global store called vuex modules
from where I dynamically loaded it. Of course the data from vuex is not asynchronous and you will need to adjust the code it will make the work easier and faster. All this data is in store folder. There are vuex modules for products data, users data, leaderboard data, updates data, terms data, invicta ads campaigns data and index.js file contains reusable functions across the app and work with local user object copy(I will change some logic of this file).

## Application responsiveness and adaptiveness

At the end this website will have full adaptiveness: on phone vertical, on phone horizontal, on tablet vertical, on tablet horizontal, on change of the device orientation, on laptops small and big, on 4k monitors, on IOS, on Windows, on Android. All of that because I used the rem approach for the styling(I used rem as the main unit, not px), and because of big amount of media queries. The break point where desktop design version changes to mobile design version is 850px width. General app styling setup is in assets/css/style.css file,
scss variables and mixins are in assets/scss folder, the specific component stylings are in .vue files.

## Application redirects

The middleware contains redirect files for different situations: if user is logged in, if user is not logged in, if page url is exist, if user is exist, if product is exist, if shopping item is exist, if order is exist, if email for forgot password is not added, if confirmation code for forgot password is not added.

## Application images and media

Application svg icon files are located in assets/svg folder, img files are located in assets/img, img files and other files that load dymanically are located in static folder.

## Js code

Js code is structurized and have comments. Js code is located in .vue files, in vuex modules (store folder, in index.js and users.js),
in middleware(for redirects) and some libraries initialization is located in static/libraries.js.

## Hosting

The nuxt app can be build in three types: single-page app, static html app and server-side-rendering app.
For single-page app you don't need anything special;
For static html app you may need to make some special configuration in build: {} in nuxt.config.js;
For server-server-side app you need special node js host;

Single-page application is worse for SEO;


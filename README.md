This is a simple script I made to try to handle version control with anki

The objective is to unpack files that come from the crowdanki plugin in a way that every card receives its own folder.

Usage: 
    you need Node.js with npm or yarn to run this script.

    - Create a /dist folder in the root of this project
    - Follow the crowdanki to export the deck you want to this /dist folder.
    - Go to the unpack.js file and change the 'deckName' variable to the name of your deck (the name of the folder 
    inside '/dist').

    run:
        yarn unpack
        or 
        npm run unpack

//TODO
    - unpack not only the cards, but the deck configuration
    - create the 'pack.js' script
    - maybe change everything to python, because anki is in python

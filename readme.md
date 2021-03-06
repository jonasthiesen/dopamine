# Dopamine
This is a an app that removes the dopamine loops that most sites implement to keep you on their site.

## How to install
Clone the repo and cd into the directory:
`git clone https://github.com/jonasthiesen/dopamine && cd dopamine`

Then install the node modules:
`npm install`

Lastly, compile the JavaScript:
`gulp babel`

Go to the Chrome Extensions tab and enable developer mode.

Load the extension's "app" folder.

## How does it work
It has three modes: off, dopamine, and block.

**Off** does, as the name suggests, turn the chrome extension off and thus doesn't do anything. Can be useful if you want to have the "full experience" as the site intended (e.g. see related videos on YouTube).

**Dopamine** removes all the dopamine loops that the site uses, but still enables you to visit the site. This is useful if you e.g. want to watch a video on Youtube, but you don't want to end up watching another video because you get distracted.

**Block** goes a step further and blocks addictive sites altogether. Can be very useful when you want to get shit done and don't want to end up browsing on Reddit.
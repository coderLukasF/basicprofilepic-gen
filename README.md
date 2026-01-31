# Basic profile picture generator
This repository is just a simple profile picture generator, with a background and text color. It saves the image as a png as output.png
If you need a basic profile picture generator for your website, this should work pretty well. It is NodeJS and requires the canvas package, which is pretty easy to install:
```shell
npm install canvas
```

The function has very simple parameters. Here is an example:
```javascript
generateProfilePicture("Lukas", "#ff5522", "#FFF", 800, 800);
```

The first parameter is the name, which the program shortens into the first letter for the text.
The second parameter is the background color, make sure its a hex.
The third parameter is the text color, make sure its a hex.
_Psst.. If you are making a random hex generator, make sure to add some filtering to the background color and text so you wont accidentally get the same color background color and text color and cant read it._

The fourth parameter is the width in pixels of the image.
The fifth parameter is the height in pixels of the image.

If I dont respond to your PR within 1 business day, please email me.
z

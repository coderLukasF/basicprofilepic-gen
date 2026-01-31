const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');


function generateProfilePicture(name, bg_color, text_color, width, height) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const letter = name[0];

    ctx.fillStyle = bg_color;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = text_color;
    ctx.font = String((width + height) / 3) + 'px Arial';

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    ctx.fillText(String(letter), width / 2, height / 2);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./output.png', buffer);
}

generateProfilePicture("Lukas", "#ff5522", "#FFF", 800, 800);

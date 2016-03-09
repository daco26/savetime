# savetime

**savetime** is the combination of a Photoshop template and a .jsx script, which generates 1440 image files - one for every minute of the day, in style of a digital clock.

### Why and what for?

**Good question**. I had a digital photo frame left over, which I wanted to use as a clock. Since the digital photo frame was quite old and did not have a function to show the time I was looking for a set of images for every minute of the day, which I would simply display in a **one-image-per-minute-slideshow**.

### Photoshop template and script

For that I created a Photoshop template, which contains layers for every number from 0 to 9 on every digit of the digital clock, looking like the following for 23:59.

![Screenshot](https://dl.dropboxusercontent.com/u/6529185/2359.jpg)

With my associated script Photoshop automatically generates 1440 .jpg, one for every minute of the day with a suitable filename.
	
	0000.jpg 
	0001.jpg
	...
	2359.jpg
	
### How to run the script
	
To run the script open the .psd file in Photoshop and open the .jsx file via `File > Scripts > Browse`.

Photoshop then automatically generates the image files in the same directory the .psd is located in. Filesize will probably be around ~90KB for each file, resulting in about 130MB of data in total.

Hint: Currently no progress bar is displayed while the script is executed. If something goes wrong Photoshop itself would display an error message. Also aborting the generation of the image files is not possible right now.

### External Links

 * Digital clock template used to create my Photoshop template [Link](http://www.psdgraphics.com/templates/digital-clock-template-psd/)
 * Scripting a Save as command [Link](https://forums.adobe.com/message/2652664#2652664)
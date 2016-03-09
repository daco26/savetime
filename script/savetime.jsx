var doc = app.activeDocument;

// layers for "0" for each possible digit
var zero1 = doc.layerSets.getByName("0").artLayers.getByName("0.1");
var zero2 = doc.layerSets.getByName("0").artLayers.getByName("0.2");
var zero3 = doc.layerSets.getByName("0").artLayers.getByName("0.3");
var zero4 = doc.layerSets.getByName("0").artLayers.getByName("0.4");

// layers for "1" for each possible digit
var one1 = doc.layerSets.getByName("1").artLayers.getByName("1.1");
var one2 = doc.layerSets.getByName("1").artLayers.getByName("1.2");
var one3 = doc.layerSets.getByName("1").artLayers.getByName("1.3");
var one4 = doc.layerSets.getByName("1").artLayers.getByName("1.4");

// layers for "2" for each possible digit
var two1 = doc.layerSets.getByName("2").artLayers.getByName("2.1");
var two2 = doc.layerSets.getByName("2").artLayers.getByName("2.2");
var two3 = doc.layerSets.getByName("2").artLayers.getByName("2.3");
var two4 = doc.layerSets.getByName("2").artLayers.getByName("2.4");

// layers for "3" for each possible digit
var three2 = doc.layerSets.getByName("3").artLayers.getByName("3.2");
var three3 = doc.layerSets.getByName("3").artLayers.getByName("3.3");
var three4 = doc.layerSets.getByName("3").artLayers.getByName("3.4");

// layers for "4" for each possible digit
var four2 = doc.layerSets.getByName("4").artLayers.getByName("4.2");
var four3 = doc.layerSets.getByName("4").artLayers.getByName("4.3");
var four4 = doc.layerSets.getByName("4").artLayers.getByName("4.4");

// layers for "5" for each possible digit
var five2 = doc.layerSets.getByName("5").artLayers.getByName("5.2");
var five3 = doc.layerSets.getByName("5").artLayers.getByName("5.3");
var five4 = doc.layerSets.getByName("5").artLayers.getByName("5.4");

// layers for "6" for each possible digit
var six2 = doc.layerSets.getByName("6").artLayers.getByName("6.2");
var six4 = doc.layerSets.getByName("6").artLayers.getByName("6.4");

// layers for "7" for each possible digit
var seven2 = doc.layerSets.getByName("7").artLayers.getByName("7.2");
var seven4 = doc.layerSets.getByName("7").artLayers.getByName("7.4");

// layers for "8" for each possible digit
var eight2 = doc.layerSets.getByName("8").artLayers.getByName("8.2");
var eight4 = doc.layerSets.getByName("8").artLayers.getByName("8.4");

// layers for "9" for each possible digit
var nine2 = doc.layerSets.getByName("9").artLayers.getByName("9.2");
var nine4 = doc.layerSets.getByName("9").artLayers.getByName("9.4");

// one array for each digit 
// first digit can only be 0, 1 or 2
// second digit can be 0 - 9
// third digit can be 0 - 5
// fourth digit can be 0 - 9 
var digitOne   = [zero1, one1, two1];
var digitTwo   = [zero2, one2, two2, three2, four2, five2, six2, seven2, eight2, nine2];
var digitThree = [zero3, one3, two3, three3, four3, five3];
var digitFour  = [zero4, one4, two4, three4, four4, five4, six4, seven4, eight4, nine4];

// later file name
var saveName;

for(var i=0; i<3; i++){ // first digit can be 0, 1 or 2

	for(var a=0; a<digitOne.length; a++){ // hide all layers on position of first digit
		digitOne[a].visible = false;
	}
	digitOne[i].visible = true; // only make the respective layer visible

	for(var j=0; j<10; j++){ // second digit can be 0 - 9, except when first digit is 2, then only 0 - 3 is possible

		if(i==2 && j>3){ // break if first digit is 2 and the second digit would be 4
			break;
		}

		for(var b=0; b<digitTwo.length; b++){
			digitTwo[b].visible = false;
		}
		digitTwo[j].visible = true;

		for(var k=0; k<6; k++){ // third digit can be 0 - 5

			for(var c=0; c<digitThree.length; c++){
				digitThree[c].visible = false;
			}
			digitThree[k].visible = true;

			for(var l=0; l<10; l++){ // fourth digit can be 0 - 9

				for(var d=0; d<digitFour.length; d++){
					digitFour[d].visible = false;
				}
				digitFour[l].visible = true;

				// create new filename like 0000.jpg representing a time of 00:00 
				saveName = new File(decodeURI(doc.path)+'/'+i+j+k+l+'.jpg');
				// save the current file to disk
				saveJPEG(doc, saveName, 10);
			}
		}
	}	
}

function saveJPEG(doc, saveFile, qty) {  
     var saveOptions = new JPEGSaveOptions();  
     saveOptions.embedColorProfile = true;  
     saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
     saveOptions.matte = MatteType.NONE;  
     saveOptions.quality = qty;   
     doc.saveAs(saveFile, saveOptions, true);  
}  
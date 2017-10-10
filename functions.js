function adjustFontSize(containerElement, spanElement){
	var spanLength = spanElement.textContent.length;
	var containerWidth = containerElement.getBoundingClientRect().width;
	var spanWidth = spanElement.getBoundingClientRect().width;
	var containerFontSize = containerElement.style.fontSize.slice(0,-2);
	var delta = {diffPerLetter:0,last:""};
	var counter = 1;
	delta.diffPerLetter = Math.abs((containerWidth-spanWidth)/spanLength);
	if(containerWidth-spanWidth>0){
		if(delta.last=="minus"){
			delta.diffPerLetter = delta.diffPerLetter/2;
		}
		delta.last="plus";
		containerFontSize = Number(containerFontSize) + delta.diffPerLetter;
	}else{
		if(delta.last=="plus"){
			delta.diffPerLetter = delta.diffPerLetter/2;
		}
		delta.last=="minus";
		containerFontSize = Math.abs(Number(containerFontSize) - delta.diffPerLetter);
	}
	containerElement.style.fontSize = containerFontSize+"px";
	containerWidth = containerElement.getBoundingClientRect().width;
	spanWidth = spanElement.getBoundingClientRect().width;
	
	if(Math.abs(containerWidth-spanWidth)>.1){
		counter += adjustFontSize(containerElement, spanElement)
	}
	return counter;
}

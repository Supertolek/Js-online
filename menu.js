input = document.getElementById("jsFileOpen");

input.onchange = e => {
	// Loading the file
	file = e.target.files[0]; 
	print("Executing " + file.name, false, false);

	// setting up the reader
	reader = new FileReader();
	reader.readAsText(file,"UTF-8");

	reader.onload = readerEvent => {
		eval(readerEvent.target.result); // Executing the content
	}
}

// Colors pickers
function initColorPickers() {
	selectionColorInput.value = document.documentElement.style.getPropertyValue("--selection").substr(0, 7);
	selectionAlphaInput.value = parseInt(document.documentElement.style.getPropertyValue("--selection").substr(7, 2), 16);
	backgroundColorInput.value = document.documentElement.style.getPropertyValue("--background");
	textColorInput.value = document.documentElement.style.getPropertyValue("--text");
	stringsColorInput.value = document.documentElement.style.getPropertyValue("--string");
	numbersColorInput.value = document.documentElement.style.getPropertyValue("--number");
	titlesColorInput.value = document.documentElement.style.getPropertyValue("--title");
	builtinColorInput.value = document.documentElement.style.getPropertyValue("--built_in");
	keywordsColorInput.value = document.documentElement.style.getPropertyValue("--keyword");
	functionsColorInput.value = document.documentElement.style.getPropertyValue("--function");
	parametersColorInput.value = document.documentElement.style.getPropertyValue("--params");
	commentsColorInput.value = document.documentElement.style.getPropertyValue("--comment");
}
function saveColorPickers() {
	document.documentElement.style.setProperty("--selection", selectionColorInput.value + parseInt(selectionAlphaInput.value).toString(16));
	document.documentElement.style.setProperty("--background", backgroundColorInput.value);
	document.documentElement.style.setProperty("--text", textColorInput.value);
	document.documentElement.style.setProperty("--string", stringsColorInput.value);
	document.documentElement.style.setProperty("--number", numbersColorInput.value);
	document.documentElement.style.setProperty("--title", titlesColorInput.value);
	document.documentElement.style.setProperty("--built_in", builtinColorInput.value);
	document.documentElement.style.setProperty("--keyword", keywordsColorInput.value);
	document.documentElement.style.setProperty("--function", functionsColorInput.value);
	document.documentElement.style.setProperty("--params", parametersColorInput.value);
	document.documentElement.style.setProperty("--comment", commentsColorInput.value);
}

viewButton = document.getElementById("menu-view");
wholeConsole = document.getElementById("console");
viewSettings = document.getElementById("viewsettings");

viewButton.addEventListener("click", function handleClick() {
	if (viewButton.innerHTML == "View") {
		viewButton.innerHTML = "Exit";
		wholeConsole.style.display = "none";
		initColorPickers();
		viewSettings.style.display = "block";
	} else {
		saveColorPickers();
		viewButton.innerHTML = "View";
		wholeConsole.style.display = "block";
		viewSettings.style.display = "none";
	}
});
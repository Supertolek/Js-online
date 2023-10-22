selectionColorInput = document.getElementById("selection")
selectionAlphaInput = document.getElementById("selectionAlpha")

backgroundColorInput = document.getElementById("background")

textColorInput = document.getElementById("text")

stringsColorInput = document.getElementById("strings")

numbersColorInput = document.getElementById("numbers")

titlesColorInput = document.getElementById("titles")

builtinColorInput = document.getElementById("builtin")

keywordsColorInput = document.getElementById("keywords")

functionsColorInput = document.getElementById("functions")

parametersColorInput = document.getElementById("parameters")

commentsColorInput = document.getElementById("comments")
document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
	  	document.documentElement.style = "--selection: #e0923a2d;--background: #000000;--text: #ffffff;--string: #67b26d;--number: #e8a04e;--title: #9e4ee8;--built_in: #e25158--keyword: #e5b742;--function: #e0923a;--params: #508be5;--comment: #7f7f7f;";
	}
};
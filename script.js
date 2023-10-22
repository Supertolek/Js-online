hljs.configure({ 'languages': ['javascript'] });

consoleview = document.getElementById("consoleOutput");

function print(content, highlight, withprompt) {
	// Prompt
	if (withprompt) {
		prompt = document.createElement("p")
		prompt.innerHTML = "> ";
		prompt.style = "display: inline;";
		consoleview.appendChild(prompt);
	}
	// Code output
	highlightedCode = document.createElement("code");
	highlightedCode.innerHTML = content;
	highlightedCode.classList.add("language-javascript")
	// Adding elements to console
	consoleview.appendChild(highlightedCode);
	consoleview.appendChild(document.createElement("br"));
	if (highlight) {
		hljs.highlightElement(highlightedCode);
	}
}

// Redirecting console
console.stdlog = console.log.bind(console);
console.logs = [];

console.log = function() {
	console.logs.push(Array.from(arguments));
	console.stdlog.apply(console, arguments);
	if (arguments.length > 0) {
		toprint = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			toprint = toprint.concat(", ", arguments[i]);
		}
		print(toprint, true, false);
	} else {
		print("null", true, false)
	}
}

// Managing input
var input = document.getElementById("commandline"); // get the input element
input.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
input.addEventListener("keydown", resetInput); // bind the "resetInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
	this.style.width = Math.max(this.value.length, 100) + "ch";
}

function resetInput() {
	if (event.key === "Enter") {
		if (this.value != "") {
			print(this.value, true, true)
			try {
				eval(this.value)
			} catch(err) {
				print(err.message, false, false);
			}
			this.value = ""
		}
	}
}
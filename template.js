var m;
function getName() {//Must Match the filename (Including Case)
	return "Template"
}
function getCommands() {//returns a "|" separated list of valid commands
	return "TemplateCommand1|TemplateCommand2";
}
function init(manager) {
	m = manager//Stores the plugin manager for future use (Recommended)
}
function exec(command, args) {
	if (command == "TemplateCommand1") {
		var out = ""
		out += "You have run TemplateCommand1";
		return out;
	} else if (command == "TemplateCommand2") {
		var out = ""
		out += "You have run TemplateCommand2";
		return out;
	} else {
		return command;
	}
}
function close(manager) {//Clean up anything if needed
	println("Closing" + getName());
}

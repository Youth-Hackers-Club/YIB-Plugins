var m;
function getName() {
	return "HEGX60Utils"
}
function getCommands() {
	return "list";
}
function init(manager) {
	m = manager
}
function exec(command, args) {
	if (command == "list") {
		var out = "";
		for (var i in m.getPlugins()) {
			out += m.getPlugins()[i].getName() + "|"
		}
		return out;
	} else {
		return command;
	}
}
function close(manager) {
	println("Close: " + getName() + " from " + manager);
}

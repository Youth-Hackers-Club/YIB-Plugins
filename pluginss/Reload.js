var m;
function getName() {
	return "Reload"
}
function getCommands() {
	return "reload";
}
function init(manager) {
	m = manager
}
function exec(command, args) {
	if (command == "reload") {
		return "NYI cause HEG.";
	} else {
		return command;
	}
}
function close(manager) {
	println("Closing" + getName());
}
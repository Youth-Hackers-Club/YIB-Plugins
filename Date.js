var m;
function getName() {
	return "Date"
}
function getCommands() {
	return "date";
}
function init(manager) {
	m = manager
}
function exec(command, args) {
	command = command.toLowerCase();
	if (command == "date") {
		var words = "The date is: ";
		var time = new Date();
		words += time.substring(0, 15);
		return words;
	} if (command == "time") {
		var words = "The time is: ";
		var time = new Date();
		words += time.substring(16, 39);
		return words;
	} else {
		return command;
	}
}
function close(manager) {
	println("Closing" + getName());
}
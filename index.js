import hms from 'hours-minutes-seconds';
const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const text = {
	black: "\x1b[30m",
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	magenta: "\x1b[35m",
	cyan: "\x1b[36m",
	white: "\x1b[37m",
	crimson: "\x1b[38m",
	none: ""
};
const background = {
	black: "\x1b[40m",
	red: "\x1b[41m",
	green: "\x1b[42m",
	yellow: "\x1b[43m",
	blue: "\x1b[44m",
	magenta: "\x1b[45m",
	cyan: "\x1b[46m",
	white: "\x1b[47m",
	crimson: "\x1b[48m",
	none: ""
};
const resolveColors = (type, color) => {
	if (type === "text") {
		return text[color];
	}
	else {
		return background[color];
	}
};
export default (message, options) => {
	const timeColor = resolveColors("text", options?.time?.color || options?.color || "white");
	const timeBackground = resolveColors("background", options?.time?.background || options?.background || "none");
	const timeDim = (options?.time?.dim || options?.dim) ? dim : "";
	const timeBright = (options?.time?.bright || options?.bright) ? bright : "";
	const timeUnderscore = (options?.time?.underscore || options?.underscore) ? underscore : "";
	const timeString = timeColor + timeBackground + timeDim + timeBright + timeUnderscore;
	const messageColor = resolveColors("text", options?.message?.color || options?.color || "white");
	const messageBackground = resolveColors("background", options?.message?.background || options?.background || "none");
	const messageDim = (options?.message?.dim || options?.dim) ? dim : "";
	const messageBright = (options?.message?.bright || options?.bright) ? bright : "";
	const messageUnderscore = (options?.message?.underscore || options?.underscore) ? underscore : "";
	const messageString = messageColor + messageBackground + messageDim + messageBright + messageUnderscore;
	console.log(`${timeString}${hms()}${reset} ${messageString}%s${reset}`, message);

};
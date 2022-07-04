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
	var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
	const timeColor = resolveColors("text", ((_a = options === null || options === void 0 ? void 0 : options.time) === null || _a === void 0 ? void 0 : _a.color) || (options === null || options === void 0 ? void 0 : options.color) || "none");
	const timeBackground = resolveColors("background", ((_b = options === null || options === void 0 ? void 0 : options.time) === null || _b === void 0 ? void 0 : _b.color) || (options === null || options === void 0 ? void 0 : options.color) || "none");
	const timeDim = (((_c = options === null || options === void 0 ? void 0 : options.time) === null || _c === void 0 ? void 0 : _c.dim) || (options === null || options === void 0 ? void 0 : options.dim)) ? dim : "";
	const timeBright = (((_d = options === null || options === void 0 ? void 0 : options.time) === null || _d === void 0 ? void 0 : _d.bright) || (options === null || options === void 0 ? void 0 : options.bright)) ? bright : "";
	const timeUnderscore = (((_e = options === null || options === void 0 ? void 0 : options.time) === null || _e === void 0 ? void 0 : _e.underscore) || (options === null || options === void 0 ? void 0 : options.underscore)) ? underscore : "";
	const timeString = timeColor + timeBackground + timeDim + timeBright + timeUnderscore;
	const messageColor = resolveColors("text", ((_f = options === null || options === void 0 ? void 0 : options.message) === null || _f === void 0 ? void 0 : _f.color) || (options === null || options === void 0 ? void 0 : options.color) || "none");
	const messageBackground = resolveColors("background", ((_g = options === null || options === void 0 ? void 0 : options.message) === null || _g === void 0 ? void 0 : _g.color) || (options === null || options === void 0 ? void 0 : options.color) || "none");
	const messageDim = (((_h = options === null || options === void 0 ? void 0 : options.message) === null || _h === void 0 ? void 0 : _h.dim) || (options === null || options === void 0 ? void 0 : options.dim)) ? dim : "";
	const messageBright = (((_j = options === null || options === void 0 ? void 0 : options.message) === null || _j === void 0 ? void 0 : _j.bright) || (options === null || options === void 0 ? void 0 : options.bright)) ? bright : "";
	const messageUnderscore = (((_k = options === null || options === void 0 ? void 0 : options.message) === null || _k === void 0 ? void 0 : _k.underscore) || (options === null || options === void 0 ? void 0 : options.underscore)) ? underscore : "";
	const messageString = messageColor + messageBackground + messageDim + messageBright + messageUnderscore;
	console.log(`${timeString}${hms()}${reset} ${messageString}%s${reset}`, message);
};
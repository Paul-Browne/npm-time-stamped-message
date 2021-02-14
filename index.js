const hms = require('hours-minutes-seconds');

const colorCodes = {
	reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    color: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m"
    },
    background: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};

module.exports = (message, opt) => {
	message = message || "";
	opt = opt || {}
	opt.time = opt.time || {
		color: "",
		background: "",
		dim: true,
		bright: false,
		underscore: false
	};
	opt.message = opt.message || {
		color: "",
		background: "",
		dim: false,
		bright: false,
		underscore: false
	};	
	const timeColor = colorCodes.color[opt.time.color] || "";
	const timeBackground = colorCodes.background[opt.time.background] || "";
	const timeDim = opt.time.dim ? colorCodes.dim : "";
	const timeBright = opt.time.bright ? colorCodes.bright : "";
	const timeUnderscore = opt.time.underscore ? colorCodes.underscore : "";
	const timeString = timeColor + timeBackground + timeDim + timeBright + timeUnderscore;
	const messageColor = colorCodes.color[opt.message.color] || "";
	const messageBackground = colorCodes.background[opt.message.background] || "";
	const messageDim = opt.message.dim ? colorCodes.dim : "";
	const messageBright = opt.message.bright ? colorCodes.bright : "";
	const messageUnderscore = opt.message.underscore ? colorCodes.underscore : "";
	const messageString = messageColor + messageBackground + messageDim + messageBright + messageUnderscore;
	console.log(`${timeString}${hms()}${colorCodes.reset} ${messageString}%s${colorCodes.reset}`, message);
}
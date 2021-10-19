# time-stamped-console-log
A simple time stamped console.log()

### usage

`npm i time-stamped-console-log`

or 

`npm i -D time-stamped-console-log`


###### if the time was quarter past nine in the morning

```js
import message from 'time-stamped-console-log';
message("hello world!");  
// 09:15:27 hello world!
```

Options. All options are optional :)

```js
import message from 'time-stamped-console-log';
message("hello world!", {
	time: {
		color: string,
		background: string,
		dim: boolean,			// default: true
		bright: boolean,		// default: false
		underscore: boolean		// default: false
	},
	message: {
		color: string,			
		background: string,
		dim: boolean,			// default: false
		bright: boolean,		// default: false
		underscore: boolean		// default: false
	}	
});  
```

color and background choices are: 

- "red"
- "green"
- "blue"
- "black"
- "yellow"
- "cyan"
- "magenta"
- "white"
- "crimson"







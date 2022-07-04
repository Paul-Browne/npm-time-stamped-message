declare type Colors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "white" | "crimson" | "none";
declare type BackgroundColors = Colors;
declare type Options = {
    reset: Boolean;
    bright: Boolean;
    dim: Boolean;
    underscore: Boolean;
    color: Colors;
    background: BackgroundColors;
    time: {
        reset: Boolean;
        bright: Boolean;
        dim: Boolean;
        underscore: Boolean;
        color: Colors;
        background: BackgroundColors;
    };
    message: {
        reset: Boolean;
        bright: Boolean;
        dim: Boolean;
        underscore: Boolean;
        color: Colors;
        background: BackgroundColors;
    };
};
declare const _default: (message: String, options?: Options) => void;
export default _default;
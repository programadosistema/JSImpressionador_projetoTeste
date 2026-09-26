export const turbologger = (message, textcolor = 'blue') => { 
    const textStyle = `color: ${textcolor}`;
    console.log(`%c${message}`, textStyle);
    };
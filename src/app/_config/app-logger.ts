export class Logger{
    constructor() { }
    isConsole:boolean=true;
    /**
     * 
     * @param msg  console log when isConsole flag is true
     */
    log(msg:any)
     {
       if(this.isConsole) //check isConsole log value
       console.log(msg);
     }
}
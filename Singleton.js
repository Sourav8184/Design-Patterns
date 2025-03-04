"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
const s3 = Singleton.getInstance();
if (s1 === s2 && s2 === s3 && s3 === s1)
    console.log("All are same");

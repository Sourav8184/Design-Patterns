"use strict";
// Concrete Observer classes (Subscribers)
class User1 {
    updateAll(message) {
        console.log(`User1 received update: ${message}`);
    }
}
class User2 {
    updateAll(message) {
        console.log(`User2 received update: ${message}`);
    }
}
class User3 {
    updateAll(message) {
        console.log(`User3 received update: ${message}`);
    }
}
class User4 {
    updateAll(message) {
        console.log(`User4 received update: ${message}`);
    }
}
class User5 {
    updateAll(message) {
        console.log(`User5 received update: ${message}`);
    }
}
class User6 {
    updateAll(message) {
        console.log(`User6 received update: ${message}`);
    }
}
// Concrete Subject classes (Publishers)
class YTChannel1 {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
        console.log("Observer added.");
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
        console.log("Observer removed.");
    }
    notifyAllObserver(message) {
        console.log("Notifying all observers...");
        this.observers.forEach((observer) => observer.updateAll(message));
    }
}
// Concrete Subject classes (Publishers)
class YTChannel2 {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
        console.log("Observer added.");
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
        console.log("Observer removed.");
    }
    notifyAllObserver(message) {
        console.log("Notifying all observers...");
        this.observers.forEach((observer) => observer.updateAll(message));
    }
}
const yt1 = new YTChannel1();
yt1.addObserver(new User1());
yt1.addObserver(new User2());
yt1.addObserver(new User3());
yt1.notifyAllObserver("YTChannel1");
const yt2 = new YTChannel2();
yt2.addObserver(new User4());
yt2.addObserver(new User5());
yt2.addObserver(new User6());
yt2.notifyAllObserver("YTChannel2");

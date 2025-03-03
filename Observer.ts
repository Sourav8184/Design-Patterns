// Observer interface (Subscribers)
interface Observer {
  updateAll(message: string): void;
}

// Concrete Observer classes (Subscribers)
class User1 implements Observer {
  updateAll(message: string): void {
    console.log(`User1 received update: ${message}`);
  }
}

class User2 implements Observer {
  updateAll(message: string): void {
    console.log(`User2 received update: ${message}`);
  }
}

class User3 implements Observer {
  updateAll(message: string): void {
    console.log(`User3 received update: ${message}`);
  }
}

class User4 implements Observer {
  updateAll(message: string): void {
    console.log(`User4 received update: ${message}`);
  }
}

class User5 implements Observer {
  updateAll(message: string): void {
    console.log(`User5 received update: ${message}`);
  }
}

class User6 implements Observer {
  updateAll(message: string): void {
    console.log(`User6 received update: ${message}`);
  }
}

// Subject interface (Publisher)
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyAllObserver(message: string): void;
}

// Concrete Subject classes (Publishers)
class YTChannel1 implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
    console.log("Observer added.");
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer removed.");
  }

  notifyAllObserver(message: string): void {
    console.log("Notifying all observers...");
    this.observers.forEach((observer) => observer.updateAll(message));
  }
}

// Concrete Subject classes (Publishers)
class YTChannel2 implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
    console.log("Observer added.");
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer removed.");
  }

  notifyAllObserver(message: string): void {
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

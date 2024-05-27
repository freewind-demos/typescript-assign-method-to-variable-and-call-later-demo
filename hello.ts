class User {
    constructor(private name: string) {

    }
    hello() {
        console.log("### hello", this.name)
    }

    safeHello = () => {
        console.log("### safeHello", this.name)
    }
}

const user = new User('Freewind');
const hello = user.hello.bind(user);
hello();

const safeHello = user.safeHello;
safeHello();

const badHello = user.hello;
// throw errors
badHello();

// throw errors
(user.hello ?? (() => { console.log('fake') }))();


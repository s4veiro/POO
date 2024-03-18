abstract class Account {
    name: string;
    accountNumber: number;
    balance: number = 0;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = () => {
        console.log('Voce depositou.');
    }

    withdraw = () => {
        console.log('Voce sacou.');
    }

    getBalance = () => {
        console.log(this.balance);
    }
}

class PeopleAccount extends Account {
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

const person1: PeopleAccount = new PeopleAccount(3883, 'Gabriel', 3);

console.log(person1);

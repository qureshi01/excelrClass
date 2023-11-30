class Account{
    constructor(type, registrationAmount){ //ARE VERY PRIVATE TO PARTICULAR CLASS
        this.type=type;
        this.registrationAmount=registrationAmount;
        this.balance=registrationAmount;
    }
    withdraw(amountToWithdraw){
        console.log(`I want to withdraw ${amountToWithdraw} from my ${this.type} account`);
    if(amountToWithdraw > this.balance){
        console.log("NOT ENOUGH BALANCE");
    }else{
        this.balance = this.balance - amountToWithdraw;
        console.log(`Witdraw Succesful. Your balance is ${this.balance}`)
    }
}
deposit(amountToDeposit){
    console.log(`I want to deposit ${amountToDeposit} to my ${this.type} account`);
    this.balance+=amountToDeposit;
    console.log(`Deposit Succesful. Your balance is ${this.balance}`)
}

}



class RetirementAccount extends Account{
    constructor(type,registrationAmount,points){
        super(type,registrationAmount); //CALLS THE PARENT CONSTRUCTOR
        this.balancePoints= points;

    }

    deposit(amountToDeposit){ //overriden function
        if(this.registrationAmount>1000){
        console.log(`I want to deposit ${amountToDeposit} to my ${this.type} account`);
        this.balance=this.balance + amountToDeposit+(amountToDeposit*0.5); 
        console.log(`Deposit Succesful. Your balance is ${this.balance}`)
    }else{
        super.deposit(amountToDeposit);
    }
}

deposit(amountToDeposit,special){ //overloaded function
    if(special === true){
    console.log(`I want to deposit ${amountToDeposit} to my ${this.type} account`);
    this.balance=this.balance + amountToDeposit+(amountToDeposit*0.5); 
    console.log(`Deposit Succesful. Your balance is ${this.balance}`)
}else{
    super.deposit(amountToDeposit);
}
}

    
}

// let account = new Account("savings",100);
// account.withdraw(30);
// account.deposit(50);

let registrationAmount=1500;
let retirementAccount =new RetirementAccount("retirement",registrationAmount,registrationAmount/10);
console.log(JSON.stringify(retirementAccount));
retirementAccount.withdraw(70);
retirementAccount.deposit(40,true);



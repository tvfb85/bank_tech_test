describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  })

  it('should have a balance', function() {
    expect(account.balance).toEqual(0);
  })

  it('the balance can be topped up', function() {
    account.deposit(5);
    expect(account.balance).toEqual(5);
  })

  it('the balance can be deducted', function() {
    account.deposit(50);
    account.withdraw(5);
    expect(account.balance).toEqual(45);
  })

  it('cannot deposit negative values', function() {
    expect(function() {
      account.deposit(-5);
    }).toThrowError('Transaction failed: cannot deposit negative values');
  })

  it('cannot withdraw negative values', function() {
    account.deposit(5);
    expect(function() {
      account.withdraw(-5);
    }).toThrowError('Transaction failed: cannot withdraw negative values');
  })

  it('cannot withdraw money if balance goes below zero', function() {
    expect(function() {
      account.withdraw(5);
    }).toThrowError('Transaction failed: insufficient funds available');

  })

  it('can print the balance', function() {
    expect(account.printStatement()).toEqual("Balance: 0");
  })


  // overdraft limit? checks for if this is exceeded

})

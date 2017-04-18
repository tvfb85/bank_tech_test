describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  })

  it('should have a balance', function() {
    expect(account.balance).toEqual(0);
  })

  it('money can be deposited', function() {
    account.deposit(5);
    expect(account.balance).toEqual(5);
  })

  it('money can be withdrawn', function() {
    account.deposit(50);
    account.withdraw(5);
    expect(account.balance).toEqual(45);
  })

  it('cannot deposit negative values', function() {
    expect(function() {
      account.deposit(-5);
    }).toThrowError('Transaction denied');
  })

  it('cannot withdraw negative values', function() {
    account.deposit(5);
    expect(function() {
      account.withdraw(-5);
    }).toThrowError('Transaction denied');
  })

  it('cannot withdraw money if balance goes below zero', function() {
    expect(function() {
      account.withdraw(5);
    }).toThrowError('Transaction denied');
  })

  it('can print the balance', function() {
    expect(account.printBalance()).toEqual("Balance: 0");
  })

  it('keeps a transaction log', function() {
    account.deposit(5);
    expect(account.transactions.length).toEqual(1);
  })

  it('saves the date of a transaction', function() {
    account.deposit(5);
    var today = new Date();
    expect(account.transactions[0]['Date']).toEqual(today.toDateString());
  })


  // overdraft limit? checks for if this is exceeded
  // save money to two-decimal places
  // add £ sign to values

})

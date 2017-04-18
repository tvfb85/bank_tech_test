(function(exports) {

  function Account(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  };

  Account.prototype.deposit = function(amount) {
    this._clearTransactionChecks('credit', amount) ? this.updateAccountForDepositTransaction(amount) : this._declineTransaction();
  };

  Account.prototype.withdraw = function(amount) {
    this._clearTransactionChecks('debit', amount) ? this.updateAccountForWithdrawalTransaction(amount) : this._declineTransaction();
  };

  Account.prototype.printBalance = function () {
    return "Balance: " + this.balance;
  };

  Account.prototype.printStatement = function() {
    console.table(this.transactions);
  };

  Account.prototype._updateAccountForDepositTransaction = function(amount) {
    this.balance += amount;
    var transaction = new Transaction(amount, 0, this.balance);
    this._recordTransaction(transaction);
  };

  Account.prototype._updateAccountForWithdrawalTransaction = function(amount) {
    this.balance -= amount;
    var transaction = new Transaction(0, amount, this.balance);
    this._recordTransaction(transaction);
  };

  Account.prototype._clearTransactionChecks = function(transactionType, amount) {
    if (transactionType === 'credit') {
      return (this._isPositiveValue(amount));
    } else if (transactionType === 'debit') {
      return (this._isPositiveValue(amount) && this._isSufficientFundsAvailable(amount));
    }
  };

  Account.prototype._isPositiveValue = function(amount) {
    return (amount > 0);
  };

  Account.prototype._isSufficientFundsAvailable = function(amount) {
    return this.balance - amount >= 0;
  };

  Account.prototype._declineTransaction = function() {
    throw new Error("Transaction denied");
  };

  Account.prototype._recordTransaction = function(transaction) {
    this.transactions.push(transaction);
    // var today = new Date();
    // if (transactionType = 'credit') {
    //
    //   this.transactions.push({Date: today.toDateString(), Credit: amount, Debit: '-', Balance: this.balance});
    // } else if (transactionType = 'debit') {
    //   this.transactions.push({Date: today.toDateString(), Credit: '-', Debit: amount, Balance: this.balance});
    // }
  };

  exports.Account = Account;
})(this);

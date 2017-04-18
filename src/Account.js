(function(exports) {

  function Account(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  };

  Account.prototype.deposit = function(amount) {
    this.clearTransactionChecks('credit', amount) ? this.updateAccountForDepositTransaction(amount) : this._declineTransation();
  };

  Account.prototype.withdraw = function(amount) {
    this.clearTransactionChecks('debit', amount) ? this.updateAccountForWithdrawalTransaction(amount) : this._declineTransation();
  };

  Account.prototype.updateAccountForDepositTransaction = function(amount) {
    this.balance += amount;
    this._recordTransaction('credit', amount);
  };

  Account.prototype.updateAccountForWithdrawalTransaction = function(amount) {
    this.balance -= amount;
    this._recordTransaction('debit', amount);
  };

  Account.prototype.printBalance = function () {
    return "Balance: " + this.balance;
  };

  Account.prototype.printStatement = function() {
    console.table(this.transactions);
  };

  Account.prototype.clearTransactionChecks = function(transactionType, amount) {
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

  Account.prototype._declineTransation = function() {
    throw new Error("Transaction denied");
  };

  Account.prototype._recordTransaction = function(transactionType, amount) {
    var today = new Date();
    if (transactionType = 'credit') {
      this.transactions.push({Date: today.toDateString(), Credit: amount, Debit: '-', Balance: this.balance});
    } else if (transactionType = 'debit') {
      this.transactions.push({Date: today.toDateString(), Credit: '-', Debit: amount, Balance: this.balance});
    }
  };

  exports.Account = Account;
})(this);

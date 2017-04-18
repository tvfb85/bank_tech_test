(function(exports) {

  function Account(balance = 0, statement = new Statement()) {
    this.balance = balance;
    this.statement = statement;
  };

  Account.prototype.deposit = function(amount) {
    this._clearTransactionChecks('credit', amount) ? this._updateAccountForDepositTransaction(amount) : this._declineTransaction();
  };

  Account.prototype.withdraw = function(amount) {
    this._clearTransactionChecks('debit', amount) ? this._updateAccountForWithdrawalTransaction(amount) : this._declineTransaction();
  };

  Account.prototype.printBalance = function () {
    return "Balance: " + this.balance;
  };

  Account.prototype.printStatement = function () {
    return this.statement.printTransactions();
  };

  Account.prototype._updateAccountForDepositTransaction = function(amount) {
    this.balance += amount;
    var transaction = new Transaction(amount, 0, this.balance);
    this.statement.recordTransaction(transaction);
  };

  Account.prototype._updateAccountForWithdrawalTransaction = function(amount) {
    this.balance -= amount;
    var transaction = new Transaction(0, amount, this.balance);
    this.statement.recordTransaction(transaction);
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

  exports.Account = Account;
})(this);

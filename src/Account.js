(function(exports) {

  function Account(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  };

  Account.prototype.deposit = function(amount) {
    (this._isPositiveValue(amount)) ? this.updateAccountForDeposit(amount) : this._declineTransation("cannot deposit negative values");

  };

  Account.prototype.updateAccountForDeposit = function(amount) {
    this.balance += amount;
    var today = new Date();
    this.transactions.push({Date: today.toDateString(), Credit: amount, Debit: 0, Balance: this.balance});
  };

  Account.prototype.withdraw = function(amount) {
    if (!this._isPositiveValue(amount)) {
      this._declineTransation("cannot withdraw negative values")
    } else if (!this._isSufficientFundsAvailable(amount)) {
      this._declineTransation("insufficient funds available");
    } else {
      this.updateAccountForWithdrawal(amount);
    }
  };

  Account.prototype.updateAccountForWithdrawal = function(amount) {
    this.balance -= amount;
    var today = new Date();
    this.transactions.push({Date: today.toDateString(), Credit: 0, Debit: amount, Balance: this.balance});
  };

  Account.prototype.printStatement = function() {
    return "Balance: " + this.balance;
  };

  Account.prototype._isPositiveValue = function(amount) {
    return (amount > 0);
  };

  Account.prototype._isSufficientFundsAvailable = function(amount) {
    return this.balance - amount >= 0;
  };

  Account.prototype._declineTransation = function(reason) {
    throw new Error("Transaction failed: " + reason);
  };

  exports.Account = Account;
})(this);

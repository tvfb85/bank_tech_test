(function(exports) {

  function Account(balance = 0) {
    this.balance = balance;
  };

  Account.prototype.deposit = function(amount) {
    (this._isPositiveValue(amount)) ? this.balance += amount : this._declineTransation("cannot deposit negative values");
  };

  Account.prototype.withdraw = function(amount) {
    if (!this._isPositiveValue(amount)) {
      this._declineTransation("cannot withdraw negative values")
    }
    (this._isSufficientFundsAvailable(amount)) ? this.balance -= amount : this._declineTransation("insufficient funds available");
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

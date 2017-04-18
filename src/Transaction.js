(function(exports) {

  function Transaction(credit, debit, balance) {
    this.date = new Date().toDateString();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  };

  exports.Transaction = Transaction;
})(this);

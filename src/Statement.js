(function(exports) {

  function Statement() {
    this.transactions = [];
  };

  Statement.prototype.printTransactions = function () {
    var log = this.transactions;
    console.log('Date || Credit || Debit || Balance');
    for (var i = 0; i < log.length; i ++) {
      console.log(log[i]['date'] + '||' + log[i]['credit'] + '||' + log[i]['debit'] + '||' + log[i]['balance']);
    }
    // console.table(this.transactions);
  };

  Statement.prototype.recordTransaction = function(transaction) {
    this.transactions.push(transaction);
    // var today = new Date();
    // if (transactionType = 'credit') {
    //
    //   this.transactions.push({Date: today.toDateString(), Credit: amount, Debit: '-', Balance: this.balance});
    // } else if (transactionType = 'debit') {
    //   this.transactions.push({Date: today.toDateString(), Credit: '-', Debit: amount, Balance: this.balance});
    // }
  };

  exports.Statement = Statement;

})(this);

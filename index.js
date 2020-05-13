var notes = [100, 50, 20, 10];
var withdraw = function (amount) {
    if (amount === null || amount === 0) {
        return [];
    }
    if ((amount < 0) || isNaN(parseFloat(String(amount)))) {
        throw new Error('InvalidArgumentException');
    }
    else if ((amount % 10) !== 0) {
        throw new Error('NoteUnavailableException');
    }
    var payment = [];
    for (var _i = 0, notes_1 = notes; _i < notes_1.length; _i++) {
        var note = notes_1[_i];
        while (amount >= note) {
            payment.push(note);
            amount -= note;
        }
    }
    return payment;
};
module.exports = { withdraw: withdraw };

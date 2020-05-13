const notes: number[] = [100, 50, 20, 10];

const withdraw = (amount: number) : number[] => {
  if (amount === null || amount === 0) {
    return [];
  }
  if ((amount < 0) || isNaN(parseFloat(String(amount)))) {
    throw new Error('InvalidArgumentException');
  } else if ((amount % 10) !== 0) {
    throw new Error('NoteUnavailableException');
  }

  const payment: number[] = [];
  for (const note of notes) {
    while (amount >= note) {
      payment.push(note);
      amount -= note;
    }
  }
  return payment;
};

module.exports = {withdraw};

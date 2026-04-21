/* app.js */

function updateSidebar(step) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById('s' + i).classList.remove('active');
  }
  if (step <= 5) document.getElementById('s' + step).classList.add('active');
}

function updateStatus(text) {
  document.getElementById('status').innerText = text;
}

function next(step) {
  document.getElementById('step' + step).classList.add('hidden');
  updateSidebar(step + 1);

  const messages = [
    "Sales Order Created",
    "Delivery Created",
    "Goods Issue Posted",
    "Invoice Generated",
    "Payment Received"
  ];

  updateStatus(messages[step - 1]);

  if (step === 5) {
    document.getElementById('complete').classList.remove('hidden');
    updateStatus("O2C Process Completed Successfully");
  } else {
    document.getElementById('step' + (step + 1)).classList.remove('hidden');
  }
}
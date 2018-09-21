self.addEventListener("message", mainMessage, true);

function mainMessage(e) {
    console.log("Worker received message");
    var currencyExchangeRate = [, 1.00, 0.86, 1.30];
    var rate = currencyExchangeRate[parseInt(e.data)];
    var message = {
        "rate": rate,
        "currency": e.data
    }
    self.postMessage(message);
    console.log("Worker has sent data");
}
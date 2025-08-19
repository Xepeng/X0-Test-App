import React from 'react';
import './App.css';
import { X0PayComponent } from 'x0-react-sdk';

function App() {
  // Example transaction params
  const transactionParams = {
    merchantNumber: '12345',
    transferAmount: 16000, // 10.5 USDC (number, not string)
    feeAmount: 0, // 0.5 USDC (number, not string)
    isInnerFee: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>X0Pay SDK Demo</h1>
      </header>
      <main>
        <X0PayComponent
          transactionParams={transactionParams}
          onSuccess={(txHash) => alert(`Success! ${txHash}`)}
          onError={(err) => alert(`Error: ${err.message}`)}
        />
      </main>
    </div>
  );
}

export default App;

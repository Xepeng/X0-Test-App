import React from 'react';
import './App.css';
import { X0PayComponent, X0PayClientConfig } from 'x0-react-sdk';

function App() {
  // X0Chain client configuration
  const clientConfig: X0PayClientConfig = {
    chains: [
      {
        chainId: '0x29b5d', // 170845 in hex (verified from RPC)
        name: 'X0',
        rpcUrls: ['https://chain.x0pay.com/rpc'],
        nativeCurrency: { name: 'x0', symbol: 'X0', decimals: 18 },
        blockExplorerUrls: ['https://chain.x0pay.com/'],
      },
    ],
    chainTokenConfigs: [
      {
        chainId: '0x29b5d', // 170845 in hex (verified from RPC)
        chainName: 'X0',
        tokens: [
          {
            symbol: 'USDT',
            name: 'Tether USD',
            address: '0x2DA752397487D7C44bf94c3cA433a4257ba87773',
            decimals: 6,
            hypColAddress: '0x2DA752397487D7C44bf94c3cA433a4257ba87773',
          },
          {
            symbol: 'USDC',
            name: 'USDC',
            address: '0x3c3Cac8e7258C5928a89e1dFe804b7D7cab6429e',
            decimals: 6,
            hypColAddress: '0x3c3Cac8e7258C5928a89e1dFe804b7D7cab6429e',
          },
        ],
        hookAddress: '0x14fD8C5eAe7A7F9AB17b605Dc7b12aC24A9329A6',
        destinationDomain: 137,
      },
    ],
  };

  // Example transaction params
  const transactionParams = {
    merchantNumber: '12345',
    transferAmount: 16000, // 10.5 USDC (number, not string)
    feeAmount: 0, // 0.5 USDC (number, not string)
    isInnerFee: false,
  };

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <h1>X0Pay SDK Demo</h1>*/}
      {/*</header>*/}
      <main>
        <X0PayComponent
          clientConfig={clientConfig}
          transactionParams={transactionParams}
          onSuccess={(txHash) => alert(`Success! ${txHash}`)}
          onError={(err) => alert(`Error: ${err.message}`)}
          enableWalletConnect={true}
          walletConnectProjectId="ae3afbf40e1ac9b7cf433248048853c1"
          workerApiUrl="https://relayer.x0pay.com"
        />
      </main>
    </div>
  );
}

export default App;

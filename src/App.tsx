import React from 'react';
import './App.css';
import { X0PayComponent, X0PayClientConfig } from 'x0-react-sdk';

function App() {
  // Get URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const transferAmountFromUrl = urlParams.get('transferAmount');
  const orderIdFromUrl = urlParams.get('orderId');
  const feeAmountFromUrl = urlParams.get('feeAmount');
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
          {
            symbol: 'USDT-AVA',
            name: 'USDT-AVA',
            address: '0x463D39FDdD343B1FcA2B17Aa96e121A1Bb1988E3',
            decimals: 6,
            hypColAddress: '0x463D39FDdD343B1FcA2B17Aa96e121A1Bb1988E3',
            destinationDomain: 43114, // Avalanche domain
          },
        ],
        hookAddress: '0x14fD8C5eAe7A7F9AB17b605Dc7b12aC24A9329A6',
        destinationDomain: 137,
      },
    ],
  };

  // Example transaction params with URL query fallbacks
  const transactionParams = {
    orderId: orderIdFromUrl || '12345',
    transferAmount: transferAmountFromUrl ? parseInt(transferAmountFromUrl, 10) : 16000, // Parse from URL or use default
    feeAmount: feeAmountFromUrl ? parseInt(feeAmountFromUrl, 10) : 0, // 0.5 USDC (number, not string)
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
          workerApiUrl="https://worker.x0pay.com"
          enableSafe={true}
          apiKey='x0_sdk_key_1234567890abchjk'
        />
      </main>
    </div>
  );
}

export default App;

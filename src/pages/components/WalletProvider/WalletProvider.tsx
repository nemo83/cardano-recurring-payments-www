import { createContext, useContext, useState } from "react";

export interface WalletContext {
    connected: boolean,
    walletHandle: any|undefined,
    baseAddress: string,
    stakingAddress: string|undefined
  }

const Context = createContext({});

export function WalletProvider({ children }) {
    const [walletHandle, setWalletHandle] = useState(null);
    return (
        <Context.Provider value={[walletHandle, setWalletHandle]}>{children}</Context.Provider>
    );
}

export function useWalletContext() {
    return useContext(Context);
}
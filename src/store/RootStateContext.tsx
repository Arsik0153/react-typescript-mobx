import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { CartStore } from './CartStore';
import { UIStore } from './UIStore';

type RootStoreModel = {
    cartStore: CartStore;
    uiStore: UIStore;
};

const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);

const cartStore = new CartStore();
const uiStore = new UIStore();

export const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <StoreContext.Provider value={{cartStore, uiStore}}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);

'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface ProviderProps {
    children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }: { children: React.ReactNode }) => {
    return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}


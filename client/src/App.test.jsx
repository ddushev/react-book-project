import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

import { AuthContextProvider } from './contexts/AuthContext';

import { MessageCard } from './components/MessageCard/MessageCard';


describe('MessageCard', () => {
    it('renders message', () => {
        render(
            <BrowserRouter>
                <AuthContextProvider>
                    <MessageCard message="Test message" />
                </AuthContextProvider>
            </BrowserRouter>);
        expect(screen.getByText('Test message')).toBeDefined();
    });
});
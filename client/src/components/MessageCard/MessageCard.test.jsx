import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

import { AuthContextProvider } from '../../contexts/AuthContext';

import { MessageCard } from './MessageCard';


describe('MessageCard', () => {
    const roomOwner = 'testid';
    const _ownerId = 'testid';

    it('message', () => {
        render(
            <BrowserRouter>
                <AuthContextProvider>
                    <MessageCard message="Test message" />
                </AuthContextProvider>
            </BrowserRouter>);
        expect(screen.getByText('Test message')).toBeDefined();
    });

    it('host or guest ', () => {
        render(
            <BrowserRouter>
                <AuthContextProvider>
                    <MessageCard roomOwner={roomOwner} _ownerId={_ownerId}/>
                </AuthContextProvider>
            </BrowserRouter>);
        if (roomOwner == _ownerId) {
            expect(screen.getByText('Host')).toBeDefined();
        }else {
            expect(screen.getByText('Guest')).toBeDefined();
        }
    });
});
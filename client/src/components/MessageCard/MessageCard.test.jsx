import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import { beforeEach } from 'vitest';

import { AuthContext } from '../../contexts/AuthContext';

import { MessageCard } from './MessageCard';

describe('MessageCard when roomOwner match comment owner and current userId', () => {
    const roomOwner = 'testid';
    const _ownerId = 'testid';
    const context = {
        userId: 'testid',
    };

    beforeEach(async () => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={context}>
                    <MessageCard message="Test message" roomOwner={roomOwner} _ownerId={_ownerId} />
                </AuthContext.Provider>
            </BrowserRouter>);
    });
    test('message', () => {
        expect(screen.getByText('Test message')).toBeDefined();
    });

    test('host', () => {
        expect(screen.getByText('Host')).toBeDefined();
    });

    test('You', () => {
        expect(screen.getByText('You')).toBeDefined();
    });

});

describe('MessageCard when roomOwner doesnt match comment owner which doesnt match current userId', () => {
    const roomOwner = 'testid1';
    const _ownerId = 'testid2';
    const author = {
        firstName: 'John',
        lastName: 'Doe'
    }
    const context = {
        userId: 'testid3',
    };

    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={context}>
                    <MessageCard message="Test message" author={author} roomOwner={roomOwner} _ownerId={_ownerId} />
                </AuthContext.Provider>
            </BrowserRouter>);
    });

    test('host', () => {
        expect(screen.getByText('Guest')).toBeDefined();
    });

    test('John Doe', () => {
        expect(screen.getByText('John Doe')).toBeDefined();
    });

});
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from 'vitest';

import { Login } from '../components/Sign/Login/Login';

// Mocking useAuthContext
vi.mock('../contexts/AuthContext', () => ({
    useAuthContext: () => ({
        onLoginSubmit: vi.fn(),
        authErrors: [],
        setAuthErrors: vi.fn(),
    }),
}));

describe('useForm hook', () => {

    it('onChangeHandler should update values on input change', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const email = getByTestId('email');
        const password = getByTestId('password');

        fireEvent.change(email, { target: { value: 'john_doe' } });
        fireEvent.change(password, { target: { value: 'password123' } });

        expect(email.value).toBe('john_doe');
        expect(password.value).toBe('password123');
    });

});

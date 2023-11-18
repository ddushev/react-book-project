import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach } from "vitest";

import { AuthContext } from "../../contexts/AuthContext";

import { Header } from "./Header";

describe('Header when user is logged-in', () => {
    const context = {
        isAuthenticated: true,
        userImg: '/testImg.jpg'
    }
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={context}>
                    <Header />
                </AuthContext.Provider>
            </BrowserRouter>);
    });

    test('Add Room link shown', () => {
        expect(screen.getByText('Add Room')).toBeDefined();
    });
    
    test('User img is shown with proper img', () => {
        const userAvatar = screen.getByAltText('User Image');
        expect(userAvatar).toBeTruthy(); 
        expect(userAvatar.getAttribute('src')).toContain(context.userImg); 
    });


});
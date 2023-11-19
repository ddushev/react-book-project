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

    test('Published rooms link is available', () => {
        expect(screen.getByText('Published')).toBeDefined();
    });


});

describe('Header when user is not logged-in', () => {
    const context = {
        isAuthenticated: false,
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

    test('Add Room link not shown', () => {
        expect(screen.queryByText('Add Room')).toBeNull();
    });

    test('User img is shown with proper img', () => {
        expect(screen.queryByText('User Image')).toBeNull();
    });


});


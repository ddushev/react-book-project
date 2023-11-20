import { render, screen } from "@testing-library/react";
import { RoomCard } from "./RoomCard";
import { BrowserRouter } from "react-router-dom";
import { beforeEach } from "vitest";

// Mock the useRoomContext hook
vi.mock('../../contexts/RoomContext', () => ({
    useRoomContext: () => ({
        onBookRoomInteract: vi.fn(),
        onConfirmRoomClick: vi.fn(),
    }),
}));

describe('RoomCard in available rooms catalog', () => {
    const roomData = {
        _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
        name: "Cozy studio",
        price: "100",
        imageUrl: "/img/cozy-studio.jpg",
        location: "Borovetz",
        adult: "2",
        child: "2",
        bed: "2",
        bath: "1",
        wifi: "Yes",
        parking: "No",
        description: "This cozy studio...",
        bookedBy: false,
        bookedByUsername: "",
        confirmed: false,
        ownerName: "Daniel Dushev",
        ownerEmail: "danieldyshew@gmail.com",
        _id: "941651bc-70d9-4157-afeb-aadcdd352c17"
    }
    beforeEach(() => {
        render(<RoomCard roomData={roomData} />, { wrapper: BrowserRouter });
    });

    it('name value', () => {
        expect(screen.getByText('Cozy studio')).toBeDefined();
    });

    it('price value', () => {
        expect(screen.getByText('$100/Night')).toBeDefined();
    });

    it('location value', () => {
        expect(screen.getByText('Borovetz')).toBeDefined();
    });

    it('description value', () => {
        expect(screen.getByText('This cozy studio...')).toBeDefined();
    });
});
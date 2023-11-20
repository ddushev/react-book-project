import { render, screen } from "@testing-library/react";
import { beforeEach, vi } from 'vitest';


import { EditRoom } from "./EditRoom";



// Mock the dataFactory and data methods
vi.mock('../../services/requests', () => ({
  dataFactory: () => ({
    getRoom: () => Promise.resolve({}),
  }),
}));

// Mock the useRoomContext hook
vi.mock('../../contexts/RoomContext', () => ({
  useRoomContext: () => ({
    onEditRoomSubmit: vi.fn(),
    roomErrors: [],
    setRoomErrors: vi.fn(),
  }),
}));

// Mock the useAuthContext hook
vi.mock('../../contexts/AuthContext', () => ({
  __esModule: true,
  useAuthContext: () => ({
    token: 'mockedToken',
    userId: 'mockedUserId',
  }),
}));

// Mock useParams
vi.mock('react-router', () => ({
  useParams: () => ({ roomId: 'mockedRoomId' }),
}));

// Mock the CommonHeader component
vi.mock('../Common/CommonHeader/CommonHeader', () => ({
  CommonHeader: vi.fn(),
}));

// Mock the useForm hook
vi.mock('../../hooks/useForm', () => ({
  default: () => ({
    values: {
      name: 'Mocked Room Name',
      price: '100',
      imageUrl: 'Mocked Room ImageUrl',
      location: 'Mocked Room Location',
      adult: '1',
      child: '2',
      bed: '3',
      bath: '4',
      wifi: 'No',
      parking: 'No',
      description: 'Mocked Room Description',
    },
    onSubmit: vi.fn(),
    onChangeHandler: vi.fn(),
    changeValues: vi.fn(),
  }),
}));

describe('EditRoom initial render form values', async () => {

  beforeEach(() => {
    render(<EditRoom />);
  });

  it('name value', () => {
    expect(screen.getByTestId('name').value).toBe('Mocked Room Name');
  });

  it('textarea value', () => {
    expect(screen.getByTestId('textarea').value).toBe('Mocked Room Description');
  });

  it('price value', () => {
    expect(screen.getByTestId('price').value).toBe('100');
  });

  it('imageUrl value', () => {
    expect(screen.getByTestId('imageUrl').value).toBe('Mocked Room ImageUrl');
  });

  it('location value', () => {
    expect(screen.getByTestId('location').value).toBe('Mocked Room Location');
  });

  it('adult value', () => {
    expect(screen.getByTestId('adult').value).toBe('1');
  });

  it('child value', () => {
    expect(screen.getByTestId('child').value).toBe('2');
  });

  it('bed value', () => {
    expect(screen.getByTestId('bed').value).toBe('3');
  });

  it('bath value', () => {
    expect(screen.getByTestId('bath').value).toBe('4');
  });

  it('wifi value', () => {
    expect(screen.getByTestId('wifi').value).toBe('No');
  });

  it('parking value', () => {
    expect(screen.getByTestId('parking').value).toBe('No');
  });
});



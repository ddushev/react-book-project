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
      price: '1',
      imageUrl: 'Mocked Room ImageUrl',
      location: 'Mocked Room Location',
      adult: 'Mocked Room Adult',
      child: 'Mocked Room Child',
      bed: 'Mocked Room Bed',
      bath: 'Mocked Room Bath',
      wifi: 'Mocked Room Wifi',
      parking: 'Mocked Room Parking',
      description: 'Mocked Room Description',
    },
    onSubmit: vi.fn(),
    onChangeHandler: vi.fn(),
    changeValues: vi.fn(),
  }),
}));

describe('EditRoom initial render', async () => {

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
    expect(screen.getByTestId('price').value).toBe('1');
  });

  it('imageUrl value', () => {
    expect(screen.getByTestId('imageUrl').value).toBe('Mocked Room ImageUrl');
  });
});



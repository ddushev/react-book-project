// Server URLs
// Production Server hosted on Glitch 'https://spiky-sudden-digit.glitch.me'
// Local development server 'http://localhost:3030'
export const BASE_URL = 'http://localhost:3030';

export const roomFormFields = {
    name: 'name',
    price: 'price',
    imageUrl: 'imageUrl',
    location: 'location',
    adult: 'adult',
    child: 'child',
    bed: 'bed',
    bath: 'bath',
    wifi: 'wifi',
    parking: 'parking',
    description: 'description',
    bookedBy: 'bookedBy',
    bookedByUsername: 'bookedByUsername',
    confirmed: 'confirmed',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail'
}

export const signFormFields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    repeatPassword: 'repeatPassword',
    imageUrl: 'imageUrl',
}

export const messageFormFields = {
    message: 'message',
    roomId: 'roomId',
}

export const searchFields = {
    location: 'location',
    price: 'price',
    adult: 'adult',
    child: 'child',
}

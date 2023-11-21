// Server URLs
// Production Server hosted on Glitch 'https://spiky-sudden-digit.glitch.me'
// Local development server 'http://localhost:3030'
export const BASE_URL = 'http://localhost:3030';

export const ROOM_FORM_FIELDS = {
    NAME: 'name',
    PRICE: 'price',
    IMAGE_URL: 'imageUrl',
    LOCATION: 'location',
    ADULT: 'adult',
    CHILD: 'child',
    BED: 'bed',
    BATH: 'bath',
    WIFI: 'wifi',
    PARKING: 'parking',
    DESCRIPTION: 'description',
    BOOKED_BY: 'bookedBy',
    BOOKED_BY_USERNAME: 'bookedByUsername',
    CONFIRMED: 'confirmed',
    OWNER_NAME: 'ownerName',
    OWNER_EMAIL: 'ownerEmail'
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

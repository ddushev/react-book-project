// Server URLs
// Production Server hosted on Glitch 'https://spiky-sudden-digit.glitch.me'
// Local development server 'http://localhost:3030'
export const BASE_URL = 'http://localhost:3030';

export const WEATHER_URL = 'http://dataservice.accuweather.com';

// export const WEATHER_API_KEY = 'YPZiA19iC0t8HSZ7s2G66AvCWwU5omhK'; //danieldyshew@gmail.com
export const WEATHER_API_KEY = '9NDqTQaNpkDFGIp2Ai9YOliy8UNTwoMn'; //daniel.dushev2@gmail.com

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

export const SIGN_FORM_FIELDS = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    PASSWORD: 'password',
    REPEAT_PASSWORD: 'repeatPassword',
    IMAGE_URL: 'imageUrl',
}

export const MESSAGE_FORM_FIELDS = {
    MESSAGE: 'message',
    ROOM_ID: 'roomId',
}

export const SEARCH_FIELDS = {
    LOCATION: 'location',
    PRICE: 'price',
    ADULT: 'adult',
    CHILD: 'child',
}

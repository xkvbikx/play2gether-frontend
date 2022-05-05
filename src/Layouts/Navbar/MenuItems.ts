/*
interface MenuItems {
    title: string;
    url: string;
    isSignupButton?: boolean;
};
*/

export const MenuItems = [
    {
        title: 'Premium',
        url: 'user/premium',
        login: true,
    },
    {
        title: 'Home',
        url: 'user/home',
        login: true,
    },
    {
        title: 'Home',
        url: '/home',
        login: false,
    },
    {
        title: 'Nowe miejsce',
        url: '/user/newPlace',
        login: true,
    },
    {
        title: 'Rejestracja',
        url: '/register',
        isSignUpButton: true,
        login: false,
    },
    {
        title: 'Logowanie',
        url: '/login',
        isSignUpButton: true,
        login: false,
    },
    {
        title: 'Wyloguj',
        url: '/home',
        isSignUpButton: true,
        login: false,
        logout: true,
    },
]

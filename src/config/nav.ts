export interface Link {
    id: number;
    name: string;
    icon?: string;
    href: string;
}

export const socialLinks: Link[] = [
    {
        id: 1,
        name: "Facebook",
        icon: "fab fa-facebook",
        href: "https://www.facebook.com/profile.php?id=61552112930214",
    },
    {
        id: 2,
        name: "Instagram",
        icon: "fab fa-instagram",
        href: "https://www.instagram.com/brainybunnies/",
    },
    {
        id: 3,
        name: "Email",
        icon: "fas fa-envelope",
        href: "mailto:admin@brainybunnies.com.au",
    },
];

export const navigationLinks: Link[] = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "About us",
        href: "/about-us",
    },
    {
        id: 3,
        name: "Curriculum gap",
        href: "/curriculum-gap",
    },
    {
        id: 4,
        name: "Programs",
        href: "/programs",
    },
    {
        id: 5,
        name: "Contact us",
        href: "/contact-us",
    }
];
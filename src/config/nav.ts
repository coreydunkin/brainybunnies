export interface Link {
    id: number;
    name: string;
    icon?: string;
    href: string;
}

export const socialLinks: Link[] = [
    {
        id: 1,
        name: "Instagram",
        icon: "fab fa-instagram",
        href: "https://www.instagram.com/brainybunnies/",
    },
    {
        id: 2,
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
        name: "Curriculum gap",
        href: "/curriculum-gap",
    },
    {
        id: 4,
        name: "Prices & Enquiries",
        href: "/prices-and-enquiries",
    }
];
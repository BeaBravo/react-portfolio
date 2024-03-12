export const sendEmail = (contactForm) => {
    return fetch('api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
    });
};

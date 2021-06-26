export const COLORS = {
    brandBlack: '#151515',
    brandBlue: '#34FCD8',
    brandGreen: '#36FF79',
    brandGreenDark: '#2ECC5E',
    brandGreenLight: '#CFF9DA',
    brandPink: '#EB2764',
    brandRed: '#DF0147',
    brandYellow: '#F7DF1E',

    //  Neutrals
    black: '#292A2B',
    gray: '#BCBFC3',
    grayDark: '#444444',
    grayHighlight: '#F0F1F4',
    grayLight: '#E0E0E4',
    grayMedium: '#888B93',
    offWhite: '#F5F5F6',
    white: '#FFFFFF',
};

export const INFO = {
    color: COLORS.brandOrange,
    description: `Hola, vi la venta de garaje y me interesa...`,
    email: 'nicolasm@nikodermus.media',
    language: 'es-CO',
    name: 'El Garaje de Brandy',
    number: '573144431838',
    URL: 'https://elgaraje.netlify.com',
};

export const SOCIAL_MEDIA = {
    whatsapp: `https://wa.me/${INFO.number}?text=${encodeURI(
        INFO.description
    )}`,
};

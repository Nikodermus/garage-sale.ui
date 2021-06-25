import { INFO } from './src/constants/site';

const config = {
    siteMetadata: {
        author: 'Nikodermus',
        description: INFO.description,
        siteUrl: INFO.URL,
        title: INFO.name,
    },
    plugins: [
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `${__dirname}/static/fonts`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: INFO.name,
                short_name: INFO.name,
                start_url: `/`,
                background_color: INFO.color,
                theme_color: INFO.color,
                display: `minimal-ui`,
                icon: `static/images/favicon.png`,
            },
        },
    ],
};

export default config;

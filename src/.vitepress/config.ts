import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'PersonalHealthTrain',
    base: '/',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/PHT-Medic/documentation' },
            { icon: 'discord', link: 'https://discord.gg/vEsUaEFBVE' },
        ],
        editLink: {
            pattern: 'https://github.com/PHT-Medic/documentation/edit/master/src/:path',
            text: 'Edit this page on GitHub'
        },
        logo: {
            light: '/images/icon/icon_medic_dark.png',
            dark: '/images/icon/icon_medic_light.png'
        },
        siteTitle: false,
        nav: [
            {
                text: 'Guide',
                activeMatch: '/guide/',
                items: [
                    { text: 'User', link: '/guide/user/setup'},
                    { text: 'Admin', link: '/guide/admin/overview'},
                    { text: 'Deployment', link: '/guide/deployment/index'},
                ]
            },
            {
                text: 'About',
                activeMatch: '/about/',
                items: [
                    { text: 'Team', link: '/about/team' },
                ]
            }
        ],
        sidebar: {
            '/guide/user': [
                {
                    text: 'Overview',
                    items: [
                        { text: 'Introduction', link: '/guide/user/' },
                        { text: 'Components', link: '/guide/user/components' },
                        { text: 'Trains', link: '/guide/user/trains' },
                        { text: 'FHIR', link: '/guide/user/fhir' },

                    ]
                },
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Setup / Configuration', link: '/guide/user/setup'},
                        {text: 'Proposal Creation', link: '/guide/user/proposal'},
                        {text: 'Train Creation', link: '/guide/user/train-creation'},
                        {text: 'Result Extraction', link: '/guide/user/result'},
                        {text: 'Train Options ', link: '/guide/user/other_features'},
                    ]
                }
            ],
            '/guide/admin' : [
                {
                    text: 'Admin',
                    items: [
                        {text: 'Overview', link: '/guide/admin/overview'},
                        {text: 'Central', link: '/guide/admin/central'},
                        {text: 'Station', link: '/guide/admin/station'},
                    ]
                },
            ],
            '/guide/deployment' : [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/'},
                    ]
                },
                {
                    text: 'Station',
                    items: [
                        {text: 'Installation', link: '/guide/deployment/station'},
                    ]
                },
                {
                    text: 'Central',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/central-introduction'},
                        {text: 'Nginx', link: '/guide/deployment/central-nginx'},
                        {text: 'Harbor', link: '/guide/deployment/central-harbor'},
                        {text: 'App', link: '/guide/deployment/central-app'},
                    ]
                }
            ],
        }
    }
});

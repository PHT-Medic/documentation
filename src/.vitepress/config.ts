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
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Guide',
                activeMatch: '/guide/',
                items: [
                    { text: 'Introduction', link: '/guide/introduction/index' },
                    { text: 'Analyst', link: '/guide/analyst/setup'},
                    { text: 'Admin', link: '/guide/admin/index'},
                    { text: 'Installation', link: '/guide/installation/index'},
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
             '/guide': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'Overview', link: '/guide/introduction/index' },
                        { text: 'Components', link: '/guide/introduction/components' },
                        { text: 'Trains', link: '/guide/introduction/trains' },
                        { text: 'FHIR', link: '/guide/introduction/fhir' },

                    ]
                },
                 {
                    text: 'Analyst',
                    items: [
                        {text: 'Setup / Configuration', link: '/guide/analyst/setup'},
                        {text: 'Train creation', link: '/guide/analyst/train_admin'},
                        {text: 'Result extraction', link: '/guide/analyst/results'},
                    ]
                },
                 {
                    text: 'Admin',
                    collapsible: false,
                    items: [
                        {text: 'Central', link: '/guide/admin/index'},
                        {text: 'Station setup', link: '/guide/admin/index'},
                        {text: 'Proposal review', link: '/guide/admin/index'},
                        {text: 'Train review', link: '/guide/admin/index'},
                        {text: 'Train execution', link: '/guide/admin/index'},
                    ]
                },
                {
                    text: 'Station Installation',
                    items: [
                        {text: 'Central', link: '/guide/analyst/index'},
                        {text: 'Installation', link: '/guide/analyst/index'},
                    ]
                },
                {
                    text: 'Central Installation',
                    items: [
                        {text: 'Introduction', link: '/guide/analyst/index'},
                        {text: 'Nginx', link: '/guide/analyst/index'},
                        {text: 'Harbor', link: '/guide/analyst/index'},
                        {text: 'App', link: '/guide/analyst/index'},
                    ]
                }


            ],

        }
    }
});

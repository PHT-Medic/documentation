import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'PersonalHealthTrain',
    base: '/documentation/',
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
                    { text: 'User', link: '/guide/user/index'},
                    { text: 'Deployment', link: '/guide/deployment/index'}
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
            '/guide/deployment': [
                {
                    text: 'Deployment-Guide',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/index'},
                    ]
                },
                {
                    text: 'Central',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/central/central-introduction'},
                        {text: 'Nginx', link: '/guide/deployment/central/central-nginx'},
                        {text: 'Harbor', link: '/guide/deployment/central/central-harbor'},
                        {text: 'App', link: '/guide/deployment/central/central-app'}
                    ]
                },
                {
                    text: 'Station',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/station/station-introduction'},
                        {text: 'Central Setup', link: '/guide/deployment/station/station-central-setup'},
                        {text: 'Installation', link: '/guide/deployment/station/station-installation'},
                    ]
                }
            ],
            '/guide/user/': [
                {
                    text: 'User-Guide',
                    collapsible: false,
                    items: [
                        {text: 'Introduction', link: '/guide/user/index'},
                        {text: 'Components', link: '/guide/user/components'},
                        {text: 'Trains', link: '/guide/user/trains'},
                        {text: 'FHIR', link: '/guide/user/fhir'},
                    ]
                },
                {
                    text: 'Central',
                    collapsible: false,
                    items: [
                        {text: 'UI', link: '/guide/user/central/user_interface'},
                        {text: 'DesktopApp', link: '/guide/user/central/desktop_app'}
                    ]
                },
                {
                    text: 'Station',
                    collapsible: false,
                    items: [
                        {text: 'Central UI', link: '/guide/user/station/central_ui'},
                        {text: 'Installation', link: '/guide/user/station/installation'},
                        {text: 'Usage', link: '/guide/user/station/usage'},
                    ]
                }
            ]
        }
    }
});

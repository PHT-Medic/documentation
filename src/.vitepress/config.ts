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
        logo: { light: '../images/icon/icon_medic_dark.png', dark: '../images/icon/icon_medic_light.png' },
        siteTitle: false,
        nav: [
            {
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Guide',
                link: '/guide/',
                activeMatch: '/guide/',
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
            '/guide/': [
                {
                    text: 'General',
                    collapsible: false,
                    items: [
                        {text: 'Introduction', link: '/guide/index'},
                        {text: 'Components', link: '/guide/components'},
                        {text: 'Trains', link: '/guide/trains'},
                        {text: 'FHIR', link: '/guide/fhir'},
                    ]
                },
                {
                    text: 'Central',
                    collapsible: false,
                    items: [
                        {text: 'UI', link: '/guide/central/user_interface'},
                        {text: 'DesktopApp', link: '/guide/central/desktop_app'}
                    ]
                },
                {
                    text: 'Station',
                    collapsible: false,
                    items: [
                        {text: 'Central UI', link: '/guide/station/central_ui'},
                        {text: 'Installation', link: '/guide/station/installation'},
                        {text: 'Usage', link: '/guide/station/usage'},
                    ]
                }
            ]
        }
    }
});

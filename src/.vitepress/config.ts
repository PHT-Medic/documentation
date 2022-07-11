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
        nav: [
            {
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Guide',
                link: '/user-guide/',
                activeMatch: '/user-guide/',
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
            '/user-guide/': [
                {
                    text: 'General',
                    collapsible: false,
                    items: [
                        {text: 'Introduction', link: '/user-guide/index'},
                        {text: 'Components', link: '/user-guide/components'},
                        {text: 'Trains', link: '/user-guide/trains'},
                        {text: 'FHIR', link: '/user-guide/fhir'},
                    ]
                },
                {
                    text: 'Central',
                    collapsible: false,
                    items: [
                        {text: 'UI', link: '/user-guide/central/user_interface'},
                        {text: 'DesktopApp', link: '/user-guide/central/desktop_app'}
                    ]
                },
                {
                    text: 'Station',
                    collapsible: false,
                    items: [
                        {text: 'Central UI', link: '/user-guide/station/central_ui'},
                        {text: 'Installation', link: '/user-guide/station/installation'},
                        {text: 'Configuration', link: '/user-guide/station/configuration'},
                    ]
                }
            ]
        }
    }
});

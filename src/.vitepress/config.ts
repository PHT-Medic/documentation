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
                    { text: 'User', link: '/guide/user/'},
                    { text: 'Admin', link: '/guide/admin/'},
                    { text: 'Deployment', link: '/guide/deployment/'},
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
                        { text: 'Architecture', link: '/guide/user/architecture' },
                        { text: 'Components', link: '/guide/user/components' }
                    ]
                },
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Requirements', link: '/guide/user/requirements'},
                        {text: 'Proposal', link: '/guide/user/proposal'},
                        {text: 'Train Coding', link: '/guide/user/train-coding'},
                        {text: 'Train Creation', link: '/guide/user/train-creation'},
                        {text: 'Train Result', link: '/guide/user/train-result'},
                    ]
                },
                {
                    text: 'Concepts',
                    items: [
                        { text: 'FHIR Query', link: '/guide/user/fhir-query' },
                        { text: 'Homomorphic Encryption', link: '/guide/user/homomorphic-encryption' },
                    ]
                }
            ],
            '/guide/admin' : [
                {
                    text: 'Overview',
                    items: [
                        {text: 'Introduction', link: '/guide/admin/'},
                    ]
                },
                {
                    text: 'Central',
                    items: [
                        {text: 'Identity Providers', link: '/guide/admin/identity-providers'},
                        {text: 'Users', link: '/guide/admin/users'},
                        {text: 'Roles', link: '/guide/admin/roles'},
                        {text: 'Permissions', link: '/guide/admin/permissions'},
                        {text: 'Proposal Review', link: '/guide/admin/proposal-review'},
                        {text: 'Train Review', link: '/guide/admin/train-review'},
                    ]
                },
                {
                    text: 'Station',
                    items: [
                        {text: 'Registration', link: '/guide/admin/registration'},
                        {text: 'Train Execution', link: '/guide/admin/train-execution'}
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

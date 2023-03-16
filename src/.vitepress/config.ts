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
                text: 'Getting Started',
                link: '/getting-started/',
                activeMatch: '/getting-started/'
            },
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
            '/getting-started': [
                {
                    text: 'Overview',
                    items: [
                        { text: 'Introduction', link: '/getting-started/' },
                        { text: 'Architecture', link: '/getting-started/architecture' },
                        { text: 'Components', link: '/getting-started/components' },
                        { text: 'Guides', link: '/getting-started/guides' },
                    ]
                }
            ],
            '/guide/user': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/guide/user/'},
                    ]
                },
                {
                    text: 'Quickstart',
                    items: [
                        {text: 'Key Management', link: '/guide/user/key-management'},
                        {text: 'Proposal', link: '/guide/user/proposal'},
                        {text: 'Train', link: '/guide/user/train'},
                    ]
                },
                {
                    text: 'Concepts/Tutorials',
                    items: [
                        { text: 'Train Coding', link: '/guide/user/train-coding'},
                        { text: 'FHIR Query', link: '/guide/user/fhir-query' },
                        { text: 'Homomorphic Encryption', link: '/guide/user/homomorphic-encryption' },
                    ]
                }
            ],
            '/guide/admin' : [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/admin/'},
                        {text: 'Reviewing', link: '/guide/admin/reviewing'},
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
                        {text: 'FAQ', link: '/guide/deployment/station-faq'},
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

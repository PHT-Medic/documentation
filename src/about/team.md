---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/tada5hi.png',
    name: 'Peter Placzek',
    title: 'Central Lead',
    links: [
      { icon: 'github', link: 'https://github.com/tada5hi' },
      { icon: 'twitter', link: 'https://twitter.com/tada5hi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/peter-placzek-047a74210/' },
    ]
  },
  { 
    avatar: 'https://www.github.com/antidodo.png',
    name: 'David Hieber',
    title: 'Station Lead',
    links: [
      { icon: 'github', link: 'https://github.com/antidodo' }
    ]
  },
  {
    avatar: 'https://www.github.com/SirHerr.png',
    name: 'Marius de Arruda Botelho Herr',
    title: 'Project Lead',
    links: [
      { icon: 'github', link: 'https://github.com/SirHerr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marius-de-arruda-botelho-herr' },
    ]
  },

  { 
    avatar: 'https://www.github.com/Felix6464.png',
    name: 'Felix Bötte',
    links: [
      { icon: 'github', link: 'https://github.com/Felix6464' }
    ]
  },
  { 
    avatar: 'https://www.github.com/Nightknight3000.png',
    name: 'Alexander Röhl',
    links: [
      { icon: 'github', link: 'https://github.com/Nightknight3000' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

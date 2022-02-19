export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62110d558b23241c84eaa0e4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rt7gpthc',
                  apiId: '2dce4a6e-56ea-4d7e-b68f-55058ff9a0af'
                },
                {
                  buildHookId: '62110d566dc8c604b90f11d7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tywbeqj1',
                  apiId: 'eb12dfe6-a62f-4755-94b3-30f5f901a46f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willmadd/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tywbeqj1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

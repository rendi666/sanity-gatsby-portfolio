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
                  buildHookId: '5e184c7ec11450ad81c78bd1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gq66o1z6',
                  apiId: 'ec73e2ed-0885-4631-9ea9-f897f0469087'
                },
                {
                  buildHookId: '5e184c7e6371676cb004e3d6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-25nprimr',
                  apiId: '62f5df73-7788-4e91-8098-d500ced712e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rendi666/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-25nprimr.netlify.com',
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

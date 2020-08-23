export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f42ed1805ebe9097fed8900',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5dz2jfyw',
                  apiId: '70c5e31d-8c49-407d-a1ee-4f5ee847478c'
                },
                {
                  buildHookId: '5f42ed18618e319a76a4c09f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kb2mqccu',
                  apiId: 'c2e876d5-20a2-45df-9fc8-4c163d87ae5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunocostanzo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kb2mqccu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d7845efab6a472bbd2b071e',
                  title: 'Sanity Studio',
                  name: 'One-Breath-Partnership-studio',
                  apiId: 'b367e003-8c9b-4a42-a54a-34f571354736'
                },
                {
                  buildHookId: '5d7845ef18cece5fabe0542b',
                  title: 'Blog Website',
                  name: 'One-Breath-Partnership',
                  apiId: '03b7e64c-9b4e-4bf7-a371-36f6263a6d1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evanoneil/One-Breath-Partnership',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://One-Breath-Partnership.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

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
                  buildHookId: '6081076e8d93d163be24a3e7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-hdatfi38',
                  apiId: '0e8bca65-2dff-412a-90af-c5b9d26daee6'
                },
                {
                  buildHookId: '6081076ecad60164f6fa7a32',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zjg35ts3',
                  apiId: '6a3f6dac-b0e8-4875-8920-d133b9a2a1cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mudrank/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zjg35ts3.netlify.app', category: 'apps'}
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

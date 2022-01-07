export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      name: 'home_header',
      type: 'string',
      title: 'Homepage Header'
    },
    {
      name: 'featured_title',
      type: 'string',
      title: 'Featured Section Title'
    },    
    {
      name: 'featured_intro',
      type: 'bodyPortableText',
      title: 'Featured Section Intro'
    },
    {
      name: 'search_title',
      type: 'string',
      title: 'Search Section Title'
    },
    {
      name: 'search_intro',
      type: 'string',
      title: 'Search Section Intro'
    },
    {
      name: 'newsletter_title',
      type: 'string',
      title: 'Newsletter Section Title'
    },
    {
      name: 'newsletter_intro',
      type: 'string',
      title: 'Newsletter Section Intro'
    },
    {
      name: 'bottom_header',
      type: 'string',
      title: 'Media Posts Section Header'
    },
    {
      name: 'newsroom_header',
      type: 'string',
      title: 'Newsroom Header'
    },
    {
      name: 'about_header',
      type: 'string',
      title: 'About Header'
    }
  ]
}

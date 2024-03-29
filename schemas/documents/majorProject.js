import { format } from 'date-fns'

export default {
  name: 'majorProject',
  type: 'document',
  title: 'Major Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'Link to the project'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'Enter a longer description'
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   title: 'Slug',
    //   description: 'Some frontends will require a slug to be set to be able to show the post',
    //   options: {
    //     source: 'title',
    //     maxLength: 96
    //   }
    // },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    // {
    //   name: 'excerpt',
    //   type: 'excerptPortableText',
    //   title: 'Excerpt',
    //   description:
    //     'This ends up on summary pages, on Google, when people share your post in social media.'
    // },
    // {
    //   name: 'authors',
    //   title: 'Authors',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'authorReference'
    //     }
    //   ]
    // },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    }
    // {
    //   name: 'body',
    //   type: 'bodyPortableText',
    //   title: 'Body'
    // }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}

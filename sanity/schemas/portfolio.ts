// schemas/portfolio.ts

import { defineField, defineType } from 'sanity'

const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the portfolio entry',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Date of the project',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the project',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'App', value: 'app' },
          { title: 'Graphic Design', value: 'graphic-design' },
          // Add more project types as needed
        ],
        layout: 'radio', // or 'dropdown'
      },
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Name of the client',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the image hotspot editing functionality
      },
      description: 'Main image of the project',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      description: 'Gallery of images for the project',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'URL link to the live project',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
      description: 'URL link to the project repository',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for the project',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'mainImage',
    },
  },
})

export default portfolio

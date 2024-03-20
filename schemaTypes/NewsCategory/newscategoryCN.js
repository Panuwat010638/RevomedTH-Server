import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'newscategoryCN',
  title: 'News Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'newscategoryTH',
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
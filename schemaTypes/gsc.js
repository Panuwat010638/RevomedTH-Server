import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'gsc',
    title: 'Google Search Console',
    type: 'document',
    fields: [
    defineField({
      name: 'title',
      title: 'Tag ID',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Day/Month/Year',
      type: 'date',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'MMMM DD, YYYY',
        timeFormat: 'h:mm A',
        timeStep: 15,
        timeZones: [
          {
            label: 'Bangkok',
            name: 'Asia/Bangkok',
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'seo.titletag',
      subtitle: 'date' 
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `${title ? 'Google Search Console' : 'Google Search Console'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
})
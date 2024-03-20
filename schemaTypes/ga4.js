import {defineField, defineType} from 'sanity'
import { FaGoogle } from "react-icons/fa";
export default defineType({
    name: 'gaTag',
    title: 'Google Analytic Tag',
    type: 'document',
    icon: FaGoogle ,
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
        title: `${title ? 'Google Analytics 4' : 'Google Analytics 4'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
})
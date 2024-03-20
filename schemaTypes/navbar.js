import {defineField, defineType} from 'sanity'
import CountArray from '../src/Component/CountArray';

export default defineType({
    name: 'navbar',
    title: 'Navigation Bar',
    type: 'document',

    fields: [
      defineField({
        name: 'menu',
        title: 'Navigation Bar Menu',
        type: 'array',
        of: [
          {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Navigation Bar Title'},
            {name: 'href', type: 'string', title: 'Navigation Bar Href'},
            {
              name: 'status',
              title: 'Status On/Off',
              description:"Show this Navigation Bar on web pages?",
              type: 'boolean',
              initialValue: false
            },         
            
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'href',
              status:'status'
            },
            prepare({title, subtitle,status}) {
              const EMOJIS = {
                true: '✅',
                false: '🚫'
              }
              return {
                title: title,
                subtitle: `Href: ${subtitle}`,
                status:`Status: ${status ? EMOJIS[status] : '🚫'} ${status ? "ON":"OFF"}`
              }
            },
          },},
        ],
        
      }),
      defineField({
        name: 'logo',
        title: 'Revomed Group Logo',
        type: 'object',
        fields: [
          {name: 'image', type: 'image', title: 'Revomed Group Image',description:'Image Size: 136px x 41px',options: {
            hotspot: true,
          }},
          {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
        ],
        
      }),
     
      defineField({
        name: 'language',
        title: 'Language',
        type: 'reference',
        description:'Select content language',
        validation: Rule => Rule.required(),
        to: [{ type: 'language' }],
        options: {
          disableNew: true,
        }
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
        title: `${title ? 'Navigation Bar' : 'Navigation Bar'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'List Menu Navigation Bar'}`
      }
    }
  }
})
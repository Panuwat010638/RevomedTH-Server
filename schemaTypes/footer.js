import {defineField, defineType} from 'sanity'
import CountArray from '../src/Component/CountArray';

export default defineType({
    name: 'footer',
    title: 'Footer Bar',
    type: 'document',

    fields: [
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
        name: 'location',
        title: 'Location',
        type: 'text',
      }),
      defineField({
        name: 'social',
        title: 'Revomed Group Social',
        type: 'object',
        fields: [
          {name: 'line', type: 'string', title: 'Line Link',},
          {name: 'facebook', type: 'string', title: 'Facebook Link',},
          {name: 'tel', type: 'string', title: 'Telephone Number',},
          {name: 'email', type: 'string', title: 'Email Address',},
        ],
        
      }),
      defineField({
        name: 'menu',
        title: 'Footer Bar Menu',
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
              description:"Show this Footer Bar on web pages?",
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
        name: 'partner',
        title: 'Partner Of Revomed Group',
        type: 'array',
        of: [
          {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Continent Title',
              type: 'string',
            },
            {
              name: 'list',
              title: 'Country List',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {name: 'name', type: 'string', title: 'Country Name'},  
                  {name: 'link', type: 'string', title: 'Country Link'},              
                ],
               },],
               preview: {
                select: {
                  title: 'name',
                  status:'status',
               
                },
                prepare({title, subtitle,status,media}) {
                  const EMOJIS = {
                    true: '✅',
                    false: '🚫'
                  }
                  return {
                    media:media,
                    title: `${title}`,
                    status:`Status: ${status ? EMOJIS[status] : '🚫'} ${status ? "ON":"OFF"}`
                  }
                },
              },
            },
            {
              name: 'status',
              title: 'Status On/Off',
              description:"Show this Continent on web pages?",
              type: 'boolean',
              initialValue: false
            },  
          ],
          preview: {
            select: {
              title: 'title',
              status:'status',
           
            },
            prepare({title, subtitle,status,media}) {
              const EMOJIS = {
                true: '✅',
                false: '🚫'
              }
              return {
                media:media,
                title: `${title}`,
                status:`Status: ${status ? EMOJIS[status] : '🚫'} ${status ? "ON":"OFF"}`
              }
            },
          },
          
          
         },
        ],
        
      }),
      defineField({
        name: 'morelogo',
        title: 'More Logo',
        type: 'array',
        of: [
          {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Revomed Group More Logo',description:'Image Size: 136px x 41px',options: {
              hotspot: true,
            }},
            {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
            {
              name: 'status',
              title: 'Status On/Off',
              description:"Show this Logo on web pages?",
              type: 'boolean',
              initialValue: false
            },  
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'alt',
              status:'status',
              media: 'image'
            },
            prepare({title, subtitle,status,media}) {
              const EMOJIS = {
                true: '✅',
                false: '🚫'
              }
              return {
                media:media,
                title: `Alt: ${subtitle}`,
                status:`Status: ${status ? EMOJIS[status] : '🚫'} ${status ? "ON":"OFF"}`
              }
            },
          },
          
         },
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
        title: `${title ? 'Product Page' : 'Footer Bar'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'List Menu Footer Bar'}`
      }
    }
  }
})
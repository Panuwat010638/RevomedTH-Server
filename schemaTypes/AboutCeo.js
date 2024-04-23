import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import CountArray from "../src/Component/CountArray"

export default defineType({
    name: 'AboutCEO',
    title: 'About Page',
    type: 'document',

    fields: [
      defineField({
        name: 'about',
        title: 'About Page : About',
        type: 'object',
        fields: [
            {name: 'header', type: 'string', title: 'Main Header'},
            {
              name: 'body',
              validation: Rule => Rule.required(),
              title: 'Content',
              type: 'blockContent',
            },
            {
                name: 'images',
                title: 'CEO Image',
                type: 'object',
                  fields: [
                    {name: 'image', type: 'image', title: 'Image',description:'Image Size: 294px x 294px'},
                    {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
                  ],
            },
            {
                name: 'name',
                title: 'CEO Name',
                type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Name'},
                    {name: 'nameEN', type: 'string', title: 'Name English'},
                  ],
            },
            {
                name: 'role',
                title: 'CEO Role',
                type: 'object',
                  fields: [
                    {name: 'role', type: 'string', title: 'Role'},
                    {name: 'subrole', type: 'string', title: 'Sub Role'},
                  ],
            },
            {
                name: 'signature',
                title: 'Signature && Conpany',
                type: 'object',
                  fields: [
                    
                    {name: 'company', type: 'string', title: 'Company Name'},
                    {name: 'image', type: 'image', title: 'Signature Image',description:'Image Size: 294px x 294px'},
                    {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
                  ],
            },
        ]
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
        title: `${title ? 'About Page : CEO Greeting' : 'About Page : CEO Greeting'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
  
})
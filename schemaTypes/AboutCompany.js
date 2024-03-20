import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import CountArray from "../src/Component/CountArray"

export default defineType({
    name: 'AboutCompany',
    title: 'About Page : Company',
    type: 'document',

    fields: [
      defineField({
        name: 'about',
        title: 'About Page : About',
        type: 'object',
        fields: [
            {name: 'header', type: 'string', title: 'Main Header'},
            {
                name: 'logo',
                title: 'Revomed Group Logo',
                type: 'object',
                fields: [
                  {name: 'image', type: 'image', title: 'Revomed Group Image',description:'Image Size: 136px x 41px',options: {
                    hotspot: true,
                  }},
                  {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
                ],
                
              },
            {
                name: 'images',
                title: 'CEO Image',
                type: 'object',
                  fields: [
                    {name: 'image', type: 'image', title: 'Image',description:'Image Size: 400px x 400px'},
                    {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
                  ],
            },
            {
                name: 'company',
                title: 'Company Name Under Image',
                type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Company Name Under Image : Name'},
                    {name: 'location', type: 'string', title: 'Location'},
                  ],
            },
            {
                name: 'name',
                title: 'Company Name',
                type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Company Name Header'},
                    {name: 'text', type: 'string', title: 'Company Name Text'},
                  ],
            },
            {
                name: 'day',
                title: 'Establishment registration date',
                type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Establishment registration date Header'},
                    {name: 'text', type: 'string', title: 'Day'},
                  ],
            },
            {
                name: 'Vision',
                title: 'Vision and Mission',
                type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Vision and Mission Header'},
                    {name: 'text', type: 'text', title: 'Text Detail'},
                  ],
            },
            {
                name: 'CoreValues',
                title: 'Core Values',
                type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Core Values Header'},
                    {
                        name: 'list',
                        title: 'Core Values List',
                        type: 'array',
                        of: [{
                          type: 'object',
                          fields: [
                            {name: 'text', type: 'string', title: 'Text List'},       
                          ],
                         },],
                      },
                  ],
            },
            {
                name: 'ourpotential',
                title: 'Our Potential',
                type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Our Potential Header'},
                    {
                        name: 'list',
                        title: 'Our Potential List',
                        type: 'array',
                        of: [{
                          type: 'object',
                          fields: [
                            {name: 'text', type: 'string', title: 'Text List'},       
                          ],
                         },],
                      },
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
        title: `${title ? 'About Page : วิสัยทัศน์และ พันธกิจ' : 'About Page : วิสัยทัศน์และ พันธกิจ'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
  
})
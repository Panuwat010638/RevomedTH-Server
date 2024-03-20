import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import CountArray from "../src/Component/CountArray"

export default defineType({
    name: 'InvestmentPage',
    title: 'Investment Page',
    type: 'document',

    fields: [
        defineField({
            name: 'banner',
            title: 'Investment Page Banner',
            type: 'object',
            fields: [
              {name: 'images',
              title: 'Banner Image',
              type: 'object',
                fields: [
                  {name: 'image', type: 'image', title: 'Banner Image',description:'Image Size: 1440px x 376px'},
                  {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
              ],
            },
           
              
            ]
          }),
          defineField({
            name: 'header',
            title: 'Header',
            type: 'object',
            fields: [
              {name: 'header', type: 'string', title: 'Main Header'},
              {name: 'subheader', type: 'string', title: 'Sub Header'},
            ]
          }),
          defineField({
            name: 'ShapeoftheFuture',
            title: 'Investment Page : Shape of the Future',
            type: 'object',
            fields: [
              {name: 'images',
              title: 'Image',
              type: 'object',
                fields: [
                  {name: 'image', type: 'image', title: 'Image',description:'Image Size: 612px x 535px'},
                  {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
              ],
            },
            {name: 'header', type: 'text', title: 'Shape of the Future Header'},
            {name: 'detail', type: 'text', title: 'Shape of the Future Detail'},
            {
                name: 'list',
                title: 'Detail List',
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    {name: 'text', type: 'string', title: 'List Text'},               
                  ],
                 },],
              }
           
              
            ]
          }),
          defineField({
            name: 'ShareholderInformation',
            title: 'Investment Page : Shareholder Information',
            type: 'object',
            fields: [
            {name: 'subheader', type: 'string', title: 'Sub Header'},
            {name: 'header', type: 'string', title: 'Main Header'},         
            {
                name: 'info',
                title: 'Shareholder Information List',
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    {name: 'images',
                      title: 'Shareholder Image',
                      type: 'object',
                        fields: [
                          {name: 'image', type: 'image', title: 'Image',description:'Image Size: 294px x 294px'},
                          {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
                      ],
                    },
                    {name: 'nameTH', type: 'string', title: 'Name Thailand'},               
                    {name: 'nameEN', type: 'string', title: 'Name English'}, 
                    {name: 'nameCN', type: 'string', title: 'Name China'},
                  ],
                 },],
              }
           
              
            ]
          }),
          defineField({
            name: 'news',
            title: 'Investment Page : News',
            type: 'object',
            fields: [
              {name: 'header', type: 'string', title: 'Header'},
              {name: 'button',
                  title: 'News Button',
                  type: 'object',
                    fields: [
                      {name: 'title', type: 'string', title: 'Button Title'},
                      {name: 'link', type: 'string', title: 'Button Link'},
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
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'titletag', type: 'string', title: 'Title for SEO',description:'Messages displayed on the top page of the browser',validation: Rule => Rule
          .min(30)
          .max(70),components: {
            input: SeoCountString
          }},
          {name: 'keywords', type: 'string', title: 'Keywords for SEO',description:'Words or phrases that people use to find information in search engines.'},
          {name: 'description', type: 'text', title: 'Description for SEO',description:'Description of website content Waiting to explain the overall picture of the website.',validation: Rule => Rule
          .min(120)
          .max(160),components: {
            input: SeoCountText
          }},
          {name: 'openGraphImage', type: 'image', title: 'OpenGraph Image',description:'Image Size: 1200px x 630px'},
      ]
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
        title: `${title ? 'Investment Page' : 'Investment Page'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
  
})
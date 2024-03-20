import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import AmountFormat from '../src/Component/AmountFormat'
import CountArray from "../src/Component/CountArray"

export default defineType({
    name: 'HomePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      defineField({
        name: 'INNOVATION',
        title: 'Home Page : SHAPING INNOVATION',
        type: 'object',
        fields: [
          {name: 'header', type: 'text', title: 'Header'},
          {name: 'detail', type: 'text', title: 'Detail'},
          {name: 'button',
          title: 'Button',
          type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Button Title'},
              {name: 'link', type: 'string', title: 'Button Link'},
          ],
          },
        ]
      }),
      defineField({
        name: 'about',
        title: 'Home Page : About',
        type: 'object',
        fields: [
          {name: 'header',
          title: 'Header',
          type: 'object',
            fields: [
              {name: 'title1', type: 'string', title: 'Header Left'},
              {name: 'title2', type: 'string', title: 'Header Right'},
          ],
          },
          {name: 'detail', type: 'text', title: 'Detail'},
          {name: 'images',
          title: 'Image',
          type: 'object',
            fields: [
              {name: 'image', type: 'image', title: 'Image',description:'Image Size: 506px x 328px'},
              {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
            ],
          },
        ]
      }),
      defineField({
        name: 'brand',
        title: 'Home Page : Brand',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {name: 'subheader', type: 'string', title: 'Sub Header'},
          {
            name: 'list',
            title: 'Brand List',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'num', type: 'string', title: 'Number'},
                {name: 'title', type: 'string', title: 'title'},            
              ],
             },],
          }
        ]
      }),
      defineField({
        name: 'world',
        title: 'Home Page : World',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {
            name: 'list',
            title: 'Brand List',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'title', type: 'text', title: 'title'}, 
                {name: 'image', type: 'image', title: 'Image',description:'Image Size: 506px x 328px'},
                {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},           
              
              ],
             },],
          },
          {name: 'button',
          title: 'Button',
          type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Button Title'},
              {name: 'link', type: 'string', title: 'Button Link'},
          ],
          },
        ]
      }),
      defineField({
        name: 'partner',
        title: 'Home Page : Partner',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {name: 'subheader', type: 'string', title: 'Sub Header'},
          {name: 'images',
          title: 'Image',
          type: 'object',
            fields: [
              {name: 'image', type: 'image', title: 'Image',description:'Image Size: 1036px x 482px'},
              {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
            ],
          },
          {
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
                      {name: 'image', type: 'image', title: 'Image',description:'Image Size: 30px x 20px'},
                      {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},       
                    ],
                   },],
                },
              ], 
             },
            ],
          },
          {name: 'Confirmation',
          title: 'Confirmation Image',
          type: 'object',
            fields: [
              {name: 'image', type: 'image', title: 'Image',description:'Image Size: 1248px x 294px'},
              {name: 'imageM', type: 'image', title: 'Image',description:'Image Size: 241px x 1008px'},
              {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
            ],
          },
        ]
      }),
      defineField({
        name: 'grow',
        title: 'Home Page : Grow',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {name: 'subheader', type: 'string', title: 'Sub Header'},
          {
            name: 'data',
            title: 'Grow Road Map',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'year', type: 'string', title: 'Year'},  
                {name: 'detail', type: 'text', title: 'Detail'},       
              ],
             },],
          },
         
        ]
      }),
      defineField({
        name: 'slide',
        title: 'Home Page : Slide',
        type: 'object',
        fields: [
          {
            name: 'data',
            title: 'Grow Road Map',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'location', type: 'string', title: 'Year'},  
                {name: 'title', type: 'text', title: 'Title'},     
                {name: 'detail', type: 'string', title: 'Detail'},   
              ],
             },],
          },
         
        ]
      }),
      defineField({
        name: 'news',
        title: 'Home Page : News',
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
        title: `${title ? 'Home Page' : 'Home Page'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
})
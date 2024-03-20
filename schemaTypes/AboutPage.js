import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import CountArray from "../src/Component/CountArray"

export default defineType({
    name: 'AboutPage',
    title: 'About Page',
    type: 'document',

    fields: [
      defineField({
        name: 'banner',
        title: 'Business Unit Page : Banner',
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
        ]
      }),
      defineField({
        name: 'category',
        title: 'About Page : Category',
        type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'Title'},      
              ],
             },],
      }),
      defineField({
        name: 'about',
        title: 'About Page : About',
        type: 'object',
        fields: [
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
        name: 'world',
        title: 'About Page : World',
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
        name: 'grow',
        title: 'About Page : Grow',
        type: 'object',
        fields: [
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
        name: 'gallery',
        title: 'About Page : Gallery',
        type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'image', type: 'image', title: 'Image',description:'Image Size: 360px x 360px'},
                {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},     
              ],
             },],
      }),
      defineField({
        name: 'PartnerYourBusiness',
        title: 'About Page : Partner Your Business',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {
            name: 'list',
            title: 'Detail List',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'title'}, 
                {name: 'detail', type: 'text', title: 'detail'},           
              ],
             },],
          },
          {name: 'images',
          title: 'Image',
          type: 'object',
            fields: [
              {name: 'image', type: 'image', title: 'Image',description:'Image Size: 1248px x 346px'},
              {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
            ],
          },
        ]
      }),
      defineField({
        name: 'partner',
        title: 'About Page : Partner',
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
   
        ]
      }),
      defineField({
        name: 'slide',
        title: 'About Page : Slide',
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
        title: `${title ? 'About Page : ภาพรวมของ Revomed' : 'About Page : ภาพรวมของ Revomed'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
  
})
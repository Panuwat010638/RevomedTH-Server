import {defineField, defineType} from 'sanity'
import SeoCountText from '../../src/Component/SeoCountText'
import SeoCountString from '../../src/Component/SeoCountString'
import CountArray from '../../src/Component/CountArray';

import slugify from 'slugify';

function generateSlug(text) {
  return slugify(text, {
    lower: true,
    remove: /[*+~.()'"!:@?,]/g,
    locale: 'en',
  });
}

export default defineType({
  name: 'newsTH',
  title: 'News (blog page)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'News Title',
      type: 'string',
    }),
    defineField({
      name: 'detail',
      title: 'News Short Detail',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'News Slug',
      type: 'object',
      validation: Rule => Rule.required(),
      fields: [
        {name: 'slugtitle', type: 'string', title: 'Title for internal reference',validation: Rule => Rule.required(),
        description:"💡this won't show up for users, just make sure you add a descriptive name which will make it easyto find this page later when adding links or searching & browsing the CMS."},
        {
          name: 'slug',
          title: 'Relative address on the website',
          type: 'slug',
          description:'Defines the URL of the page in the website.',
          validation: Rule => Rule.required(),
          options: {
            source: 'slug.slugtitle',
            maxLength: 20,
            slugify: (input) => generateSlug(input),
          },
        }
      ],
    }),
    defineField({
      name: 'category',
      title: 'News Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [{ type: 'newscategoryTH' }],
      options: {
        disableNew: true,
      }
    }),
    defineField({
      name: 'mainImage',
      validation: Rule => Rule.required(),
      title: 'News Cover Image',
      type: 'object',
      fields: [
        {name: 'image', type: 'image', title: 'News Cover Image',description:'Image Size: 1440px x 400px',options: {
          hotspot: true,
        },validation: Rule => Rule.required(),},
        {name:"border",type:"boolean",title:"Include border around the image?",initialValue: false},
        {name: 'alt', type: 'string', title: 'Descriptive label for screen readers & SEO',description: '📌 Optional but highly encouraged to make the content more accessible',},
      ],
      
    }),
    defineField({
      name: 'body',
      validation: Rule => Rule.required(),
      title: 'Content within the News',
      type: 'blockContent',
    }),
    defineField({
      name: 'date',
      title: 'Day/Month/Year the News was posted',
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
      title: 'title',
      subtitle: 'date' ,
      media: 'mainImage.image'
    },
    prepare(selection) {
      const {title, subtitle,media} = selection
      return {
        title: `${title ? `${title}` : 'News'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`,
        media: media
      }
    }
  }
})




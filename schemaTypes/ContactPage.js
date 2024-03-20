import {defineField, defineType} from 'sanity'
import SeoCountText from '../src/Component/SeoCountText'
import SeoCountString from '../src/Component/SeoCountString'
import CountArray from '../src/Component/CountArray';

export default defineType({
    name: 'ContactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
      defineField({
        name: 'header',
        title: 'Header',
        type: 'object',
        fields: [
          {name: 'header', type: 'string', title: 'Main Header'},
          {name: 'subheader', type: 'string', title: 'Sub Header'},
        ]
      }),
      defineField(
        {name:'location',type: 'object',title:'Revomed Location',
            fields: [
              {name: 'header', type: 'string', title: 'Location Header'},
              {name: 'locationText', type: 'text', title: 'Revomed Location'},
             
          ]},
      ),
      defineField(
        {name:'social',type: 'object',title:'Revomed Social',
            fields: [
              {name: 'header', type: 'string', title: 'Social Header'},
              {name: 'tel', type: 'string', title: 'Telephone Number'},
              {name: 'email', type: 'string', title: 'Email Address'},
              {name: 'line',type: 'object',
              fields: [
                {name: 'id', type: 'string', title: 'Line ID'},
                {name: 'link', type: 'string', title: 'Line URK Link'},
              ], title: 'Line'},
          ]},
      ),
      defineField(
        {name:'BusinessHours',type: 'object',title:'Revomed Business Hours',
            fields: [
              {name: 'header', type: 'string', title: 'Social Header'},
              {name: 'content', type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {name: 'day', type: 'string', title: 'Business Day'},
                  {name: 'time', type: 'string', title: 'Business Time'},         
                  
                ],
               },], 
              title: 'Business Hours Day & Time',
              },
          ]},
      ),
      defineField(
        {name:'input',type: 'object',title:'Contact Input Placeholder & Button',
            fields: [
              {name: 'name', type: 'string', title: 'Name Input Placeholder'},
              {name: 'lastname', type: 'string', title: 'Lastname Input Placeholder'},
              {name: 'email', type: 'string', title: 'Email Address Input Placeholder '},
              {name: 'tel', type: 'string', title: 'Telephone Number Input Placeholder'},
              {name: 'message', type: 'string', title: 'Message Input Placeholder'},   
              {name: 'button', type: 'string', title: 'Form Button'},  
          ]},
      ),
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
        title: `${title ? 'Contact Page' : 'Contact Page'}`,
        subtitle: `${subtitle ? `Publish at: ${subtitle}` : 'Language: Eng+TH'}`
      }
    }
  }
})
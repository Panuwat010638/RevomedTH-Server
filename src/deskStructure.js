import JsonPane from "./Component/JsonPane"

import { SocialPreview } from 'sanity-plugin-social-preview'

//Page
import { MdDomainVerification } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
//Review
import { MdRateReview } from "react-icons/md";
//Blog
import { IoNewspaper } from "react-icons/io5";
//Service
import { MdHomeRepairService } from "react-icons/md";

//Nav & Footer
import { BiSolidNavigation } from "react-icons/bi";
import { IoDocument } from "react-icons/io5";
//Category
import { FaFolder } from "react-icons/fa";

//Google
import { FaGoogle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

//Business Unit Page
import { MdAddBusiness } from "react-icons/md";
//Relationship
import { FaHandshake } from "react-icons/fa";
//CSR
import { MdGroups2 } from "react-icons/md";

export const structure = (S) =>{
  return S.list()
    .title('Menu')
    .items(
      [
        
        
          S.listItem()
          .title('Home Page')
          .icon(FaHome)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('HomePage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "HomePage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('HomePage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "HomePage" && language->title == "en" ')
                  ),
                ]
              )
          ),  
          S.listItem()
          .title('About Page')
          .icon(FaInfoCircle)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .child(
                    S.list()
                      .title('Page')
                      .items(
                        [
                          S.listItem()
                          .title('About Main')
                          .schemaType('AboutPage')
                          .child(
                            S.documentList()
                              .title('Thailand Page')
                              .filter('_type == "AboutPage" && language->title == "th" ')
                          ),
                          S.listItem()
                          .title('About CEO')
                          .schemaType('AboutCEO')
                          .child(
                            S.documentList()
                              .title('Thailand Page')
                              .filter('_type == "AboutCEO" && language->title == "th" ')
                          ),
                          S.listItem()
                          .title(' About Company')
                          .schemaType('AboutCompany')
                          .child(
                            S.documentList()
                              .title('Thailand Page')
                              .filter('_type == "AboutCompany" && language->title == "th" ')
                          ),
                        ]
                      )
                  ), 
                  S.listItem()
                  .title('EN')
                  .child(
                    S.list()
                      .title('Page')
                      .items(
                        [
                          S.listItem()
                          .title('About Main')
                          .schemaType('AboutPage')
                          .child(
                            S.documentList()
                              .title('English Page')
                              .filter('_type == "AboutPage" && language->title == "en" ')
                          ),
                          S.listItem()
                          .title('About CEO')
                          .schemaType('AboutCEO')
                          .child(
                            S.documentList()
                              .title('English Page')
                              .filter('_type == "AboutCEO" && language->title == "en" ')
                          ),
                          S.listItem()
                          .title(' About Company')
                          .schemaType('AboutCompany')
                          .child(
                            S.documentList()
                              .title('English Page')
                              .filter('_type == "AboutCompany" && language->title == "en" ')
                          ),
                        ]
                      )
                  ),  
                
                ]
              )
          ),    
          S.listItem()
          .title('Business Unit Page')
          .icon(MdAddBusiness)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('BusinessUnitPage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "BusinessUnitPage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('BusinessUnitPage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "BusinessUnitPage" && language->title == "en" ')
                  ),
                ]
              )
          ),  
          S.listItem()
          .title('Investment Relationship Page')
          .icon(FaHandshake)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('InvestmentPage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "InvestmentPage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('InvestmentPage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "InvestmentPage" && language->title == "en" ')
                  ),
                ]
              )
          ), 
          S.listItem()
          .title('News Page')
          .icon(IoNewspaper)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('NewsPage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "NewsPage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('NewsPage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "NewsPage" && language->title == "en" ')
                  ),
                ]
              )
          ), 
          S.listItem()
          .title('Corporate Social Responsibility Page')
          .icon(MdGroups2)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('CSRPage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "CSRPage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('CSRPage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "CSRPage" && language->title == "en" ')
                  ),
                ]
              )
          ), 
          S.listItem()
          .title('Contact Page')
          .icon(IoMdMail)
          .child(
            S.list()
              .title('Page')
              .items(
                [
                  S.listItem()
                  .title('TH')
                  .schemaType('ContactPage')
                  .child(
                    S.documentList()
                      .title('Thailand Page')
                      .filter('_type == "ContactPage" && language->title == "th" ')
                  ),
                  S.listItem()
                  .title('EN')
                  .schemaType('ContactPage')
                  .child(
                    S.documentList()
                      .title('English Page')
                      .filter('_type == "ContactPage" && language->title == "en" ')
                  ),
                ]
              )
          ), 
        S.listItem()
                .title('Navigation Bar')
                .icon(BiSolidNavigation)
                .child(
                  S.list()
                    .title('Page')
                    .items(
                      [
                        S.listItem()
                        .title('TH')
                        .schemaType('navbar')
                        .child(
                          S.documentList()
                            .title('Thailand Page')
                            .filter('_type == "navbar" && language->title == "th"')
                        ),
                        S.listItem()
                        .title('EN')
                        .schemaType('navbar')
                        .child(
                          S.documentList()
                            .title('English Page')
                            .filter('_type == "navbar" && language->title == "en"')
                        ),
                      ]
                    )
                ),
                S.listItem()
                .title('Footer Bar')
                .icon(IoDocument)
                .child(
                  S.list()
                    .title('Page')
                    .items(
                      [
                        S.listItem()
                        .title('TH')
                        .schemaType('footer')
                        .child(
                          S.documentList()
                            .title('Thailand Page')
                            .filter('_type == "footer" && language->title == "th"')
                        ),
                        S.listItem()
                        .title('EN')
                        .schemaType('footer')
                        .child(
                          S.documentList()
                            .title('English Page')
                            .filter('_type == "footer" && language->title == "en"')
                        ),
                      ]
                    )
                ),
   
          
S.divider(),
        
        S.listItem()
        .title('news')
        .icon(IoNewspaper)
        .child(
          S.list()
            .title('Pages')
            .items(
              [
                S.listItem()
                .title('TH')
                .schemaType('newsTH')
                .child(
                  S.documentList()
                    .title('Thailand Page')
                    .filter('_type == "newsTH"')
                ),
                S.listItem()
                .title('EN')
                .schemaType('newsEN')
                .child(
                  S.documentList()
                    .title('English Page')
                    .filter('_type == "newsEN"')
                ),
                S.listItem()
                .title('CN')
                .schemaType('newsCN')
                .child(
                  S.documentList()
                    .title('China Page')
                    .filter('_type == "newsCN"')
                ),
              ]
            )
        ),
        S.listItem()
        .title('Business Unit Content')
        .icon(MdAddBusiness)
        .child(
          S.list()
            .title('Pages')
            .items(
              [
                S.listItem()
                .title('TH')
                .schemaType('BusinessUnitContent')
                .child(
                  S.documentList()
                    .title('Thailand Page')
                    .filter('_type == "BusinessUnitContent" && language->title == "th"')
                ),
                S.listItem()
                .title('EN')
                .schemaType('BusinessUnitContent')
                .child(
                  S.documentList()
                    .title('English Page')
                    .filter('_type == "BusinessUnitContent" && language->title == "en"')
                ),
              ]
            )
        ),
S.divider(),
S.listItem()
        .title('News Category')
        .icon(FaFolder)
        .child(
          S.list()
            .title('Pages')
            .items(
              [
                S.listItem()
                .title('TH')
                .schemaType('newscategoryTH')
                .child(
                  S.documentList()
                    .title('Thailand Category')
                    .filter('_type == "newscategoryTH"')
                ),
                S.listItem()
                .title('EN')
                .schemaType('newscategoryEN')
                .child(
                  S.documentList()
                    .title('English Category')
                    .filter('_type == "newscategoryEN"')
                ),
                S.listItem()
                .title('CN')
                .schemaType('newscategoryCN')
                .child(
                  S.documentList()
                    .title('China Category')
                    .filter('_type == "newscategoryCN"')
                ),
              ]
            )
        ),
S.divider(),
S.listItem()
.title('Language')
.icon(MdLanguage)
.child(
  S.documentList()
    .title('Pages')
    .showIcons(false)
    .filter('_type == "language"')
), 
S.divider(),
          S.listItem()
          .title('Google Analytic Tag')
          .icon(FaGoogle)
          .child(
            S.documentList()
              .title('Pages')
              .showIcons(false)
              .filter('_type == "gaTag"')
          ),
          S.listItem()
          .title('Google Search Console')
          .icon(FaSearch)
          .child(
            S.documentList()
              .title('Pages')
              .showIcons(false)
              .filter('_type == "gsc"')
          ),
          S.listItem()
          .title('Facebook Pixel Tag')
          .icon(FaFacebookF)
          .child(
            S.documentList()
              .title('Pages')
              .showIcons(false)
              .filter('_type == "FacebookPixel"')
          ),
          
      ]
    )
}


   
  
export const defaultDocumentNodeResolver = (S) => S.document().views([
  S.view.form(),
  S.view.component(JsonPane).title('JSON'),
  S.view.component(SocialPreview({
    prepareData: ({mainImage,seo }) => ({
      title:seo?.titletag,
      description:seo?.description ,
      url: 'https://edencolors.co.th/blog/',
      image: mainImage,
    }),
  
  })).title('SEO Preview'),
 
]);

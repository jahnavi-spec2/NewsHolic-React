import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){ 
      super();
      console.log("Hello I am a constructor from news component");
      this.state={
        articles:[],
        loading: false
  //       articles: [
  //   {
  //     "source": {
  //       "id": "the-washington-post",
  //       "name": "The Washington Post"
  //     },
  //     "author": "Thomas Floyd",
  //     "title": "Column | A live TV gaffe turned the ‘Survivor 50’ finale into a fitting train wreck - The Washington Post",
  //     "description": "An inadvertent spoiler from host Jeff Probst ensured that a season filled with missteps would end with the biggest one of all.",
  //     "url": "https://www.washingtonpost.com/entertainment/tv/2026/05/21/live-tv-gaffe-turned-survivor-50-finale-into-fitting-train-wreck/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/YNUM7RDDZFGW5OVOFVO4P3SKSI.JPG&w=1440",
  //     "publishedAt": "2026-05-21T10:27:20Z",
  //     "content": "Survivor 50, the milestone season of CBSs indefatigable reality competition, concluded Wednesday night in fitting fashion: as a subversively entertaining train wreck.\r\nIt ultimately was Aubry Bracco … [+351 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Seattle Times"
  //     },
  //     "author": "GENE JOHNSON",
  //     "title": "The teens who attacked the Islamic Center of San Diego were latest to cite prior atrocities - The Seattle Times",
  //     "description": "An attack at a California Islamic center is the latest violence where the perpetrators said they were inspired by past atrocities, such as the 2019 massacre in Christchurch, New Zealand.",
  //     "url": "https://www.seattletimes.com/nation-world/nation/the-teens-who-attacked-the-islamic-center-of-san-diego-were-latest-to-cite-prior-atrocities/",
  //     "urlToImage": "https://images.seattletimes.com/wp-content/uploads/2026/05/05202026_islamic_center-tzr_tzr_212840.jpg?d=1200x630",
  //     "publishedAt": "2026-05-21T09:52:21Z",
  //     "content": "___\r\nEDITORS NOTE: This story includes discussion of suicide. If you or someone you know needs help, the national suicide and crisis lifeline in the U.S. is available by calling or texting 988.\r\n___\r… [+5017 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "John Liu, Yoonjung Seo",
  //     "title": "AI turned Samsung into a $1 trillion company. Its workers want a bigger slice of the pie - CNN",
  //     "description": "Samsung Electronics, South Korea’s largest corporation, has become one of the leading beneficiaries of the global artificial intelligence boom. But one segment of the country is unhappy with the result: Samsung workers.",
  //     "url": "https://www.cnn.com/2026/05/21/tech/south-korea-samsung-strike-intl-hnk",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2026-05-21t011056z-561505800-rc2ddlagk4ts-rtrmadp-3-samsung-elec-dispute.JPG?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2026-05-21T08:33:23Z",
  //     "content": "Samsung Electronics has become one of the leading beneficiaries of the global artificial intelligence boom. Surging demand for semiconductors has turned South Koreas largest corporation into a $1 tri… [+6281 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Rolling Stone"
  //     },
  //     "author": "Emily Zemler",
  //     "title": "Jimmy Kimmel Urges Viewers to Turn Off CBS After 'Colbert' Ends: 'Don't Ever Watch It Again' - Rolling Stone",
  //     "description": "Jimmy Kimmel told his viewers not to watch CBS again after the finale of Stephen Colbert's 'The Late Show' airs this week.",
  //     "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/jimmy-kimmel-stephen-colbert-late-show-cbs-finale-1235566779/",
  //     "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2026/05/kimmel_cdd857.jpg?crop=0px%2C15px%2C1355px%2C763px&resize=1600%2C900",
  //     "publishedAt": "2026-05-21T06:15:06Z",
  //     "content": "Jimmy Kimmel urged fans not to tune into CBS after The Late Show comes to an end tonight. On Wednesday night’s episode of Jimmy Kimmel Live, the host reminded his audience that there would not be a n… [+2056 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Colorado Public Radio"
  //     },
  //     "author": "Bente Birkeland",
  //     "title": "Colorado Democrats censure Gov. Jared Polis over Tina Peters commutation - Colorado Public Radio",
  //     "description": "The Democrats have barred Polis from speaking at Democratic party events.",
  //     "url": "https://www.cpr.org/2026/05/20/colorado-democrats-censure-jared-polis/",
  //     "urlToImage": "https://wp-cpr.s3.amazonaws.com/uploads/2026/01/260115-GOVERNOR-JARED-POLIS-STATE-OF-THE-STATE-ADDRESS-COPOLITICS-KEVINJBEATY-57.jpg",
  //     "publishedAt": "2026-05-21T06:01:11Z",
  //     "content": "Updated at 10:01 p.m. on Wednesday, May 20, 2026\r\nThe Colorado Democratic Party voted to formally censure the states top elected Democrat, Gov. Jared Polis. The party also suspended him from speaking… [+6388 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CNBC"
  //     },
  //     "author": "Alex Harring",
  //     "title": "S&P 500 futures edge lower as traders analyze Nvidia earnings: Live updates - CNBC",
  //     "description": "The S&P 500 ended a three-day losing streak on Wednesday.",
  //     "url": "https://www.cnbc.com/2026/05/20/stock-market-today-live-updates.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/108309793-1779286801172-gettyimages-2277289459-mms23669_ujo2vlqg.jpeg?v=1779286869&w=1920&h=1080",
  //     "publishedAt": "2026-05-21T04:05:00Z",
  //     "content": "S&amp;P 500 futures were marginally lower early Thursday as investors debated whether Nvidia's earnings report met the high bar set for the artificial intelligence titan.\r\nFutures tied to the broad i… [+1758 chars]"
  //   }

  // ]
      }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d126c7cfca814cda83b4da561e7ad390";
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
  
  
  render() {

      
 
    return (
      <div className="container my-3">
        <h2>NewHolic -Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title?element.title : " "} description={element.description?element.description.slice(0, 100) :""} newsUrl={element.url} imageUrl={element.urlToImage}/>
         </div>
        }
        )}
        <div className="contatiner d-flex justify-content-between">
          <button  type="button" class="btn btn-info">Previous</button>
          <button type="button" class="btn btn-success">Next</button>
        </div>
         </div>
         </div>
      
      
    )
  }
}

export default News
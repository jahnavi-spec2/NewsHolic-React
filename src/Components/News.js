import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
   

  static defaultProps={
    country: 'in',
    pageSize: 8, 
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){ 
      super();
      console.log("Hello I am a constructor from news component");
      this.state={
        articles:[],
        loading: false,
        page: 1,
        totalResults: 0
 
      }
    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d126c7cfca814cda83b4da561e7ad390&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
       loading: false })
      }
    
  handlePreviousClick= async ()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d126c7cfca814cda83b4da561e7ad390&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
     
    this.setState({loading: true});
    let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        loading:false,
        page: this.state.page - 1,
      articles:parsedData.articles
    })
  }

  handleNextClick= async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

   
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d126c7cfca814cda83b4da561e7ad390&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     this.setState({ loading: true });
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        loading: false,
      page: this.state.page + 1,
    articles:parsedData.articles});

      }
    }
 
    render() {  

   
    return (
      <div className="container my-3">
        <h1 className="text-center"style={{ margin: '30px 0' }}>NewHolic -Top Headlines</h1>
      {this.state.loading && <Spinner />}
       <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
          return (
          <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title?element.title : " "} description={element.description?element.description.slice(0, 100) :""} 
           newsUrl={element.url} 
           imageUrl={element.urlToImage}
           author={element.author? element.author : "Unknown"} date={new Date(element.publishedAt).toGMTString()} />
         </div>
         );
         })}
       </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1>=Math.ceil(this.state.totalResults/this.props.pageSize)} type ="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
         </div>
      
      
      
    )
  }

}

export default News
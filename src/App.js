
import React, { Component } from 'react';
import axios from 'axios';

import './style/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news_items: {},
      results: false,
      status: "SEARCHING..."
    };

    this.fetchNewsItems = this.fetchNewsItems.bind(this);
  }

  fetchNewsItems() {
    axios.get(
      `/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
      { withCredentials: true },
      {"Access-Control-Allow-Origin": "*"},
      { crossdomain: true }
    ).then(response => {
      this.setState({
        news_items: response.data,
        results: true
      });
      console.log("It worked!", this.news_items);
    }).catch(error => {
      console.log("Something went wrong!", error)
    })
  }

  componentDidMount() {
    this.fetchNewsItems();
  }

  render() {
    return (
      <div className="App">
        <h1>News Ticker App</h1>
        <h2>This is working.</h2>
        <p>This app is in {process.env.NODE_ENV} mode</p>
        <p>The secret key is {process.env.REACT_APP_SECRET_KEY}</p>
        {
          this.state.results ? (
            <div>
              <p>Results Found: {this.state.news_items.totalResults}</p>
              <hr />
              {
                this.state.news_items.articles.map(article => {
                  const article_id = this.state.news_items.articles.indexOf(article);
                  return (
                    <div key={article_id}>{article.title}<hr/></div>
                  )
                })
              }
            </div>
          ) : (
        <p>Searching for results...</p>
          )
        }

      </div>
    )
  }
}
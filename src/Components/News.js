import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: PropTypes.string,
    articals: PropTypes.array,
    country: "in",
    pageSize: 10,
    totalCount: 0,
    page: 0,
  };

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    articals: PropTypes.array,
    pageSize: PropTypes.number,
    totalCount: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articals: [],
      loading: true,
      page: 1,
      pageSize: 10,
      totalCount: 0,
    };

    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }-NewsMonkey`;
  }

  async componentDidMount() {
    this.props.setProgress(15);
    let newsUrl = `newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let apiResult = await fetch("https://" + newsUrl);
    this.props.setProgress(30);
    let res = await apiResult.json();
    this.props.setProgress(75);
    if (res != null) {
      this.setState({
        articals: res.articles,
        loading: false,
        totalCount: res.totalResults,
      });
    }
    this.props.setProgress(100);
  }

  

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const newsUrl = `newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let apiResult = await fetch("https://" + newsUrl);
    let res = await apiResult.json();
    if (res != null) {
      this.setState({
        articals: this.state.articals.concat(res.articles),
        totalCount: res.totalResults,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="text-center my-2">
          <h1>
            Top-Headlines-
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </h1>
        </div>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articals.length}
          next={this.fetchMoreData}
          hasMore={this.state.articals.length !== this.state.totalCount}
          loader={<Spinner/>}
          
          scrollThreshold={1}
        >
          <div className="row" style={{overflowX:'hidden'}}>
            {this.state.articals.map((ele, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={ele.title ? ele.title : ""}
                    description={ele.description ? ele.description : ""}
                    url={
                      ele.urlToImage
                        ? ele.urlToImage
                        : "http://cdn.wionews.com/sites/default/files/2023/03/31/342304-untitled-design-2023-03-31t162222067.png"
                    }
                    newsUrl={ele.url}
                    auther={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;

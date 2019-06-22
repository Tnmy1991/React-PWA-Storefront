import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isDetails: false,
      page: 1,
      totalPages: 1,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.edelimmersys.com/wp-json/wp/v2/posts")
      .then(res => {
        this.setState({
          totalPages: res.headers.get('x-wp-totalpages')
        });
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            page:  ++this.state.page,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  fetchDetails(id, e) {
    e.preventDefault();

    fetch("https://www.edelimmersys.com/wp-json/wp/v2/posts/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            isDetails: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  loadMoreContent(e) {
    e.preventDefault();

    fetch("https://www.edelimmersys.com/wp-json/wp/v2/posts?page=" + this.state.page)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: this.state.items.concat(result),
            page:  ++this.state.page
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, isDetails, items } = this.state;
    this.state.isLoaded = false;
    this.state.isDetails = false;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(isDetails) {
      return (
        <div className="details">
            {ReactHtmlParser(items.content.rendered)}
        </div>
      );
    } else {
      return (
        <ol>
          {items.map(item => (
            <li key={item.slug}>
              <a href={item.slug} onClick={(e) => this.fetchDetails(item.id, e)}>{ReactHtmlParser(item.title.rendered)}</a>
            </li>
          ))}
          {this.state.page < (parseInt(this.state.totalPages) + 1) &&
            <a href="#load-more" onClick={(e) => this.loadMoreContent(e)}>Load More</a>
          }
        </ol>
      );
    }
  }
}

export default Posts;

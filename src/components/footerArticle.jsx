import React from "react";

class ArticleFooter extends React.Component {
  render() {
    return (
      <div className="footer-article">
        {this.props.articles.map((article) => {
          return ( 
            <ul className="article-list">
              <p className="article-list__title">{article.title}</p>

              {article.link.map((links) => (
                <li className="article-list__item">{links}</li>
              ))}
            </ul>
          );
        })}
      </div>
    );
  }
}
export default ArticleFooter;

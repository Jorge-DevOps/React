import React from "react";
import "../styles/categories.css";
class Categories extends React.Component {
  render() {
    return (
      <ul className="categories-list">
        {this.props.categories.map((category) => {
          return (
            <li className="categories-item" key={category.id}>
              <img
                src={category.image}
                alt=""
                className="categories-item__img"
              />
              <p className="categories-item__title">{category.title}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Categories;

import React from 'react'
import './Product.css'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";


function Product(props) {
  const products = props.details.filter((i) => {
      return props.search.trim() === ""
        ? i
        : i.title.trim().includes(props.search);
    }).map(item => {
        return (
          <div className="col-lg-2 col-md-6 col-10 product" key={item.id}>
            <img
              alt="product"
              src={item.image}
              className="productImg img-fluid"
            />
            <Badge className='badge' bg={props.color}>{props.type}</Badge>
            <h6>{item.title}</h6>
            <div className="rate">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="price">
              <h6>price</h6>
              <span>${item.price}</span>
            </div>
            <button
              onClick={() => {
                const pop = document.querySelector(".pop");
                console.log(item.title);
                pop.setAttribute("style", "display:flex");
                pop.children[1].children[0].src = item.image;
                pop.children[1].children[1].children[0].textContent = `Title : ${item.title}`;
                pop.children[1].children[1].children[1].textContent = `Category : ${item.category}`;
                pop.children[1].children[1].children[2].textContent = `Description : ${item.description}`;
                pop.children[1].children[1].children[3].textContent = `${item.price}`;
              }}
            >
              Show Details
            </button>
          </div>
        );
    })
  return (
    <>
      {products}
      {/* {clicked === true ? <Pop />:false} */}
    </>
  );
}

export default Product
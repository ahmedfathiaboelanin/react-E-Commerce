/* eslint-disable jsx-a11y/heading-has-content */
import React ,{ useContext } from 'react'
import './Pop.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { countContext, cartItemContext } from "../../App";

function Pop() {
  const count = useContext(countContext);
  const cartItem = useContext(cartItemContext);
  return (
    <div className="pop container">
      <AiFillCloseCircle
        className="closeIcon"
        onClick={() => {
          document.querySelector(".pop").setAttribute("style", "display:none");
        }}
      />
      <div className="row justify-content-between align-items-center">
        <img className="col-lg-6 col-6" src="" alt="product" />
        <div className="col-lg-6 col-6 text">
          <h6></h6>
          <h6></h6>
          <p></p>
          <h6></h6>
          <h6>
            Rate :
            <FaStar className="startIcons" />
            <FaStar className="startIcons" />
            <FaStar className="startIcons" />
            <FaStar className="startIcons" />
            <FaStar className="startIcons" />
            <FaStarHalfAlt className="startIcons" />
          </h6>
            <button
            onClick={() => {
              let pop = document.querySelector(".pop");
              count.setCount(count.count + 1);
              pop.setAttribute("style", "display:none");
              cartItem.setCartItem([
                ...cartItem.cartItem
                , {
                  img: pop.children[1].children[0].src,
                  price: pop.children[1].children[1].children[3].textContent,
                  title: pop.children[1].children[1].children[0].textContent,
                }
              ]);
              }}
            >
              Buy Now
            </button>
        </div>
      </div>
    </div>
  );
}

export default Pop
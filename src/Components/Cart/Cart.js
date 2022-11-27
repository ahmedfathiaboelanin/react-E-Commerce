import React, { useContext, useState ,useEffect} from 'react'
import './Cart.css'
import { cartItemContext, loginContext, countContext } from "../../App";
import Product from '../product/Product';
import axios from 'axios';
import Pop from '../pop/Pop';
import {Link} from 'react-router-dom'


function Cart() {
  const [cat, setCat]=useState([])
  const [total, setTotal] = useState(0)
  const sum =[]
  const cartItem = useContext(cartItemContext);
  const logged = useContext(loginContext);
  const count = useContext(countContext);
  let id = 0;
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing?limit=5")
      .then((res) => setCat(res.data));
  }, []);
  return (
    <div>
      <section className="tableSec">
        <div className="container">
          <div className="row justify-content-center">
            <table className="table col-10">
              <tr className="first-row">
                <td>product</td>
                <td>Quantity</td>
                <td className="last-col">Price</td>
              </tr>
              {cartItem.cartItem.map((item) => {
                id += 1;
                return (
                  <tr className="borderbottom" key={id + 1}>
                    <td className="first-col">
                      <img src={item.img} alt={item.title} />
                      <p>{item.title}</p>
                    </td>
                    <td className="secCol">
                      <input
                        onChange={(event) => {
                          let input = event.target;
                          input.parentNode.parentNode.children[2].textContent = `${
                            item.price * input.value
                            }$`;
                          let priceDiv = document.querySelectorAll(".price");
                          for (let i = 0; i < priceDiv.length; i++){
                            sum.push(
                              Number(
                                priceDiv[i].textContent
                                  .split("$")[0]
                                  .split("price")[0]
                              )
                            );
                          }
                          let overAll = sum.reduce(function (
                            acc,
                            current,
                            index,
                            arr
                          ) {
                            return acc + current;
                          });
                          setTotal(overAll)
                        }}
                        type="number"
                        placeholder="1"
                        min={0}
                        max={100}
                      />
                    </td>
                    <td className="last-col price">
                      {item.price}
                      <span>$</span>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className="col-12 mt-5 d-flex justify-content-center">
              <h4>
                Total : <span style={{ color: "var(--btn)" }}>{total}</span>
              </h4>
            </div>
            <Link type="button" id="confirm" onClick={() => {
              if (logged.logged) {
                count.setCount(0);
                cartItem.setCartItem([])
              } else {
                return false;
              }
            }} to={`/${logged.logged? 'congratulations':'login'}`} className="confirm col-3 mt-5">
              Confirm
            </Link>
          </div>
        </div>
      </section>
      <section className="hot border-top">
        <h3 className="title">Best Sales</h3>
        <div className="container-fluid">
          <div className="row gap-3 justify-content-center">
            <Product search='' details={cat} />
          </div>
        </div>
      </section>
      <Pop />
    </div>
  );
}

export default Cart
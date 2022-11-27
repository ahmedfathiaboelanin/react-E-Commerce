import React, { useEffect, useState } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Product from "../product/Product";
import Pop from "../pop/Pop";
import img from '../../img/davide-boscolo-gz9njd0zYbQ-unsplash.jpg'
import cloth from '../../img/milada-vigerova-p8Drpg_duLw-unsplash.jpg'
import jewellery from '../../img/carlos-esteves-1MWbwTaeJIA-unsplash.jpg'
import men from '../../img/md-salman-tWOz2_EK5EQ-unsplash.jpg'

function Home(props) {
  const [product, setProduct]=useState([])
  const [cat, setCat]=useState([])
  const [slider, setSlider]=useState([])
  const [hot, setHot] = useState({})
  const slidImg = [
    {
      id: 1,
      title: "Mens Fashion",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        `${jewellery}`,
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 3,
      title: "Mens Fashion",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        `${img}`,
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 4,
      title: "Mens Fashion",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        `${cloth}`,
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 5,
      title: "Mens Fashion",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        `${men}`,
      rating: { rate: 3.9, count: 120 },
    },
  ];
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5").then(res => {
      setSlider(res.data);
    });
    axios.get("https://fakestoreapi.com/products?limit=5").then(res=>setProduct(res.data));
    axios
      .get("https://fakestoreapi.com/products/17")
      .then((res) => setHot(res.data));
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => setCat(res.data));
  }, []);
  const sliderImg = slidImg.map(slide => {
    return (
      <div className="slide" key={slide.id}>
        <img src={slide.image} alt={slide.title} className="img-fluid" />
        <div className="layer"></div>
      </div>
    );
  })
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="">
      <Slider {...settings} className="">
        {sliderImg}
      </Slider>
      <section className="hot">
        <h3 className="title">New products</h3>
        <div className="container-fluid">
          <div className="row gap-3 justify-content-center">
            <Product search='' type='New' color='success' details={product} />
          </div>
        </div>
      </section>
      <section className="Hot">
        <div className="container">
          <div className="row justify-content-center align-items-center gap-5">
            <div className="col-lg-4 col-10">
              <img src={hot.image} alt="Hot Product" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-10">
              <h4 className="text-light">{hot.title}</h4>
              <button
                className="button"
                onClick={() => {
                  const pop = document.querySelector(".pop");
                  pop.setAttribute("style", "display:flex");
                  pop.children[1].children[0].src = hot.image;
                  pop.children[1].children[1].children[0].textContent = `Title : ${hot.title}`;
                  pop.children[1].children[1].children[1].textContent = `Category : ${hot.category}`;
                  pop.children[1].children[1].children[2].textContent = `Description : ${hot.description}`;
                  pop.children[1].children[1].children[3].textContent = `Price : $${hot.price}`;
                }}
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hot">
        <h3 className="title">Best Sales</h3>
        <div className="container-fluid">
          <div className="row gap-3 justify-content-center">
            <Product search='' type='-30%' color='danger' details={cat} />
          </div>
        </div>
      </section>
      <Pop />
    </div>
  );
}

export default Home;

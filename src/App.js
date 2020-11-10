import React from "react";
import logo from "./logo.svg";
import "./Style.css";
import ReviewItems from "./Reviews";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk></FotoProduk>
      <ProdukInfo
        isDiscount="yes"
        title="Pink Swagg Sneaker"
        category="LEBARAN"
      ></ProdukInfo>
      <ReviewItems></ReviewItems>
    </div>
  );
}

// todo Foto Produk
function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" />
    </div>
  );
}

// todo CheckDiscount
function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return <p>Discount {discount}% off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon..</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

// todo Produk Info
function ProdukInfo(props) {
  // const category = "SNEAKER BAIK BULIR";
  const { category, title, isDiscount } = props;
  const price = "IDR 73.309.999";
  const benefits = [
    "Tidak kusut terkena air",
    "Tidak gerah",
    "Nyaman digunakan",
  ];
  const listBenefits = benefits.map((itemBenefit) => (
    <li key={itemBenefit}> {itemBenefit} </li>
  ));
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate"> {category} </p>
        <h1 className="Title"> {title} </h1>
        <p className="Price"> {price} </p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One of the most recognizable shoes in the AJ collection, the Air
          Jordan 3 Retro features lightweightm visible cushioning just like the
          original from '88. Signature details and materials celebrate the
          game-changing icon.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(title, e)} href="#">
          Add to Cart
        </a>{" "}
        <br></br>
        <a onClick={(e) => KurangCart(title, e)} href="#">
          Delete from Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk " + e);
}

function KurangCart(e) {
  return console.log("Mengurangi produk " + e);
}

// * pengecekan proptypes
CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
};

export default App;

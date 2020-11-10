import React from "react";
import "./Style.css";

// todo Review Item
function Reviews() {
  // * mempersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: "Masayoshi",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Reza",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-guy-614810.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Nadiah",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      avatar:
        "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const listReviews = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.avatar}></img>
      <div className="User">
        <h3> {itemReview.name} </h3>
        <p> {itemReview.review} </p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
    </div>
  );
}

export default Reviews;

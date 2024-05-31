import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary"onClick={()=>props.decrementQuantity(props.index)}>
            -
          </button>
          <button type="button" class="btn btn-secondary">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-secondary" onClick={()=>props.incrementQuantity(props.index)}>
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity*props.product.price}
      </div>
    </div>
  );
}

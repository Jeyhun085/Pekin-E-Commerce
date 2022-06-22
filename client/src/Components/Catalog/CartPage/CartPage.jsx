import React, { Fragment } from "react";
import CartItemsTable from "./CartItemsTable"
import CheckOutForm from "./CheckOutForm"

export default function CartPage() {
  return (
    <Fragment>
    <div className="home-container">
    <h1>This is Cart Page</h1>
    <CartItemsTable />
    <CheckOutForm />
    </div>
    </Fragment>
  );
}
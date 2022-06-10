import React, { Fragment } from "react";
import CartItemsTable from "./CartItemsTable"

export default function Home() {
  return (
    <Fragment>
    <div className="home-container">
    <h1>This is Cart Page</h1>
    <CartItemsTable></CartItemsTable>
    </div>
    </Fragment>
  );
}
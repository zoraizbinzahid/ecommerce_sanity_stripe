import React from "react";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>ZORAIZ</Link>
      </p>
      <buton
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <FaOpencart />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </buton>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

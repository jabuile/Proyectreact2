import React from "react";
import { FaCartPlus  } from "react-icons/fa";
import '../SCSS/Footer.scss'

function CartWidget (){
    return  <button className="BotonCart">
                <FaCartPlus />
            </button>
}

export default CartWidget;

import React from "react";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <>
          <ul>
                <li><button>Inicio</button></li>
                <li><button>Contacto</button></li>
                <li><button>Servicios</button></li>
                <li><button>Productos</button></li>
            </ul>
    <CartWidget/>
        </>
    )
} ;

export default NavBar;
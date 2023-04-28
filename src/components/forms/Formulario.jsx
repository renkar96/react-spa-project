import React from 'react'
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { collection } from "firebase/firestore";
import db from "../../../db/firebase-config"
import "./formulario.css"


const Formulario = () => {

    const { cart } = useContext(dataContext);
    const { register, handleSubmit } = useForm();
    const ordersRef = collection(db, 'ordenes');


    const storeOrder = async (e) => {
        e.preventDefault();
        const buyer = {
            nombre: document.querySelector('#nombre').value,
            direccion: document.querySelector('#direccion').value,
            celular: document.querySelector('#celular').value,
            correo: document.querySelector('#correo').value,
            products: cart
        }

        const newOrder = await addDoc(ordersRef, buyer);
        const orderRef = doc(db, 'ordenes', newOrder.id);
        const orderDoc = await getDoc(orderRef);
        const order = { ...orderDoc.data(), id: newOrder.id };
        setOrder(order);

    }

    return (
        <>
            <div >
                <div >formulario</div>
                <form className='container-form'>
                    <div>
                        <label>nombre</label>
                        <input type="text" name="" id='nombre' />
                    </div>
                    <div>
                        <label>direccion</label>
                        <input type="text" name="" id='direccion' />
                    </div>
                    <div>
                        <label>numero celular</label>
                        <input type="text" name="" id='celular' />
                    </div>
                    <div>
                        <label>correro electronico</label>
                        <input type="text" name="" id='correo' />
                    </div>
                    <input type='submit' value="Terminar" onClick={storeOrder}></input>
                </form>
            </div>
        </>
    )
}

export default Formulario
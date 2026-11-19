import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelBuy, dontBuy, newBuy } from '../reducer/cartSlicer';

function Cart() {
  const cart = useSelector((state) => state.data.cart)
  const dispatch = useDispatch()

  const totalPrice = cart?.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0) || 0;

  return (
    <div>
      <div className="cart-inner">
        {/* Sarlavha va umumiy narx turgan qator */}
        <div className="flex justify-between items-center my-4">
          <h2 className="cart-title text-5xl font-bold text-blue-800">Cart🛒</h2>
          {cart && cart.length > 0 && (
            <h3 className="text-3xl font-bold text-green-700">
              Jami: {totalPrice} so'm
            </h3>
          )}
        </div>

        <div className="cart-box flex flex-wrap items-center gap-2 bg-white rounded-4xl shadow-xl shadow-blue-900 p-5">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div
                className="cart-item w-full flex flex-wrap items-center justify-between bg-blue-300 rounded-4xl shadow-sm shadow-black p-5"
                key={item.id}
              >
                <div className="cart-left">
                  <h4 className="cart-inner-left text-2xl font-bold text-blue-600">
                    {item.title}
                  </h4>
                  <p className="price text-xl font-bold text-blue-600">{item.price} so'm</p>
                  <p className="quantity text-xl font-bold text-blue-600">{item.quantity} ta</p>
                </div>
                <div className="cart-right flex items-center gap-7">
                  <button
                    className="add-cart text-2xl font-extrabold text-green-700 border-2 border-blue-900 px-1 pb-1 rounded-2xl" onClick={() => dispatch(newBuy(item))}>+</button>
                  <button className="minus-cart text-2xl font-extrabold text-red-700 border-2 border-red-900 px-2 pb-1 rounded-2xl" onClick={() => dispatch(dontBuy(item.id))}>-</button>
                  <button className="remove-cart text-2xl font-extrabold border-2 border-black px-1 pb-1 rounded-2xl" onClick={() => dispatch(cancelBuy(item.id))}>x</button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-2xl font-bold text-red-700">No value</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {
  // Xato shu yerda edi: state.data.cart bo'lishi kerak
  // Optional chaining (?.) qo'shdim, toki ilova ishga tushganda xato bermasin
  const cart = useSelector((state) => state.data?.cart || [])

  const divlarSoni = cart.length

  return (
    <div className='flex items-center justify-between py-5 px-30 bg-blue-600'>
      <img src="/favicon.svg" alt="" />

      <div className="flex items-center gap-6">
        <NavLink className="font-bold text-blue-900 text-[17px] hover:underline" to={"/"}>
          Mahsulot
        </NavLink>

        <div className="cart-btn relative">
          <NavLink to={"/cart"} className="font-bold text-blue-900 text-[17px] hover:underline">
            Savatcha
            <sup className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {divlarSoni}
            </sup>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
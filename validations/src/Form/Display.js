import React from 'react'

function Display({user}) {
  return (
    <div>
        <h1>Name : {user.name}</h1>
        <h1>No.of Ticket : {user.ticket}</h1>
        <h1>Adult : {user.adult}</h1>
        <h1>Child : {user.childCount}</h1>
        <h1>Seat : {user.seat.toString()}</h1>
        <h1>Total : ₹ {user.total}</h1>
    </div>
  )
}

export default Display
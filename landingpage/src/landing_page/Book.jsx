import React from 'react'
import './Book.css'
export default function Book() {
  return (
    <div className='book'>
      <div className='booking'>
    <form>
      <h2>
        Booking Form 
      </h2>
         Name : <br/>
         <input type="text" placeholder="Enter your Name" /> <br/> <br/>
         City : <br/>
         <input type="text" placeholder="Enter your City" /> <br/><br/>
         State : <br/>
         <input type="text" placeholder="Enter your State"/> <br/> <br/>
         Country : <br/>
         <input type="text" placeholder="Enter your Country"/> <br/> <br/>
         Contact Number : <br/>
         <input type="text" placeholder="Enter your phone number"/> <br/><br/>
          Email : <br/>
         <input type="text" placeholder="ex : you@holidays.com"/> <br/> <br/>
          City : <br/>
         <input type="text" placeholder="Enter your choice"/> <br/> <br/>
         No. of days of the trip : <br/>
         <input type="number" placeholder="Enter the number"/> <br/><br/>
        
         Package :
         <input type="radio" name="typ"/> Basic 
         <input type="radio" name="typ"/> Standard
         <input type="radio" name="typ"/> Luxury <br/> <br/>
         Mode of payment : <br/>
         <input type="radio" name="pay"/> Credit/Debit Cars<br/>
         <input type="radio" name="pay"/> UPI <br/>
         <input type="radio" name="pay"/> Net Banking <br/>
         <input type="radio" name="pay"/> Google pay/Paytm <br/><br/>
         <button>Submit</button>
    </form>

      </div>
    </div>
  )
}

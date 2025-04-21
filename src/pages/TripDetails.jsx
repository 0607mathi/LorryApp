import React from 'react'
import '../pages/css/Trip.css'
import NavBar from '../pages/NavBar.jsx'
const TripDetails = () => {
  return (
    <div className='trip'>
        <NavBar />
        <div className="container">
   <div className="trip-details">
      <form action="">
      <h3>Trip Details</h3>
          <div>
            <div>
               <label for="lorryNumber">Lorry Number</label>
               <input type="text" name='lorryNumber' id='lorryNumber' value={'TN 30 CW 8188'} placeholder='Vechical No'/>
            </div>
            <div>
               <label for="advance">Advance</label>
               <input type="number" name='advance' id='advance' placeholder='Amount' value={20000}/>
            </div>
            <div>
               <label for="Driver1">Driver 1</label>
               <input placeholder='Driver Name' type="text" name='Driver1' id='Driver1' />
            </div>
            <div>
               <label for="Driver2">Driver 2</label>
               <input placeholder='Driver Name' type="text" name='Driver2' id='Driver2' />
            </div>
        
            <div>
              <label for="date">Date</label>
              <input placeholder='Date' type="date" name='date' id='date' />
            </div>
            <div>
              <label for="from">From</label>
              <input placeholder='Pickup Point' type="text" name='from' id='from'/>
            </div>
            <div>
              <label for="to">To</label>
              <input placeholder='Drop Point' type="text" name='to' id='to'/>
            </div>
            <div>
              <label for="load">load</label>
              <input placeholder='Load' type="text" name='load' id='load'/>
              </div>
            <div>
              <label for="income">income</label>
              <input placeholder='Amount' type="number" name='income' id='income'/>
            </div>
            <div>
              <label for="loading">Loading</label>
              <input placeholder='Amount' type="number" name='loading' id='loading'/>
            </div>
            <div>
              <label for="unloading">Unloading</label>
              <input placeholder='Amount' type="number" name='unloading' id='unloading'/>
            </div>
            </div>
            <span className="btns">
              <button>Add</button>
              <button>back</button>
            </span>
      </form>
   </div>

   {/* data tabel */}
   <div className="data">
    <table>
      <thead>
        <tr>
          <th colspan="2">Vechical No</th>
          <th colspan="2">Advance</th>
          <th colspan="2">Driver 1</th>
          <th colspan="2">Driver 2</th>
        </tr>
        <tr>
          <td colspan="2">TN 30 CW 8188</td>
          <td colspan="2">20000</td>
          <td colspan="2">varthan</td>
          <td colspan="2">Murugesan</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>S.No</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Load</th>
          <th>Income</th>
          <th>Loading</th>
          <th>Unloading</th>
          {/* <th>Edit</th> */}
        </tr>
        <tr>
          <td>1</td>
          <td>06-09-2002</td>
          <td>Salem</td>
          <td>Chennai</td>
          <td>Books</td>
          <td>10000</td>
          <td>100</td>
          <td>100</td>
          {/* <td><button>edit</button></td> */}
        </tr>
      </tbody>
    </table>
    <button>Save</button>
   </div>
</div>
    </div>
  )
}

export default TripDetails
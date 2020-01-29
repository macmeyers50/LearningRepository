import React, { Component } from 'react';
import './MyTable.css'
class MyTable extends Component {
    render() {
      return(
          
       <table border="2">
       <tr>
         <th>Company Name</th>
         <th>Number of Items to Ship</th>
         <th>Next Action</th>
       </tr>
       <tr>
         <td >Adam’s Greenworks</td>
         <td>14</td>
         <td>Package Items</td>
       </tr>
       <tr>
       <td>Davie's Burgers</td>
       <td>2</td>
       <td>Send Invoice</td>
     </tr>
     <tr>
       <td>Baker's Bike Shop</td>
       <td>3</td>
       <td>Send Invoice</td>
     </tr>
     <tr>
       <td>Miss Sally's Southern</td>
       <td>4</td>
       <td>Ship</td>
     </tr>
     <tr>
       <td>Summit Resort Rentals</td>
       <td>4</td>
       <td>Ship</td>
     </tr>
     <tr>
       <td>Strike Fitness</td>
       <td>1</td>
       <td>Enter Order</td>
     </tr>
     </table>
      )
    }
  }

  export default MyTable;
import { Dialog } from '@material-ui/core';
import React, {useState} from 'react'

const NayaRate = ({orders, open}) => {
  const handleClose = (open) =>{
    open = false;
  }
    return (<>
      {orders == null ? null : (
        <Dialog 
        open = {open}
        onClose = {handleClose(open)}
      >

      
        <div class="rate">
          <h1>New Quote </h1>
          <section class="accordion">
            <input
              type="checkbox"
              name="collapse"
              id="handle1"
              checked="checked"
            />
            <h2 class="handle">
              <label for="handle1">{orders[0].billNumber}</label>
            </h2>
            <div class="content">
            <fieldset style = {{border : '0px'}}>
                <legend style = {{fontWeight: "bold", marginBottom: "5px"}}>Caller</legend>
                <div> {orders[0].caller.name} </div>
                       <div> {orders[0].caller.adress1} </div>
                        <div>{orders[0].caller.adress2} </div>
                        <div>{orders[0].caller.city} </div>
                        <div>{orders[0].caller.province}  {orders[0].caller.postalCode}</div>
                        <div>Phone: {orders[0].caller.phoneNumber}</div> 
                        <div> Contact: {orders[0].caller.contact}</div><br />
          </fieldset>
          <fieldset style = {{border : '0px'}}>
                <legend style = {{fontWeight: "bold", marginBottom: "5px"}}>Charges</legend>
                <div> Subtotal:  {orders[0].charges} </div>
                       <div> Grand Total:  {orders[0].totalCharges} </div><br />
          </fieldset>
            </div>
            </section>
            <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle3" />
          <h2 class="handle">
            <label for="handle3">Details</label>
          </h2>
          <div class="content">
            <p>
              <strong>Overall Impression:</strong> A pale, somewhat spicy, dry,
              strong Trappist ale with a pleasant rounded malt flavor and firm
              bitterness. Quite aromatic, with spicy, fruity, and light alcohol
              notes combining with the supportive clean malt character to
              produce a surprisingly drinkable beverage considering the high
              alcohol level.
            </p>
            <p>
              <strong>History:</strong> Originally popularized by the Trappist
              monastery at Westmalle.
            </p>
          </div>
        </section>
        </div>
        </Dialog>
      )}
     
      </>);
    }
  

export default NayaRate

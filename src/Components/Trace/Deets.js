import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const Deets = ({deets, billNumber, handleClose, shipper, cosignee}) => {
    return (
        <Dialog
            open = {deets}
            onClose = {handleClose}
        >

       
        <div class="rate">
        <h1>{billNumber}</h1>
        <section class="accordion">
          <input
            type="checkbox"
            name="collapse"
            id="handle1"
            checked="checked"
          />
          <h2 class="handle">
            <label for="handle1"> Contact</label>
          </h2>
          <div class="content">
          <fieldset style = {{border : '0px'}}>
                <legend style = {{fontWeight: "bold", marginBottom: "5px"}}>Caller</legend>
                <div> CAM-FUL INDUSTRIES INC. </div>
                       <div> 1322 CARBON STREET </div>
                        <div>SYRACUSE NY </div>
                        <div>Phone: 315 323-3921</div> 
                        <div> Contact: WILL DAVIDSON</div><br />
          </fieldset>
          <fieldset style = {{border : '0px'}}>
                <legend style = {{fontWeight: "bold", marginBottom: "5px"}}>Shipper</legend>
                <div> CAM-FUL INDUSTRIES INC. </div>
                       <div> 1322 CARBON STREET </div>
                        <div>SYRACUSE NY </div>
                        <div>Phone: 315 323-3921</div> 
                        <div> Contact: WILL DAVIDSON</div><br />
          </fieldset>
          <fieldset style = {{border : '0px'}}>
                <legend style = {{fontWeight: "bold", marginBottom: "5px"}}>Cosignee</legend>
                <div> IBS AIRWAYS LIMITED </div>
                       <div> 8410 NW 17TH STREET </div>
                        <div>MIAMI FL </div>
                        <div>Phone: 305 677-5055</div> 
                        <div> Contact: DEREK WATSON</div><br />
          </fieldset>
          </div>
        </section>
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle2" />
          <h2 class="handle">
            <label for="handle2">Summary Info</label>
          </h2>
          <div class="content">
            <p>
              <strong>Overall Impression:</strong> A deep reddish-copper,
              moderately strong, malty, complex Trappist ale with rich malty
              flavors, dark or dried fruit esters, and light alcohol blended
              together in a malty presentation that still finishes fairly dry.
            </p>
            <p>
              <strong>History:</strong> Originated at monasteries in the Middle
              Ages, and was revived in the mid-1800s after the Napoleonic era.
            </p>
          </div>
        </section>
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle3" />
          <h2 class="handle">
            <label for="handle3">Carriers</label>
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
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle3" />
          <h2 class="handle">
            <label for="handle3">Status History</label>
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
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle3" />
          <h2 class="handle">
            <label for="handle3">Bill Details</label>
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
    )
}

export default Deets

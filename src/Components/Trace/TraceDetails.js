import { Paper } from '@material-ui/core'
import React from 'react'

const TraceDetails = () => {
    return (
        <div>
            <Paper elevation={7} style={{padding: "0.5em", margin: "1.5rem"}}>
            <fieldset style ={{margin: "2rem", padding:"2rem", maxWidth: "50px", border: "0px"}}>
                <legend>Contact Information</legend>
                First Name: <input type="text" name="firstname" id="firstname" size="25"
                maxlength="40" /><br />
                Last Name: <input type="text" name="lastname" id="lastname" size="25"
                maxlength="40"/><br />
                Phone: <input type="text" name="phone" id="phone" size="15" maxlength="0"  />
            </fieldset>
            </Paper>

            <fieldset>
                <legend>Favorite activities</legend>
                <input type="checkbox" value="reading" name="reading" id="reading" />Reading<br />
                <input type="checkbox" value="sports" name="sports" id="sports" checked="checked"
                />Sports<br />
                <input type="checkbox" value="games" name="games" id="games" />Computer Games
            </fieldset>

            <fieldset>
                <legend>Reset or Submit Your Answers</legend>
                <input type="reset" value="reset" />
                <input type="submit" value="submit" />
            </fieldset>
        </div>
    )
}

export default TraceDetails

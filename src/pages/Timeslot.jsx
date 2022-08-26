import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



const Timeslot = () => {
  return (
    <div style={{width: "49rem", border: "1px solid blue", margin:"2rem", padding: "1rem",  borderRadius: "2rem", boxShadow: "10px 10px 8px #D3D3D3", fontSize: "10"}}>
      <FormControl>
      <br />
      <div className="flex">
       {/* Parent*/}
       <h3>Name of Therapist</h3>
       <h3 className="indent-40">Time Slots</h3>
      </div>
      <hr/>
      <br />
        {/* Child 1 */}
        <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <h3>Therapist 1</h3>
          <div style={{paddingLeft: "8rem"}}>
            <FormControlLabel value="1230" control={<Radio />} label="12:30 PM" />
            <FormControlLabel value="0230" control={<Radio />} label="02:30PM" />
            <FormControlLabel value="0430" control={<Radio />} label="04:30PM" />
            <FormControlLabel value="0630" control={<Radio />} label="06:30PM" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </div>
        </RadioGroup>
        </div>
        <hr />
        <br />
        {/* Child 2 */}
        <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <h3>Therapist 1</h3>
          <div style={{paddingLeft: "8rem"}}>
            <FormControlLabel value="1230" control={<Radio />} label="12:30 PM" />
            <FormControlLabel value="0230" control={<Radio />} label="02:30PM" />
            <FormControlLabel value="0430" control={<Radio />} label="04:30PM" />
            <FormControlLabel value="0630" control={<Radio />} label="06:30PM" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </div>
        </RadioGroup>
        </div>
        <hr />
        <br />
        {/* Child 3 */}
        <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <h3>Therapist 1</h3>
          <div style={{paddingLeft: "8rem"}}>
            <FormControlLabel value="1230" control={<Radio />} label="12:30 PM" />
            <FormControlLabel value="0230" control={<Radio />} label="02:30PM" />
            <FormControlLabel value="0430" control={<Radio />} label="04:30PM" />
            <FormControlLabel value="0630" control={<Radio />} label="06:30PM" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </div>
        </RadioGroup>
        </div>
        <hr />
        <br />
        {/* Child 4 */}
        <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <h3>Therapist 1</h3>
          <div style={{paddingLeft: "8rem"}}>
            <FormControlLabel value="1230" control={<Radio />} label="12:30 PM" />
            <FormControlLabel value="0230" control={<Radio />} label="02:30PM" />
            <FormControlLabel value="0430" control={<Radio />} label="04:30PM" />
            <FormControlLabel value="0630" control={<Radio />} label="06:30PM" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </div>
        </RadioGroup>
        </div>
        <hr />
        <br />
        {/* Child 5 */}
        <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <h3>Therapist 1</h3>
          <div style={{paddingLeft: "8rem"}}>
            <FormControlLabel value="1230" control={<Radio />} label="12:30 PM" />
            <FormControlLabel value="0230" control={<Radio />} label="02:30PM" />
            <FormControlLabel value="0430" control={<Radio />} label="04:30PM" />
            <FormControlLabel value="0630" control={<Radio />} label="06:30PM" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </div>
        </RadioGroup>
        </div>

      </FormControl>
    </div>
  );
}


export default Timeslot;
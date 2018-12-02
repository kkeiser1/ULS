import * as React from "react";
import { Input } from "reactstrap";

export const SelectDay: React.SFC = () => {
	return (
<Input type="select" name="billingState" id="billingState">
<option>Sunday</option>
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
<option>Saturday</option>
</Input>
);
};
import * as React from "react";
import { Input } from "reactstrap";

export const SelectTime: React.SFC = () => {
	return (
<Input type="select" name="billingState">
<option>8am - 10am</option>
<option>10am - 12pm</option>
<option>12pm - 2pm</option>
<option>2pm - 4pm</option>
<option>4pm - 6pm</option>
<option>6pm - 8pm</option>
</Input>
);
};
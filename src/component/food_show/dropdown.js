import React from 'react';
import { Select, MenuItem } from "@material-ui/core";
import "./dropdown.css";
function DropdownComponent(params) {
    return (
        <Select value={params.dropvalue} onChange={params.handelChange}>
            <MenuItem  value={"Small"}>Small <p1 className="pricestyle">{'\u20B9'} {params.size.Small}</p1></MenuItem>
            <MenuItem value={"Medium"}>Medium<p1 className="pricestyle">{'\u20B9'} {params.size.Medium}</p1></MenuItem>
            <MenuItem value={"Large"}>Large<p1 className="pricestyle">{'\u20B9'} {params.size.Large}</p1></MenuItem>

        </Select>
    )

}
export default DropdownComponent;
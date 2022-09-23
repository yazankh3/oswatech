import { MenuItem, TextField } from "@mui/material";
import React, { useRef } from "react";
import { Button } from "semantic-ui-react";
import "./FilterSections.css";
import RentSvg from "../../asset/icons/RentSvg";
import CustomizedMenus from "./components/DropDownMenu";
import PriceSvg from "../../asset/icons/PriceSvg";
import BedsSvg from "../../asset/icons/BedsSvg";

const FilterSections = () => {
  return (
    <div className="rent-filter-wraper">
      <div className="rent-input-filter">
        <input type="text" placeholder="Baghdad, Iraq" />
      </div>

      {/* <Button variant="outlined" startIcon={<RentSvg />}>
        Delete
      </Button> */}
      <div className="filters-buttons-wraper">
        <CustomizedMenus icon={<RentSvg />} title="For Rent" />
        <CustomizedMenus icon={<PriceSvg />} title="Price" />
        <CustomizedMenus icon={<PriceSvg />} title="Beds" />
        <CustomizedMenus icon={<PriceSvg />} title="Move Date" />
        <CustomizedMenus title="More" />
      </div>
      <Button sx={{ backgroundColor: "#0D323D" }}>Search</Button>
    </div>
  );
};

export default FilterSections;

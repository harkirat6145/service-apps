import React from "react";
import { SearchButton, Division, Bar } from "../style/style";
import { Input } from "reactstrap";

const EmailBar = () => {
  return (
    <Division>
      <Bar>
        <Input
          placeholder="Email"
          className="fntwight w-100 m-auto rounded-1  py-2"
        />
        <SearchButton>Subscribe</SearchButton>
      </Bar>
    </Division>
  );
};

export default EmailBar;

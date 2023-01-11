import React from "react";
import { Form, Button } from "react-bootstrap";
import { Icons } from "../assets";

const CustomSearch = () => {
  return (
    <div className=" search-group d-flex align-items-center">
      <img
        src={Icons.searchIcon}
        alt="search"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
      <div style={styles.searchLine} />
      <Form.Control
        type="search"
        placeholder="Search or type"
        className="me-2 shadow-none"
        aria-label="Search"
      />
    </div>
  );
};

const styles = {
  searchGroup: {
    background: "#F5F4F6",
    padding: "12px",
    maxWidth: "300px",
    borderRadius: "8px",
  },
  searchLine: {
    width: "4px",
    height: "100%",
    background: "#EF9011",
    marginLeft: "16px",
  },
  searchInput: {
    border: "none",
    fontSize: "1.6rem",
    padding: "0px",
    paddingLeft: "15px",
    background: "#F5F4F6",
  },
};

export default CustomSearch;

import React from "react";
import { Form, Button } from "react-bootstrap";
import { Icons } from "../assets";

const CustomSearch = () => {
  return (
    <div className=" d-flex align-items-center" style={styles.searchGroup}>
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
        className="me-2"
        aria-label="Search"
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchGroup: {
    background: "#F5F4F6",
    padding: "12px",
    width: "300px",
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
    fontSize: "16px",
    padding: "0px",
    paddingLeft: "15px",
    background: "#F5F4F6",
  },
};

export default CustomSearch;

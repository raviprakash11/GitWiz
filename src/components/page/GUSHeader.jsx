import React from "react";
import { Button, Form } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  NAV_URL,
  APP_NAME,
  APP_PAGE_NAME,
  SEARCH_PLACEHOLDER_TEXT,
  SUB_TEXT,
  SUB_TEXT_BTN,
  TOAST_HELP_TEXT,
  FAQ_TEXT,
} from "../GUSUtility";
import "./../GUSStyle.css";

const GUSHeader = function ({ handleSubmitUser, handleSearchUser }) {
  const notify = () => toast(TOAST_HELP_TEXT);
  return (
    <div className="heading-area">
      <div>
        <a
          href={NAV_URL}
          target="_blank"
          rel="noreferrer"
          className="nav app-name"
        >
          {APP_NAME}
        </a>
        / <span>{APP_PAGE_NAME}</span>
        <a href={NAV_URL} target="_blank" rel="noreferrer" className="nav faq">
          {FAQ_TEXT}
        </a>
      </div>
      <div>
        <Form onSubmit={handleSubmitUser}>
          <Form.Group>
            <Form.Input onChange={handleSearchUser} className="formin">
              <input
                placeholder={SEARCH_PLACEHOLDER_TEXT}
                style={{
                  width: "20rem",
                  background: "#F2F1F9",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              />
            </Form.Input>
            <center>
              <Button color="purple" type="submit" className="btns find-btn">
                Find
              </Button>
              <Button color="purple" type="submit" className="btns reset-btn">
                Reset
              </Button>
            </center>
          </Form.Group>
        </Form>
      </div>
      <center className="subtext">
        <p>
          {SUB_TEXT}
          <a onClick={notify}>{SUB_TEXT_BTN}</a>
        </p>
        <ToastContainer
          position="top-center"
          autoClose={7013}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </center>
    </div>
  );
};
export default GUSHeader;

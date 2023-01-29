import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon, Text, Button, Toast } from "@innovaccer/design-system";
import { BoardPopover } from "./BoardDesign";
import "./css/PagesStyles.css";

export const Boards = () => {
  // for four template use four different usestate to show add button
  const [styleone, setStyleone] = useState({ display: "none" });
  const [styletwo, setStyletwo] = useState({ display: "none" });
  const [stylethree, setStylethree] = useState({ display: "none" });
  const [stylefour, setStylefour] = useState({ display: "none" });
  // workspace to store created board data
  const workspace = useSelector(
    (state: RootState) => state.workspace.workspace
  );

  const [show, setShow] = useState(false);

  var win_wd = window.innerWidth;
  let history = useNavigate();

  return (
    <div id="boards" className={win_wd < 990 ? "pt-7" : "pt-8"}>
      {/* Toasting for Notification Alart */}
      {win_wd >= 990 ? (
        // when window is large then it will provide
        // long data over top-right corner
        <div
          className="toastcontainer"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <Toast
            onClose={() => setShow(false)}
            appearance="success"
            message="check your template section to verify it's already added or not."
            title="Wow! You have added one template successfully"
          />
        </div>
      ) : (
        // when window is small then it will provide
        // short success message over top-right corner
        <div
          className="toastcontainer"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <Toast
            onClose={() => setShow(false)}
            appearance="success"
            title="Message sent successfully"
          />
        </div>
      )}

      {/* Main Section */}
      <div id="templates">
        <Icon
          size={win_wd < 990 ? "20" : "24"}
          type="rounded"
          name="insert_chart"
        />
        <Text className="heading" weight="strong">
          Most popular templates
        </Text>
        <br />
        {/* Card Crousal / 4 Cards with heading over image */}
        {/* Here, create hover button over the template with 
        toast notification & timeout for four separatetemplate */}
        <div className="row d-flex">
          <div
            className="col-md-6 sub-template"
            style={{ backgroundImage: "url('static/nature/n-t-1.jpg')" }}
            onMouseEnter={(e) => {
              setStyleone({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleone({ display: "none" });
            }}
          >
            <div className="sub-temp-section">
              <Text className="TempHD">Template</Text>
              <Button
                className="btn-style"
                style={styleone}
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 2000);
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div
            className="col-md-6 sub-template"
            style={{ backgroundImage: "url('static/business/b-t-1.jpg')" }}
            onMouseEnter={(e) => {
              setStyletwo({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyletwo({ display: "none" });
            }}
          >
            <div className="sub-temp-section">
              <Text className="TempHD">Template</Text>
              <Button
                className="btn-style"
                style={styletwo}
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div
            className="col-md-6 sub-template"
            style={{ backgroundImage: "url('static/nature/n-t-4.jpg')" }}
            onMouseEnter={(e) => {
              setStylethree({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStylethree({ display: "none" });
            }}
          >
            <div className="sub-temp-section">
              <Text className="TempHD">Template</Text>
              <Button
                className="btn-style"
                style={stylethree}
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div
            className="col-md-6 sub-template"
            style={{ backgroundImage: "url('static/business/b-t-2.jpg')" }}
            onMouseEnter={(e) => {
              setStylefour({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStylefour({ display: "none" });
            }}
          >
            <div className="sub-temp-section">
              <Text className="TempHD">Template</Text>
              <Button
                className="btn-style"
                style={stylefour}
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
        <br />
        {/* Used it to go to the template section. [Function is not added yet] */}
        <Text className="link-text" appearance="link">
          See Full gallery
        </Text>
      </div>
      {/* This division is for user's workspace where,
      it will show the all the present board of the user & 
      with it it will show a button to create another board */}
      <div id="workspace">
        <Icon size={20} type="rounded" name="person" />
        <Text weight="medium">Workspace Boards</Text>
        <br />
        <div id="workspace-view" className="row d-flex">
          {/* All the workspace present to the user will be visible over here */}
          {workspace.map((board, bindex) => (
            <div
              key={bindex}
              className="col-md-6 sub-workspace"
              style={{ backgroundImage: `url(${board.boardsrc})` }}
              onClick={() => {
                history(`/todo/${board.bid}`);
              }}
            >
              <div className="sub-temp-section">
                <Text className="TempHD">{board.boardname}</Text>
              </div>
            </div>
          ))}

          {/*  this division will help us to create anther workspace for user
          which is calling our custom BoardPopover from BoardDesign.js */}
          <div className="col-md-6 sub-workspace crt-new">
            <p className="data">
              <BoardPopover
                position="right"
                section={
                  <Text
                    style={{
                      color: "var(--inverse-light)",
                      fontSize: "15px"
                    }}
                  >
                    Create a board
                  </Text>
                }
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

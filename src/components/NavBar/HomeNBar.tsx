import { Button, Popover, Text } from "@innovaccer/design-system";
import { NotificationSection } from "./NotificationSection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Logout } from "./Logout";
import "./css/NewNav.css";

interface userDetails {
  name: string;
}

export const HomeNBar = (props: userDetails): any => {
  var win_wd = window.innerWidth;
  // toggle is used to Identify the screen width
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      {/* Logo Section with a Link of HomePage */}
      <div className="d-flex navbar-brand">
        <Link className="text-decoration-none" to="/">
          <Text
            className="text-uppercase logo-heading"
            size="large"
            style={{
              color: "var(--primary-light)",
              fontSize: "1.2rem",
              fontWeight: "900"
            }}
          >
            In-ToDO
          </Text>
        </Link>
      </div>
      {/* Logo Section End */}

      {/* Collapse toggle button which is available on small screen */}
      <Button
        className=""
        icon="menu"
        style={win_wd > 990 ? { display: "none" } : { display: "flex" }}
        onClick={() => setToggle(!toggle)}
      ></Button>
      {/* toggle button end*/}

      {/* This section will be toggled based on clicking the above button */}
      <div className={toggle ? "" : "collapse navbar-collapse"}>
        {/* Their Wrokspace & Template view of User */}
        <div className="d-flex ">
          <Popover
            open={false}
            trigger={
              <Button className="MidNav" size="large" appearance="transparent">
                WorkSpace
              </Button>
            }
          >
            <div
              style={{ width: "var(--spacing-9)" }}
              id="popover-section"
              className="mx-6 my-6"
            >
              <Text size="large">Your Workspaces</Text>
              <hr />
              <Text className="text-edit" size="small">
                My WorkSpace - 1
              </Text>
              <Text className="text-edit" size="small">
                My WorkSpace - 2
              </Text>
              <Text className="text-edit" size="small">
                My WorkSpace - 3
              </Text>
              <Text className="text-edit" size="small">
                My WorkSpace - 4
              </Text>
            </div>
          </Popover>
          <Popover
            open={false}
            trigger={
              <Button className="MidNav" size="large" appearance="transparent">
                Templates
              </Button>
            }
          >
            <div
              style={{ width: "var(--spacing-9)" }}
              id="popover-section"
              className="mx-6 my-6"
            >
              <Text size="large">Your Templates</Text>
              <hr />
              <Text className="text-edit" size="small">
                My Template - 1
              </Text>
              <Text className="text-edit" size="small">
                My Template - 2
              </Text>
              <Text className="text-edit" size="small">
                My Template - 3
              </Text>
              <Text className="text-edit" size="small">
                My Template - 4
              </Text>
            </div>
          </Popover>
        </div>
        {/* PopOver view section end */}

        <div className="d-flex ml-auto">
          {/* Notification Component section called to popover */}
          <NotificationSection
            position="bottom"
            action={
              <Button
                className="displaylgblock mr-5"
                aria-label="notifications"
                icon="notifications_active"
                size="large"
                appearance="transparent"
              />
            }
          />
          {/* Info Section */}
          <Button
            className=""
            icon="info"
            size="large"
            appearance="transparent"
          />
          {/* Logout Section */}
          <Logout className="displaylgblock" name={props.name} />
        </div>
      </div>
      {/* collapse section end */}
    </nav>
  );
};

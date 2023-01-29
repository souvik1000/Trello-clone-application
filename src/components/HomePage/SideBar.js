import React, { useEffect, useState } from "react";
import {
  Row,
  Collapsible,
  EmptyState,
  VerticalNav,
  Column,
  PageHeader,
  Divider,
  Icon,
  Button,
  Text
} from "@innovaccer/design-system";
import { Boards } from "../SubPages/Boards";
import { Templates } from "../SubPages/Templates";
import { BoardPopover } from "../SubPages/BoardDesign";

import "./HomeStyle.css";

export const SideBar = (props) => {
  // Storing menubar json data into menubar state
  const [menubar, setMenubar] = useState([]);
  var win_wd = window.innerWidth;

  // fetching jsondata for the first time of page loading.
  useEffect(() => {
    fetch("jsondata/menubar.json")
      .then((res) => res.json())
      .then((data) => setMenubar(data));
  }, []);

  // It is helping to expand our collapse sidebar & also
  // for open using it's useState function
  const [expanded, setExpanded] = React.useState(false);

  // It's activating the particular section where user is jumping
  // And assume that, base page will be the home page
  const [active, setActive] = React.useState({
    name: "home",
    label: "Home"
  });

  // We are setting our activation by this method
  const onClickHandler = (menu) => {
    setActive(menu);
  };

  return (
    <Row className="vh-90 bg-secondary-lightest flex-nowrap">
      {/* This is the sidebar section which has the colapsable features in it */}
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menubar}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
      {/* Here, added condition for chacking which section is 
      activated based on that we are rendering our page dynamically */}
      {active.name !== "home" ? (
        <Row className="justify-content-center">
          <Column sizeXL={8} className="d-flex flex-column pb-6">
            <PageHeader title={active.label} separator={false} />
            <Row className="px-6">
              <Column
                className={
                  win_wd >= 990
                    ? "h-1000 bg-light overflow-auto overflow"
                    : "h-95 bg-light overflow-auto overflow"
                }
              >
                {active.link === "/boards" ? (
                  <Boards />
                ) : active.link === "/templates" ? (
                  <Templates />
                ) : null}
              </Column>
            </Row>
          </Column>
        </Row>
      ) : (
        <>
          {/* For home page Selection it's here */}
          <Column className="d-flex flex-column pb-6">
            <PageHeader title={active.label} separator={false} />
            <Row className="px-6 h-100">
              <Column className="h-100 bg-light">
                {/* Calling EmptyState over here to tell user for going to there workspace */}
                <EmptyState
                  description="Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here."
                  imageSrc="https://innovaccer.github.io/design-system/static/media/noContent.a88aa5b8.png"
                  size={win_wd < 990 ? "small" : "large"}
                  title="Stay on track and up to date"
                >
                  {/* Inside it, Added Button in below to re-direct to their workspace */}
                  <Button
                    appearance="primary"
                    size="large"
                    onClick={() =>
                      setActive({
                        name: "boards",
                        label: "Boards",
                        icon: "label_outline",
                        link: "/boards"
                      })
                    }
                  >
                    Go to WorkSpace
                  </Button>
                </EmptyState>
              </Column>
            </Row>
          </Column>
          {/* Homepage action section will not come at mid */}
          {win_wd >= 990 ? (
            <Column size={3} className="d-flex flex-column">
              <PageHeader title="Action" separator={true} />
              <Row className="px-6 h-100 pb-6">
                <Column className="h-100">
                  <Row className="flex-column">
                    <ul className="linktab">
                      <li>
                        {/* This section is for link tab */}
                        <div className="action-heading">
                          <Icon
                            size={20}
                            className="action-icon"
                            type="rounded"
                            name="share"
                          />
                          <span>Links</span>
                        </div>
                        <Divider appearance="header" />
                        <ul className="linktab">
                          <li className="d-flex">
                            <BoardPopover
                              position="left"
                              section={
                                <>
                                  <Button icon="add" />
                                  <Text
                                    className="mt-1 ml-3"
                                    style={{
                                      color: "var(--inverse-light)",
                                      fontSize: "15px"
                                    }}
                                  >
                                    Create a board
                                  </Text>
                                </>
                              }
                            />
                          </li>
                          <li className="d-flex my-2">
                            <Button
                              icon="add_box"
                              onClick={() =>
                                setActive({
                                  name: "templates",
                                  label: "Templates",
                                  icon: "insert_chart",
                                  link: "/templates"
                                })
                              }
                            />
                            <Text
                              className="mt-1 ml-3"
                              style={{
                                color: "var(--inverse-light)",
                                fontSize: "15px"
                              }}
                            >
                              Create a template
                            </Text>
                          </li>
                        </ul>
                      </li>
                      {/* This section is for Showing Recent. But,
                      not presently active right now due to DB */}
                      {props.recent > 1 ? (
                        <li>
                          <div className="action-heading">
                            <Icon
                              size={20}
                              className="action-icon"
                              type="rounded"
                              name="share"
                            />
                            <span>Links</span>
                          </div>
                          <Divider appearance="header" />
                          <ul className="linktab">
                            <li className="d-flex">
                              <Button icon="add" />
                              <Text
                                className="mt-1 ml-3"
                                style={{ color: "var(--inverse-light)" }}
                              >
                                Add A Board
                              </Text>
                            </li>
                            <li className="d-flex my-2">
                              <Button icon="add_box" />
                              <Text
                                className="mt-1 ml-3"
                                style={{ color: "var(--inverse-light)" }}
                              >
                                Add A Template
                              </Text>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </Row>
                  <Row></Row>
                </Column>
              </Row>
            </Column>
          ) : (
            <></>
          )}
        </>
      )}
    </Row>
  );
};

import React, { useState } from "react";
import { Icon, Button, Text, Card, CardBody } from "@innovaccer/design-system";

export const Templates = () => {
  var win_wd = window.innerWidth;
  // Here we are setting type as when click on More for Nature
  // the rest of the nature image wil be displayed
  const [nature, setNature] = useState(false);
  const [business, setBusiness] = useState(false);

  return (
    <div id="templates" className={win_wd < 990 ? "pt-4" : "pt-5"}>
      {/* This is the Nature Template Section */}
      <div id="nature-template">
        <div className="d-flex mpd">
          {/* Business Section - Icon & Heading */}
          <Icon
            size={win_wd < 990 ? "20" : "30"}
            type="rounded"
            name="article"
          />
          <Text className="temp-heading" weight="medium">
            Nature Category
          </Text>
          {/* In this section we are changing our button functionality
          over runtime for Less it will provide more & vice-varsa */}
          {nature ? (
            <Button
              className="ml-auto"
              onClick={() => {
                setNature(false);
              }}
            >
              Less
            </Button>
          ) : (
            <Button
              className="ml-auto"
              onClick={() => {
                setNature(true);
              }}
            >
              More
            </Button>
          )}
        </div>
        <div className="crdgrp">
          {/* Here we used static card which are consist of
          card image with that card name with it below */}
          <div className="crdsubgrp d-flex justify-content-between">
            {/* This is the nature initial card */}
            <Card className="cards">
              <img
                className="c-img"
                src="static/nature/n-t-1.jpg"
                alt="n-t-1"
              />
              <CardBody>
                <p className="card-name">Nature Template 1</p>
              </CardBody>
            </Card>
            <Card className="cards">
              <img
                className="c-img"
                src="static/nature/n-t-2.jpg"
                alt="n-t-2"
              />
              <p className="card-name">Nature Template 2</p>
            </Card>
            <Card className="cards">
              <img
                className="c-img"
                src="static/nature/n-t-3.jpg"
                alt="n-t-3"
              />
              <p className="card-name">Nature Template 3</p>
            </Card>
            {/* When Click to More button, below section will be hitted */}
            {nature ? (
              <>
                {/* This is the nature dynamic card */}
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/nature/n-t-4.jpg"
                    alt="n-t-4"
                  />
                  <p className="card-name">Nature Template 4</p>
                </Card>
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/nature/n-t-5.jpg"
                    alt="n-t-5"
                  />
                  <p className="card-name">Nature Template 5</p>
                </Card>
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/nature/n-t-6.jpg"
                    alt="n-t-6"
                  />
                  <p className="card-name">Nature Template 6</p>
                </Card>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <br />
      {/* Business Template */}
      <div id="nature-template">
        <div className="d-flex mpd">
          {/* Business Section - Icon & Heading */}
          <Icon
            size={win_wd < 990 ? "20" : "30"}
            type="rounded"
            name="article"
          />
          <Text className="temp-heading" weight="medium">
            Business Category
          </Text>
          {/* In this section we are changing our button functionality
          over runtime for Less it will provide more & vice-varsa */}
          {business ? (
            <Button
              className="ml-auto"
              onClick={() => {
                setBusiness(false);
              }}
            >
              Less
            </Button>
          ) : (
            <Button
              className="ml-auto"
              onClick={() => {
                setBusiness(true);
              }}
            >
              More
            </Button>
          )}
        </div>
        <div className="crdgrp">
          <div className="crdsubgrp d-flex justify-content-around">
            {/* This is the business initial card */}
            <Card className="cards">
              <img
                className="c-img"
                src="static/business/b-t-1.jpg"
                alt="b-t-1"
              />
              <p className="card-name">Business Template 1</p>
            </Card>
            <Card className="cards">
              <img
                className="c-img"
                src="static/business/b-t-2.jpg"
                alt="b-t-2"
              />
              <p className="card-name">Business Template 2</p>
            </Card>
            <Card className="cards">
              <img
                className="c-img"
                src="static/business/b-t-3.jpg"
                alt="b-t-3"
              />
              <p className="card-name">Business Template 3</p>
            </Card>
            {/* When Click to More button, below section will be hitted
            & for Less button, it will be disabled */}
            {business ? (
              <>
                {/* This is the business dynamic card */}
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/business/b-t-4.jpg"
                    alt="b-t-4"
                  />
                  <p className="card-name">Business Template 4</p>
                </Card>
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/business/b-t-5.jpg"
                    alt="b-t-5"
                  />
                  <p className="card-name">Business Template 5</p>
                </Card>
                <Card className="cards">
                  <img
                    className="c-img"
                    src="static/business/b-t-6.jpg"
                    alt="b-t-6"
                  />
                  <p className="card-name">Business Template 6</p>
                </Card>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

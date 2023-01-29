import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  Text,
  Button,
  Divider,
  Row,
  Column,
  Label,
  Input,
  Icon
} from "@innovaccer/design-system";
import { addworkspace } from "./features/workspaceSlice";
import { increment } from "./features/boardcounterSlice";
import "./css/PagesStyles.css";
import { RootState } from "../../store";

export const BoardPopover = (props) => {
  // Taking templates array where different types of templates are there
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("jsondata/templates.json")
      .then((res) => res.json())
      .then((data) => setTemplates(data));
  }, []);

  // Here we take few useState whare,

  // bgtype to store which background type user selected
  const [bgtype, setBgtype] = useState("nature");

  // bgactive to store which background is now active in page
  const [bgactive, setBgactive] = useState([]);

  // value helping to take data from user & store
  const [value, setValue] = useState<string>(null);

  // Controling open section of popover
  const [popview, setPopview] = useState(false);

  // take board count as a ID of workspace
  const bcount = useSelector((state: RootState) => state.bcount.counter);

  // Dispatch Function
  const dispatch = useDispatch();

  return (
    <Popover open={popview} position={props.position} trigger={props.section}>
      <div className="board-popover">
        <div className="maindiv-bd-popover">
          <p className="heading-popover">Create A Board</p>
          <Divider />

          {/* This is the section for user to get a preview Idea
          of their selected board from the below section items */}
          <div
            className="bg-img image-preview"
            style={{ backgroundImage: `url(${bgactive.src})` }}
          >
            {/* demo Image of Todo Page */}
            <img
              className="m-auto img-edit"
              src="https://a.trellocdn.com/prgb/dist/images/board-preview-skeleton.14cda5dc635d1f13bc48.svg"
              alt="todo-template"
            />
          </div>
          <div id="bg-select">
            {/* From this section user will select their choicable
            background which will be displayed into above division */}
            <Text className="bg-select-hd">Select Background Type</Text>
            <br />

            {/* Below has two button for two specific type of background */}
            <div className="mt-2 d-flex justify-content-around">
              {/* Both button style will be change based on the their activation 
              TO do so, we have used activate class over here*/}
              <Button
                className={bgtype === "nature" ? "activate" : null}
                onClick={() => setBgtype("nature")}
              >
                <Icon className="mr-4" name="add" size={16} />
                Nature
              </Button>
              <Button
                className={bgtype === "business" ? "activate" : null}
                onClick={() => setBgtype("business")}
              >
                <Icon className="mr-4" name="add" size={16} />
                Business
              </Button>
            </div>
            <Row className="outside d-flex">
              {/* Loop through templates to fatch particular name and checking with active backgound type. */}
              {templates.map((types, tindex) => {
                // Based on button click,
                // it will render that particular template only
                return types.name === bgtype
                  ? // If user click on nature button, then this section will be triggered
                    types.submenu.map((element, eindex) => {
                      return (
                        <Column
                          key={eindex}
                          size="4"
                          className="bg-img sub-image-preview"
                          style={{ backgroundImage: `url(${element.src})` }}
                          onClick={() => setBgactive(element)}
                        />
                      );
                    })
                  : // If user click on business button, then this section will be triggered
                    null;
              })}
            </Row>
            {/* Here, We are taking Boaed name provide by the user
            & store it into the value based on changes done by them */}
            <Label className="bg-select-hd" withInput={true} htmlFor="email">
              Board Title<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              name="input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="w-25 m-auto"
              placeholder="Choose workspace name"
              onClick={() => setPopview(!popview)}
            />
            {/* Submitting data over button click as creating an 
            another workspace for that particular user. */}
            <Button
              className="btn-complete mg-td"
              onClick={() => {
                dispatch(increment());
                dispatch(
                  addworkspace({
                    id: bcount,
                    boardname: value,
                    boardsrc: bgactive.src
                  })
                );
                setPopview(!popview);
                setBgactive(templates[0].submenu[0]);
                setValue(null);
              }}
            >
              Create Board
            </Button>
          </div>
        </div>
      </div>
    </Popover>
  );
};

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  Button,
  PageHeader,
  Row,
  Column
} from "@innovaccer/design-system";
import { TodoCard } from "./TodoCard";
import "./css/tododesign.css";
import { RootState } from "../../store";
import { increment } from "./features/todocounterSlice";
import { addtotodolist, removetododata } from "./features/todoSlice";
import { addtoprogreslist, removeprogresdata } from "./features/progresSlice";
import { addtodonelist } from "./features/doneSlice";

interface IProps {
  obj_details: {
    id: number;
    boardname: string;
    boardsrc: string;
  };
}

export const TodoDesign: React.FC<IProps> = ({ obj_details }) => {
  const [data, setData] = useState<string>();
  // Use Redux over here where -
  // counter is for geting count of todos list
  const counter = useSelector((state: RootState) => state.count.counter);

  // todo is for geting todos list created by user
  const todo = useSelector((state: RootState) => state.todo.todos);

  // progres is for geting progres list created by user
  const progres = useSelector((state: RootState) => state.progres.progres);

  // done is for geting done list created by user
  const done = useSelector((state: RootState) => state.done.done);

  // Our Dispatch Function to edit & update
  const dispatch = useDispatch();

  const onChange = React.useCallback((e) => {
    setData(e.target.value);
  }, []);

  return (
    <Row
      style={{ backgroundImage: `url(../${obj_details["boardsrc"]})` }}
      className="vh-90 flex-nowrap todorow"
    >
      <Row className="justify-content-center">
        <Column
          sizeL={11}
          sizeXL={11}
          size={12}
          className="d-flex flex-column pb-6"
        >
          <PageHeader
            title={obj_details["boardname"]}
            separator={false}
            navigationPosition="center"
          />
          <Row>
            <Column sizeL={4} sizeXL={4} size={12} className="coleff">
              {/* Todo Section */}
              <div className="todo">
                {/* Section Headng */}
                <p className="todotext">ToDo</p>
                <div className="tododiv">
                  {/* Taking task initially by Input Box & Add Task Button */}
                  <div className="crdmrgn">
                    <Input
                      id="addtodo"
                      value={data}
                      onChange={onChange}
                      placeholder="Add Task"
                    />
                    <Button
                      aria-label="submit"
                      icon="done"
                      tooltip="Submit"
                      onClick={() => {
                        dispatch(increment());
                        dispatch(
                          addtotodolist({
                            data: data,
                            counter: counter
                          })
                        );
                        setData("");
                      }}
                    >
                      Add task
                    </Button>
                  </div>
                  {/* Input Section end - Present in todos */}

                  {todo.map((task, index) => {
                    return (
                      // Here we are rendering the task by loop through
                      // the todo array and user our custom TodoCard to
                      // show it to the user as a card basis
                      <TodoCard
                        data={task}
                        index={index}
                        comment="Added"
                        cmtcolor="primary"
                        // this TodoCard has two button
                        // where one is for making it in progress
                        //  & another is for done
                        action={[
                          <Button
                            appearance="primary"
                            icon="sync"
                            onClick={() => {
                              dispatch(
                                addtoprogreslist({
                                  data: task.data,
                                  counter: task.counter
                                })
                              );
                              dispatch(removetododata(task.counter));
                            }}
                          >
                            In Progrss
                          </Button>,
                          <Button
                            style={{ backgroundColor: "var(--success)" }}
                            icon="done"
                            onClick={() => {
                              dispatch(
                                addtodonelist({
                                  data: task.data,
                                  counter: task.counter
                                })
                              );
                              dispatch(removetododata(task.counter));
                            }}
                          >
                            Done
                          </Button>
                        ]}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Todo Section End */}
            </Column>
            <Column sizeL={4} sizeXL={4} size={12} className="coleff">
              {/* In Progres Section */}
              <div className="todo">
                {/* Section Headng */}
                <p className="todotext">In Progres</p>
                <div className="tododiv">
                  {progres.map((task, index) => {
                    return (
                      // Here we are rendering the task by loop through
                      // the progres array and user our custom TodoCard to
                      // show it to the user as a card basis
                      <TodoCard
                        data={task}
                        index={index}
                        comment="In Progress"
                        cmtcolor="accent3"
                        // this TodoCard has one button for done
                        action={[
                          <Button
                            style={{ backgroundColor: "var(--success)" }}
                            icon="done"
                            onClick={() => {
                              dispatch(
                                addtodonelist({
                                  data: task.data,
                                  counter: task.counter
                                })
                              );
                              dispatch(removeprogresdata(task.counter));
                            }}
                          >
                            Done
                          </Button>
                        ]}
                      />
                    );
                  })}
                </div>
              </div>
              {/* In-Progres Section End */}
            </Column>
            <Column sizeL={4} sizeXL={4} size={12} className="coleff">
              {/* Done Section */}
              <div className="todo">
                {/* Section Headng */}
                <p className="todotext">Done</p>
                <div className="tododiv">
                  {done.map((task: object, index: number) => {
                    return (
                      // Here we are rendering the task by loop through
                      // the done array and user our custom TodoCard to
                      // show it to the user as a card basis
                      <TodoCard
                        data={task}
                        index={index}
                        comment="Done"
                        cmtcolor="success"
                        // Here, we are not passing any button for done
                        action={[]}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Done Section End */}
            </Column>
          </Row>
        </Column>
      </Row>
    </Row>
  );
};

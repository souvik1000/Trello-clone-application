import {
  Row,
  Column,
  Text,
  Badge,
  Legend,
  Card,
  CardBody,
  CardHeader
} from "@innovaccer/design-system";
import "./css/tododesign.css";

// Showing Task by calling custom TodoCard component
// TodoCard takes index as key, data, comment for Badge, cmtcolor & action for button representation
export const TodoCard = (props) => {
  return (
    <Card
      key={props.index}
      className="mb-6 text-center crdmrgn bg-secondary-lighter"
      shadow="none"
    >
      {/* It's a Header section of our card, where we are assigning task 
      counter with it's state & particular color code provide by user */}
      <CardHeader className="d-flex justify-content-between">
        <Legend iconAppearance={props.cmtcolor}>
          Task-{props.data.counter}
        </Legend>
        <Badge appearance={props.cmtcolor}>{props.comment}</Badge>
      </CardHeader>
      <CardBody>
        {/* Explaining about the task which is created by user */}
        <Text appearance="disabled">Your Task</Text>
        <br />
        <Text small={true}>{props.data.data}</Text>
        <br />
        {/* Action Button's Working Section - This rection is provided by User */}
        <Row className="my-4 d-flex justify-content-around">
          {props.action.map((actionbtn, index) => (
            <div key={index}>{actionbtn}</div>
          ))}
        </Row>
        {/* Showing the date-time of Todo creation */}
        <Row
          className="my-6 py-2"
          style={{
            borderTop: "var(--border)"
          }}
        >
          {/* Date Section with props.date */}
          <Column>
            <Text appearance="disabled" small={true}>
              Date
            </Text>
            <Text className="ml-3" small={true}>
              {props.data.date}
            </Text>
          </Column>
          {/* Time Section with props.time */}
          <Column>
            <Text appearance="disabled" small={true}>
              Time
            </Text>
            <Text className="ml-3" small={true}>
              {props.data.time}
            </Text>
          </Column>
        </Row>
      </CardBody>
    </Card>
  );
};

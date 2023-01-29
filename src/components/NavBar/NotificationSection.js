import {
  Row,
  Column,
  Popover,
  Text,
  Button,
  EmptyState
} from "@innovaccer/design-system";
import "./css/Notification.css";

export const NotificationSection = (props) => {
  const win_wd = window.innerWidth;
  return (
    // It's used for notification popup present in NAVBAR of user
    <Popover
      open={false}
      position={win_wd <= 990 ? "left" : props.position}
      trigger={props.action}
    >
      <div
        className="mx-6 my-6"
        style={
          win_wd <= 990
            ? { width: "90%", height: "450px" }
            : { width: "400px", height: "500px" }
        }
      >
        <Row className="d-flex">
          {/* Heading & Close Button */}
          <Column className="d-flex">
            <Row>
              <Text className="notification-header">Notification</Text>
            </Row>
            <Row className="justify-content-end">
              <Button
                appearance="transparent"
                icon="close"
                onClick={() => {
                  void 0;
                }}
              />
            </Row>
          </Column>
        </Row>
        <Row>
          <Column>
            {/* Added EmptyState to if no notification present over there */}
            <EmptyState
              description=""
              imageSrc="https://a.trellocdn.com/prgb/dist/images/taco-sleep.ee2660df9335718b1a80.svg"
              size="small"
              title="No unread notifications"
            >
              <Text className="notification-text">
                Click View all to view all of your notifications
              </Text>
            </EmptyState>
          </Column>
        </Row>
        {/* Below button for allowing user to get desktop notification */}
        <Row className="allow-notification mb-6 ml-6">
          <Text>Allow Desktop Notification</Text>
        </Row>
      </div>
    </Popover>
  );
};

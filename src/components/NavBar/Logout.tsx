import { Popover, Avatar, Text, Button } from "@innovaccer/design-system";

// used Interface to define props types
interface userDetails {
  name: string;
  className: string;
}

export const Logout = (props: userDetails) => {
  // Taking username from props
  const [firstName, lastName] = props.name.split(" ");

  return (
    // We used Popover to show the user details with user signout
    <Popover
      open={false}
      position="bottom-start"
      trigger={
        <div className="d-flex mt-2">
          {/* This trigger will help to popover & visible initially to the user */}
          <Avatar
            className="ml-7 mt-1"
            firstName={firstName}
            lastName={lastName}
          />
          <Text className="ml-4 mt-3" size="large">
            Hi {firstName}
          </Text>
          <Button
            className="mt-1"
            appearance="transparent"
            icon="arrow_drop_down"
          />
        </div>
      }
    >
      <div
        className=" mx-6 my-6"
        style={{
          width: "var(--spacing-9)"
        }}
      >
        {/* This will provide the user name & its email following @todo.inno.com */}
        <div className="d-flex">
          <Avatar firstName={firstName} lastName={lastName} />
          <div className="Option-label">
            <Text className="ml-4">{props.name}</Text>
            <Text appearance="subtle" className="ml-4">
              {firstName.toLowerCase() + lastName.toLowerCase()}@todo.inno.com
            </Text>
          </div>
        </div>
        {/* It will show the Account Overview & Signout button */}
        <div className="Dropdown-wrapper">
          <div className="Option OptionWrapper">Account Overview</div>
          <div className="Option OptionWrapper">Sign Out</div>
        </div>
      </div>
    </Popover>
  );
};

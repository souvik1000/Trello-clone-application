import { HomeNBar } from "../NavBar/HomeNBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TodoDesign } from "../SubPages/TodoDesign";
import Footer from "../Footer/Footer";

export const Todo = () => {
  // taking BID from url objid using useParams
  const { objid } = useParams();

  // taking workspace list from station store
  const workspace = useSelector(
    (state: RootState) => state.workspace.workspace
  );

  // Parsing ID & matching with workspace.bid to pass proper data
  const obj_details = workspace.filter(
    (item) => item.bid === parseInt(objid, 10)
  );

  return (
    // This is the separate section from App.js
    // that's why rather SideBar.js we used TodoDesign
    // to design our application
    <div>
      <HomeNBar name="Souvik Ghosh" />
      <TodoDesign obj_details={obj_details[0]} />
      <Footer />
    </div>
  );
};

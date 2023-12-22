import HomePanel from "./HomePanel";
import ViewNotes from './ViewNotes';

const RightPanel = ({activePanel}) => {

  return (
    <div >
      {activePanel === "initial" && <HomePanel/>}
      {activePanel === "new" && <ViewNotes/>}
    </div>
  );
};

export default RightPanel;
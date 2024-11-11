import IconButton from "@mui/material/IconButton";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { AppContext } from "../App";
import { useContext } from "react";

function Header() {
  const { setShowForm } = useContext(AppContext);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <header>
      <h1>Mini Messaging App</h1>
      <IconButton aria-label="addmessage" onClick={handleClick}>
        <ForwardToInboxIcon />
      </IconButton>
    </header>
  );
}
export default Header;

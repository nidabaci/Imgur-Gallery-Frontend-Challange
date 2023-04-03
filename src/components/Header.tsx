import "../styles/header.scss"
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const Header = () => {
  return (
    <div className="header_content">
      <h1 id="logo_text">imstone</h1>
      <div>
        <InputText className="search_bar" placeholder=" Search for photos "  />
        <Button className="search_button" icon="pi pi-search" />
      </div>
    </div>
  );
};


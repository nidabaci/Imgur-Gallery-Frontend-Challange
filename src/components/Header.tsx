import "../styles/header.scss"
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const Header = () => {
  return (
    <div className="header_content">
      <h1 id="logo_text">imstone</h1>
      <div>
        <h2 className="uppercase text-center">Discover the Funniest Images on the Internet </h2>
        <p className="text-center">Explore a vast collection of hilarious images, memes, and GIFs that will make you laugh out loud.</p>
      </div>
    </div>
  );
};


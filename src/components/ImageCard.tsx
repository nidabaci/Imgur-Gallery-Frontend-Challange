import React from 'react'
import photo1 from "../assets/images/photo1.png"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imageCard from "../assets/styles/imageCard.scss"

export const ImageCard = ({ photo, description, upvotes, likes, views }) => {
    const header = <img alt="Card" src={photo} />;
    return (
      <div className="p-col-4 p-md-4">
        <div className="card flex justify-content-center">
          <Card header={header} className="md:w-25rem">
            <p className="m-0 text-left">{description}</p>
            <div className="card_buttons">
              <Button label={upvotes} icon="pi pi-arrow-up" text />
              <Button label={likes} icon="pi pi-heart-fill" text />
              <Button label={views} icon="pi pi-eye" text />
            </div>
          </Card>
        </div>
      </div>
    );
  };
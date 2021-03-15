import React from "react";
import "./UsersItems.css";
import Avatar from "../../shared/components//UIElemenet/Avatar";
import Card from "../../shared/components/UIElemenet/Card";
import { Link } from "react-router-dom";

const UsersItems = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={"/${props.id}/places"}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItems;

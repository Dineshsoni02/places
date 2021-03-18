import React from 'react';

import UsersItems from './UsersItems';
import './UsersList.css';
import '../../shared/components/UIElemenet/Card'
import Card from '../../shared/components/UIElemenet/Card';
const UsersList = props => {
    if(props.items.length===0){
        return (
            <div className="center">
                <Card>
                <h2>No Users found</h2>
                </Card>
            </div>
        );
    }
    return (
        <ul className="user-list center ">
            {
                props.items.map(user=>(
                    <UsersItems key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}   />
                ))
            }
        </ul>
    )
}


export default UsersList;

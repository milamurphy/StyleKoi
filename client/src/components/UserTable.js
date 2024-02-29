import React, {Component} from "react"
import UserTableRow from "./UserTableRow"


export default class UserTable extends Component 
{
    render() 
    {
        return (
            <div className="user-page">
                <table className="user-table">
                    <tbody>
                        {this.props.users.map((user) => <UserTableRow key={user._id} user={user}/>)}
                    </tbody>
                </table>      
            </div>
        )
    }
}
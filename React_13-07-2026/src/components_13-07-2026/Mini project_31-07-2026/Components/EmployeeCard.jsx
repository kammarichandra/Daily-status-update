import React from "react";


class EmployeeCard extends React.PureComponent {


    render() {

        let { name, email } = this.props;


        return (

            <div>

                <h3>{name}</h3>

                <p>{email}</p>

            </div>

        )

    }


}


export default EmployeeCard;
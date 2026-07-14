import Student from "../../components_13-07-2026/Redux_14-07-2026/Student";
import { Provider } from "react-redux";
import { store1 } from './../../components_13-07-2026/Redux_14-07-2026/Store1';

function Reduxpage() {


    return (

        <div>


        <Provider store={store1}>
            <div>
                <h1>Student Management</h1>
                <User />
            </div>
        </Provider>


        </div>

    );

}


export default Reduxpage;
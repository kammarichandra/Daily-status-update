import { Provider } from "react-redux";
import { store } from "../../components_13-07-2026/Profile Managment_14-07-2026/Store";
import User from "../../components_13-07-2026/Profile Managment_14-07-2026/User";

function Profilepage() {
    return (
        <Provider store={store}>
            <div>
                <h1>Profile Management</h1>
                <User />
            </div>
        </Provider>
    );
}

export default Profilepage;
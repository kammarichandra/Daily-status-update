import React from "react";
import FetchApi from "../../components_13-07-2026/Api Calls 2_27-07-2026/FetchApi";
import AxiosApi from "../../components_13-07-2026/Api Calls 2_27-07-2026/AxiosApi";
import Get from "../../components_13-07-2026/Api Calls 2_27-07-2026/Get";
function ApiCalls2Page() {
  return (
    <div>
      <h1>using Fetch</h1>
      <FetchApi />
      <hr />
      <h1>using Axios</h1>
      <AxiosApi/>
      <Get/>
    </div>
  );
}

export default ApiCalls2Page;
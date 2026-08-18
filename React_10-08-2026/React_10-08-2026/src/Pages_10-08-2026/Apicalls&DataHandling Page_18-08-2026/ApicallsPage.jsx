import React from 'react'
import Apicalls from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/Apicalls'
import Fetch from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/Fetch'
import Axios from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/Axios'
import QueryParams from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/QueryParams'
import ErrorHandling from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/ErrorHandling'
import Apiresponse from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/Apiresponse'
import LoadingState from '../../Components_10-08-2026/ApiCalls&DataHandling_18-08-2026/Components/LoadingState'
function ApicallsPage() {
  return (
    <div>
        <h1>Apicalls</h1>
        <Apicalls/>
        <hr />
        <h1>Fetch </h1>
        <Fetch/>
        <hr />
        <h1>Using Axios </h1>
        <Axios/>
        <hr />
        <h1>Query params using axios</h1>
        <QueryParams/>
        <hr />
        <h1>Error handling</h1>
        <ErrorHandling/>
        <hr />
        <h1>Api Response</h1>
        <Apiresponse/>
        <hr />
        <h1>Loading state </h1>
        <LoadingState/>
        <hr />
    </div>
  )
}

export default ApicallsPage
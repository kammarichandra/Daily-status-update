import React from 'react'
import ChangeEvent from '../../components_13-07-2026/Event Binding_30-07-2026/ChangeEvent'
import ClickEvent from '../../components_13-07-2026/Event Binding_30-07-2026/ClickEvent'
import DeleteUsers from '../../components_13-07-2026/Event Binding_30-07-2026/DeleteUsers'
import InlineEvent from '../../components_13-07-2026/Event Binding_30-07-2026/InlineEvent'
import ObjectEvent from '../../components_13-07-2026/Event Binding_30-07-2026/ObjectEvent'
import SubmitEvent from '../../components_13-07-2026/Event Binding_30-07-2026/SubmitEvent'


function EventBindingPage() {
  return (
    <div>
        <h1>Change Event </h1>
        <ChangeEvent/>
        <hr />
        <h1>Click Event</h1>
        <ClickEvent/>
        <hr />
        <h1>Delete event</h1>
        <DeleteUsers/>
        <hr />
        <h1>Inline event</h1>
        <InlineEvent/>
        <hr />
        <h1>Object event</h1>
        <ObjectEvent/>
        <hr />
        <h1>submit event</h1>
        <SubmitEvent/>
        
    </div>
  )
}

export default EventBindingPage
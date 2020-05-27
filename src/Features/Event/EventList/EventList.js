import React, {Component,Fragment} from 'react';

import EventListItem from './EventListItem';

class EventList extends Component{
    render(){
        const eventsListItem= this.props.events.map(event=>(
            <EventListItem key={event.id}  events={event}/>
        )  
        )
        return(
            <Fragment>
                {eventsListItem}
            </Fragment>
        )
    }
}

export default EventList;
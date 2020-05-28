import React,{Component} from 'react';
import {Segment,Form,Button} from 'semantic-ui-react';

class EventForm extends Component{
    state={
        title:'',
        date:'',
        city:'',
        venue:'',
        hostedby:''
    }

    handleInputChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleFormSubmit=(event)=>{
        event.preventDefault();
        this.props.createEvent(this.state);
    }

    render(){
        const {title,date,city,venue,hostedby}= this.state;
        return(
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <input onChange={this.handleInputChange} name='title' value={title} placeholder='Event Title'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input  onChange={this.handleInputChange} name='date' value={date} type='date' placeholder='Event Date'/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input onChange={this.handleInputChange} name='city' value={city} placeholder='City event is taking place'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input onChange={this.handleInputChange} name='venue' value={venue} placeholder='Enter the venue of the event'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input onChange={this.handleInputChange} name='hostedby' value={hostedby} placeholder='Enter the name of the person hosting'/>
                    </Form.Field>
                    <Button onClick={this.handleFormSubmit} positive type='submit'>Submit</Button>
                    <Button type='button' onClick={this.props.cancelButton}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm;
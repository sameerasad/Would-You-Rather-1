import React, { Component } from "react"
import { connect } from "react-redux"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


class QuestionOverview extends Component {
  render() {
    console.log("QuestionOverview", this.props);
    const {pic,questionText,}=this.props
    
    
    
        
    
          return (
            <div>
          <Row >
        <Col className='overview-card'>
           <div className='overview-info'>
            <Image src={pic} alt="profile pic" roundedCircle />
            <span className="overview-text">{questionText}</span><br />
            <Button className="overview-btn" onClick={this.props.handleViewPoll}>View Poll</Button>
            </div>
          </Col>
        </Row>
           
        </div>
        )
        
          
  
    
  
         
    
  }
}
function mapStateToProp({users,questions},{id,pollView}){
    const pic = users[questions[id].author].avatarURL
    const questionText = questions[id].optionOne.text
  return {
    id,
    pic,
    questionText,
    pollView
}
}


export default connect(mapStateToProp)(QuestionOverview)
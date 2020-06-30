import React from 'react'
import data from '../data/data.json'
import { 
    Container, 
    Row, 
    Col, 
    Card,
    CardImg,
    CardBody
} from "shards-react";

export default function Group(props) {

    let groupinfo = data.groups.filter(group =>{
        if(group.link === props.match.params.gname){
            return true
        }else{
            return false
        }
    })

    console.log(groupinfo)

    let members = groupinfo[0].members.map(member => {

        return(
                <Card key={member.name} className="cardClass">
                    <CardImg className="profImg"
                    src={process.env.PUBLIC_URL +member["profile-image"]}/>
                    <CardBody>
                    <h5>{member.name}</h5>
                    <ul style={{listStyleType: "none"}}>
                        {member.email ? 
                        <li><i class="fas fa-envelope-square"></i> {member.email}</li>
                        : null}

                        {member.linkedin ? 
                        <li><i class="fab fa-linkedin"></i> <a href={member.linkedin}>Linkedin</a></li>
                        : null}
                        
                        {member.xing ? <li><i class="fab fa-xing-square"></i> <a href={member.xing}>Xing</a></li>
                        :null}

                        {member.github ? 
                        <li><i class="fab fa-github-square"></i> <a href={member.github}>Github</a></li>
                        : null}
                    </ul>
                        

                    </CardBody>
                </Card>
                
        )
    })

    let images = groupinfo[0].pageImages.map(imgSrc=>{
        return (
                <Card className="cardClass">
                    <CardImg className="homeImg" 
                    src={process.env.PUBLIC_URL +imgSrc}/>
                </Card>
        )
    })

    return (
        <>
            <div className="titleCont">
               <h1>{groupinfo[0].name}</h1> 
            </div>
            
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="5" lg="5">
                        <h4 className="titleSection">Group members: </h4>
                        {members}
                    </Col>
                    <Col xs="12" sm="12" md="7" lg="7">
                        <h4 className="titleSection" >Project images example: </h4>
                        {images}
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

import React from 'react'
import { Container, Row, Col, Card, CardImg } from "shards-react";
import {Link} from 'react-router-dom'
import data from '../data/data.json'

export default function Home() {

    let cards = data.groups.map(group =>{
        return (
            <Col key={group.name} xs="12" sm="12" md="6" lg="6">
                <Link style={{ textDecoration: 'none' }} to={`/group/${group.link}`} >
                    <h4 className="projectTitle"> {group.name} </h4>
                    <Card className="cardClass">
                        <CardImg className="homeImg" 
                        src={process.env.PUBLIC_URL +group["front-image"]}/>
                    </Card>
                </Link>
            </Col>
        )
    })

    return (
        <div>
            <div className="titleCont">
            <h1>Welcome to FBW3 Projects</h1>
            <h5>Here you will find a small description of the 
                projects presented to you on Thurday 2nd of July 2020</h5>
            </div>
            
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>
        </div>
    )
}

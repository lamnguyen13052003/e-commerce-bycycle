import React from "react";
import { Col, Row } from "react-bootstrap";
import {ProfileForm} from "../components/profile/form";
import {ProfileCard} from "../components/profile/card";

function Profile() {
    return (
        <>
            <Row>
                <Col xs={12} xl={8} style={{padding:'2%', border: "1px solid #efefef"}}>
                    <ProfileForm />
                </Col>
                <Col xs={12} xl={4}style={{padding:'2%', border: "1px solid #efefef"}}>
                    <ProfileCard />
                </Col>
            </Row>
        </>
    );
}

export default Profile;

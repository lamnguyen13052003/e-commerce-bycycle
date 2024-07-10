import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import ProfileCard from "../components/profile/card";
import ProfileForm from "../components/profile/form";

interface FormData {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}

const ProfilePage: React.FC = () => {
    const [profileData, setProfileData] = useState<FormData>({
        firstName: "Tùng",
        lastName: "Quang",
        birthday: "",
        gender: "",
        email: "example@example.com",
        phone: "+12-345 678 910",
        address: "123 Main St",
        street: "",
        city: "Tp. Hồ Chí Minh",
        state: "",
        zip: ""
    });

    const handleSave = (data: FormData) => {
        setProfileData(data);
    };

    return (
        <Row>
            <Col sm={9} style={{padding: "40px"}}>
                <ProfileForm onSave={handleSave} />
            </Col>
            <Col sm={3} style={{padding: "40px"}}>
                <ProfileCard
                    firstName={profileData.firstName}
                    lastName={profileData.lastName}
                    gender={profileData.gender}
                    email={profileData.email}
                    phone={profileData.phone}
                    address={`${profileData.address}, ${profileData.street}, ${profileData.city}, ${profileData.state}, ${profileData.zip}`}
                    city={profileData.city}
                />
            </Col>
        </Row>
    );
};

export default ProfilePage;

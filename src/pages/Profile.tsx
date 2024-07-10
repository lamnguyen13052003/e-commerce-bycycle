import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import ProfileCard from "../components/profile/card";
import ProfileForm from "../components/profile/form";
import Avatar from "../../assets/images/profile/me.png";

interface FormData {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    street: string;
    district: string;
    city: string;
    zip: string;
}

const ProfilePage: React.FC = () => {
    const [profileData, setProfileData] = useState<FormData>({
        firstName: "Tùng",
        lastName: "Quang",
        birthday: "22/10/2003",
        gender: "Nam",
        email: "21130152@st.hcmuaf.edu.vn",
        phone: "0932003572",
        address: "2/11A",
        street: "Đường 6",
        district: "Tp. Thủ Đức",
        city: "Tp. HCM",
        zip: "",
    });

    const handleSave = (data: FormData) => {
        setProfileData(data);
    };

    return (
        <Row>
            <Col sm={9} style={{ padding: "40px" }}>
                <ProfileForm onSave={handleSave} />
            </Col>
            <Col sm={3} style={{ padding: "40px" }}>
                <ProfileCard
                    firstName={profileData.firstName}
                    lastName={profileData.lastName}
                    gender={profileData.gender}
                    email={profileData.email}
                    phone={profileData.phone}
                    address={`${profileData.address}, ${profileData.street}, ${profileData.district}, ${profileData.city}, ${profileData.zip}`}
                    city={profileData.city}
                />
            </Col>
        </Row>
    );
};

export default ProfilePage;

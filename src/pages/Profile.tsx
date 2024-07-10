import React, {useState} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import ProfileMenu from "../components/profile/profileMenu";
import ProfileForm from "../components/profile/personalInfo";
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
        <Container>
            <Row className={"justify-content-between"}>
                <Col sm={3}>
                    <ProfileMenu/>
                </Col>
                <Col sm={9}>
                    <ProfileForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;

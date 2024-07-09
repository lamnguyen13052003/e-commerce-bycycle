import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';

import Avatar from "../../assets/images/profile/me.png";
import AvatarBackGround from "../../assets/images/profile/back-ground.png";

export const ProfileCard: React.FC = () => {
    return (
        <Card border="light" className="text-center p-0 mb-4">
            <div style={{ backgroundImage: `url(${AvatarBackGround})` }} className="profile-cover rounded-top" />
            <Card.Body className="pb-5">
                <Card.Img style={{width: "250px", height: "240px"}} src={Avatar} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
                <Card.Title>Tùng Quang</Card.Title>
                <Card.Subtitle className="fw-normal">Sinh viên</Card.Subtitle>
                <Card.Text className="text-gray mb-4">Tp. Hồ Chí Minh</Card.Text>
                <Button variant="primary" size="sm" className="me-2">
                    {/*<FontAwesomeIcon icon={faUserPlus} className="me-1" />*/} Xuất thông tin
                </Button>
                <Button variant="secondary" size="sm">Ý tưởng sau</Button>
            </Card.Body>
        </Card>
    );
};

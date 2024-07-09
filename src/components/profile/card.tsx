import React from "react";
import { Card, Button } from 'react-bootstrap';
import Avatar from "../../assets/images/profile/me.png";
import AvatarBackGround from "../../assets/images/profile/back-ground.png";

interface ProfileCardProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ firstName, lastName, email, phone, address, city }) => {
    return (
        <Card border="light" className="text-center p-0 mb-4">
            <div
                style={{ backgroundImage: `url(${AvatarBackGround})` }}
                className="profile-cover rounded-top"
            />
            <Card.Body className="pb-5">
                <Card.Img
                    style={{ width: "250px", height: "240px" }}
                    src={Avatar}
                    alt="Neil Portrait"
                    className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                />
                <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
                <Card.Subtitle className="fw-normal">Sinh viên</Card.Subtitle>
                <Card.Text className="text-gray mb-4">{city}</Card.Text>
                <Card.Text className="text-gray mb-4">{email}</Card.Text>
                <Card.Text className="text-gray mb-4">{phone}</Card.Text>
                <Card.Text className="text-gray mb-4">{address}</Card.Text>
                <Button
                    variant="primary"
                    size="sm"
                    className="me-2"
                    aria-label="Export Information"
                >
                    Xuất thông tin
                </Button>
                <Button
                    variant="secondary"
                    size="sm"
                    aria-label="Save for Later"
                >
                    Ý tưởng sau
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;

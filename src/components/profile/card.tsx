import React from "react";
import { Card, Button } from 'react-bootstrap';
import Avatar from "../../assets/images/profile/me.png";
import AvatarBackGround from "../../assets/images/profile/back-ground.png";

interface ProfileCardProps {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ firstName, lastName, email,gender , phone, address, city }) => {
    return (
        <Card border="light" className="text-center p-0 mb-4">
            <div
                style={{ backgroundImage: `url(${AvatarBackGround})` }}
                className="profile-cover rounded-top"
            />
            <Card.Body className="pb-5" >
                <Card.Img
                    style={{ width: "250px", height: "240px"}}
                    src={Avatar}
                    className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                />
                <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
                <Card.Text style={{textAlign: "left"}} className="text-gray mb-4"><strong>Giới tính:</strong> {gender}</Card.Text>
                <Card.Text style={{textAlign: "left"}} className="text-gray mb-4"><strong>Email:</strong> {email}</Card.Text>
                <Card.Text style={{textAlign: "left"}} className="text-gray mb-4"><strong>Số điện thoại:</strong> {phone}</Card.Text>
                <Card.Text style={{textAlign: "left"}} className="text-gray mb-4"><strong>Địa chỉ:</strong> {address}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;

import React from 'react';
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

function GoogleMapComponent(props: { center: location, marker: location[] }) {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAkJ-NbtMqrX05P5LzHQr86aAZeJ6iEmuA"
            loadingElement={<div>Loading...</div>}
        >
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '200px'
                }}
                center={props.center}
                zoom={15}
            >
                {
                    props.marker.map((item, index) => {
                        return (
                            <Marker key={index} position={item}/>
                        );
                    })
                }
            </GoogleMap>
        </LoadScript>
    );
}

export interface location {
    lat: number, // Vĩ độ
    lng: number // Kinh độ
}

export default GoogleMapComponent;
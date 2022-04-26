import React from "react";
import GoogleMapReact from 'google-map-react';
import { Typography, Paper, useMediaQuery,} from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyle from './style';

const Map=()=>{
    const classes=useStyle();
    const isMobile=useMediaQuery('(min-width:600px)');

    const coordinates= {lat:0,lon:0};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyAcEYN2PDk7XMgfvLaIb-pWBm8SFCjKCUk'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
            Map     
        </div>
    )
}
export default Map;
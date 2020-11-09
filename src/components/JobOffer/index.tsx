import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../common/Responsive";

import JobOfferPC from "./JobOfferPC";
import JobOfferTablet from "./JobOfferTablet";
import JobOfferPhone from "./JobOfferPhone";

const HomeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <JobOfferPC/>
            </PCCompnent>
            <TabletCompnent>
                <JobOfferTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <JobOfferPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default HomeComponent;



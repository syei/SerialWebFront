import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../../common/Responsive";

import CareerPC from "./CareerPC";
import CareerTablet from "./CareerTablet";
import CareerPhone from "./CareerPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <CareerPC/>
            </PCCompnent>
            <TabletCompnent>
                <CareerTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <CareerPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



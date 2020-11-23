import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../common/Responsive";

import BasicInfoPC from "./BasicInfoPC";
import BasicInfoTablet from "./BasicInfoTablet";
import BasicInfoPhone from "./BasicInfoPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <BasicInfoPC/>
            </PCCompnent>
            <TabletCompnent>
                <BasicInfoTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <BasicInfoPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



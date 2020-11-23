import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../common/Responsive";

import BusinessContentPC from "./BusinessContentPC";
import BusinessContentTablet from "./BusinessContentTablet";
import BusinessContentPhone from "./BusinessContentPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <BusinessContentPC/>
            </PCCompnent>
            <TabletCompnent>
                <BusinessContentTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <BusinessContentPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



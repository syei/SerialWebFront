import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../common/Responsive";

import OtherPC from "./OtherPC";
import OtherTablet from "./OtherTablet";
import OtherPhone from "./OtherPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <OtherPC/>
            </PCCompnent>
            <TabletCompnent>
                <OtherTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <OtherPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



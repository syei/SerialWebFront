import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../common/Responsive";

import ResumePC from "./ResumePC";
import ResumeTablet from "./ResumeTablet";
import ResumePhone from "./ResumePhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <ResumePC/>
            </PCCompnent>
            <TabletCompnent>
                <ResumeTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <ResumePhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



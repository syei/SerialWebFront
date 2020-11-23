import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../common/Responsive";

import SkillSetPC from "./SkillSetPC";
import SkillSetTablet from "./SkillSetTablet";
import SkillSetPhone from "./SkillSetPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <SkillSetPC/>
            </PCCompnent>
            <TabletCompnent>
                <SkillSetTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <SkillSetPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



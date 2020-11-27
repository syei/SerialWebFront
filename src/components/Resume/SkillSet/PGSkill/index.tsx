import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../../../common/Responsive";

import PGSkillPC from "./PGSkillPC";
import PGSkillTablet from "./PGSkillTablet";
import PGSkillPhone from "./PGSkillPhone";

const ResumeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <PGSkillPC/>
            </PCCompnent>
            <TabletCompnent>
                <PGSkillTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <PGSkillPhone/>
            </PhoneCompnent>
        </div>
    )
}

export default ResumeComponent;



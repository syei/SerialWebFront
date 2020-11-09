import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../common/Responsive";

import HomePC from "./HomePC";
import HomeTablet from "./HomeTablet";
import HomePhone from "./HomePhone";

const HomeComponent = () => {
    return (
        <div>
            <PCCompnent>
                <HomePC/>
            </PCCompnent>
            <TabletCompnent>
                <HomeTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <HomePhone/>
            </PhoneCompnent>
        </div>
    )
}

export default HomeComponent;



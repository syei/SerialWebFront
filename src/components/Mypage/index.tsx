import React from "react";
import {
    PCCompnent, TabletCompnent, PhoneCompnent
} from "../common/Responsive";

import MypagePC from "./MypagePC";
import MypageTablet from "./MypageTablet";
import MypagePhone from "./MypagePhone";

const MypageComponent = () => {
    return (
        <div>
            <PCCompnent>
                <MypagePC/>
            </PCCompnent>
            <TabletCompnent>
                <MypageTablet/>
            </TabletCompnent>
            <PhoneCompnent>
                <MypagePhone/>
            </PhoneCompnent>
        </div>
    )
}

export default MypageComponent;



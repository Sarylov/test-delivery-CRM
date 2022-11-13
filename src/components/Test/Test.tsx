
    import React, { FC } from "react";
    import { TestProps } from "./Test.props";
    import "./Test.module.css";

    const Test: FC<TestProps> = ({...props }) => {
    return (
        <div {...props}>
        </div>
     );
    };

    export default Test;
    
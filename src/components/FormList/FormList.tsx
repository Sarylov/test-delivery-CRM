import React, { FC } from "react";
import { FormListProps } from "./FormList.props";
import "./FormList.module.css";

const FormList: FC<FormListProps> = ({ ...props }) => {
  return <div {...props}></div>;
};

export default FormList;

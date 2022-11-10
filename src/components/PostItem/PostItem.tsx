import React from "react";
import { postAPI } from "../../services/PostService";
import { PostItemProps } from "./PostItem.props";
import Htag from "./../Htag/Htag";

export default function Post({ data }: PostItemProps): JSX.Element {
  return (
    <>
      <Htag tag="h2">{data.title}</Htag>
      <p>{data.body}</p>
    </>
  );
}

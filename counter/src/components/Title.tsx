import { FunctionComponent } from "react";

interface Props {
  title: string;
  pharagraph?: string;
}
//interfaces are used to distructure props in ts

export const Title: FunctionComponent<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

import { FC } from "react";
import { IResp } from "../interfaces";

interface Props {
  click: IResp;
  timer: number;
  counter: number;
}

export const Resp: FC<Props> = ({ click, timer, counter }) => {
  return (
    <div>
      {counter > click.a && counter <= click.b && timer === 0 && click.c}
    </div>
  );
};

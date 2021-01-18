import React, { useMemo } from "react";
import { Root, Line } from "./style";

type Props = {
  percent: number;
};

const SeekBar: React.FC<Props> = (props: Props) => {
  const { percent } = props;

  const percents = useMemo(() => {
    const array = [0, 0, 0, 0, 0];
    return array.map((arr, index) => {
      const pp = Math.floor(((percent - 20 * index) / 20) * 100);
      return pp > 100 ? 100 : pp;
    });
  }, [percent]);

  return (
    <Root>
      {percents.map((percent) => {
        return (
          <Line percent={percent}>
            <div className="seek-filter" />
          </Line>
        );
      })}
    </Root>
  );
};

export default SeekBar;

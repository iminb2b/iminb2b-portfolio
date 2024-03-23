import { FC } from "react";
import { css, keyframes } from "@emotion/react";

const animation = keyframes`
  50%{transform: translateY(-50px);}

`;

const container = ({ count }: { count: number }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${animation} 15s ease-in-out infinite;
  animation-delay: calc(0.1s * ${count});
  font-size: 1.25rem;
`;

const HomePageMarqueeListItem: FC<{ char: string; index: number }> = ({
  char,
  index,
}) => {
  return (
    <div css={container({ count: index })}>
      {char}

      {char === " " && <span>&nbsp;</span>}
    </div>
  );
};

export default HomePageMarqueeListItem;

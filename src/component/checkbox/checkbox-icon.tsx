/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';
import { ReactComponent as CheckSVG } from '../../icons/check.svg';
import { color } from '../../theme/shared';

const uncheckedCss = css`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  border: solid 1px ${color.medium};
  &:hover {
    border: solid 2px ${color.slate};
  }
`;

const checkedCss = css`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  background-color: ${color.turquoise};
`;

const CheckIcon = styled(CheckSVG)`
  fill: currentColor;
  stroke: white;
  stroke-width: 2px;
  url
`;

export const CheckBoxChecked = (props: any) => (
  <CheckIcon {...props} css={checkedCss} />
);

export const CheckboxUnchecked = (props: any) => (
  <div {...props} css={uncheckedCss} />
);

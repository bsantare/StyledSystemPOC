/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';
import { ReactComponent as CheckSVG } from '../../icons/check.svg';
import { color } from '../../theme/shared';

const disabledCss = css`
  &:disabled {
    opacity: 0.35;
    border-radius: 1px;
    background-color: ${color.grey};
  }
`;

const uncheckedCss = css`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  border: solid 1px ${color.medium};
  &:hover {
    border: solid 2px ${color.slate};
  }
  ${disabledCss}
`;

const checkedCss = css`
  ${disabledCss}
  width: 24px;
  height: 24px;
  border-radius: 1px;
  background-color: ${color.turquoise};
  &:hover {
    background-color: ${color.turquoiseDark};
  }
  path {
    fill: white;
  }
`;

export const CheckBoxChecked = (props: any) => (
  <CheckSVG {...props} css={checkedCss} />
);

export const CheckboxUnchecked = (props: any) => (
  <div {...props} css={uncheckedCss} />
);

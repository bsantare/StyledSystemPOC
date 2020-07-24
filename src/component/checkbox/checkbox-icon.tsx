/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';
import { SVG } from '../svg';
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

const Icon = styled(SVG)`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const CheckBoxChecked = (props: any) => (
  <Icon {...props} css={checkedCss}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </Icon>
);

export const CheckboxUnchecked = (props: any) => (
  <Icon {...props} css={uncheckedCss}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </Icon>
);

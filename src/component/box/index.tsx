import styled from '@emotion/styled';
import {
  flexbox, layout, color, space
} from 'styled-system';

const BoxComponent = styled('div')(
  {},
  space,
  color,
  layout,
  flexbox
);

export const Box = BoxComponent;

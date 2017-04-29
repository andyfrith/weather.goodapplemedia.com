import {css} from 'styled-components';

export const media = {
  phone: (...args) => css`
    @media (min-width: 420px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 992px) {
      ${ css(...args) }
    }
  `,
  giant: (...args) => css`
    @media (min-width: 1170px) {
      ${ css(...args) }
    }
  `,
};

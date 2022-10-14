import { styled } from '@mui/material';

interface ContentBoxProps {
  variant?: 'normal' | 'toolbar' | 'loading';
  bg?: string;
}

export const ContentBox = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'ContentBox',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.variant === 'normal' && styles.normal,
    props.variant === 'toolbar' && styles.toolbar,
    props.variant === 'loading' && styles.loading,
  ],
})<ContentBoxProps>((props) => ({
  backgroundImage: `url(${props.bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

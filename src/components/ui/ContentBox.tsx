import { styled } from '@mui/system';

interface ContentBoxProps {
  variant?: 'normal' | 'header' | 'toolbar';
}

export default styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'ContentBox',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.variant === 'normal' && styles.normal,
    props.variant === 'header' && styles.header,
    props.variant === 'toolbar' && styles.toolbar,
  ],
})<ContentBoxProps>(({ theme }) => ({}));

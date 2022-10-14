import { styled } from '@mui/material';

export interface InteractiveChipProps {
  variant?: 'normal' | 'active' | 'loading';
}

export const InteractiveChip = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'InteractiveChip',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.variant === 'normal' && styles.normal,
    props.variant === 'active' && styles.toolbar,
  ],
})<InteractiveChipProps>((props) => ({
  borderRadius: '10px',
  padding: props.theme.spacing(1.4, 4),
}));

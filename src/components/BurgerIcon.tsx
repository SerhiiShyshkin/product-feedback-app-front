import { useAppSelector, useAppDispatch } from '../hook';
import { toggleOpen } from '../store/slices/sidebarSlice';

interface BurgerIconProps {
  openIcon: string | undefined;
  closeIcon: string | undefined;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({
  openIcon,
  closeIcon,
}) => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const dispatch = useAppDispatch();

  return (
    <img
      src={isOpen ? closeIcon : openIcon}
      alt={isOpen ? 'Close icon' : 'Open icon'}
      onClick={() => dispatch(toggleOpen())}
    />
  );
};

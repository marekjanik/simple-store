import { useState, useCallback } from 'react';

type UseComponentType = {
 isClicked: boolean;
 onClick: VoidFunction;
 onCloseMobileMenu: VoidFunction;
};

export const useComponent = (): UseComponentType => {
 const [isClicked, setIsClicked] = useState(false);

 const onClick = useCallback(() => {
  setIsClicked(!isClicked);
 }, [isClicked]);

 const onCloseMobileMenu = useCallback(() => {
  setIsClicked(false);
 }, []);

 return {
  isClicked,
  onClick,
  onCloseMobileMenu
 };
};

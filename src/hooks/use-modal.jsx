import { useCallback, useState } from 'react';

function useModal() {
  const [ isModalOpened, setIsModalOpened ] = useState(false);

  const handleModalClose = useCallback((evt) => {
    evt.preventDefault();
    setIsModalOpened(false);
  }, []);

  const handleModalOpen = useCallback((evt) => {
    evt.preventDefault();
    setIsModalOpened(true);
  }, []);

  return [isModalOpened, handleModalClose, handleModalOpen];

}

export default useModal;

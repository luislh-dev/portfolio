import { GlobalStateContext } from '@providers/GlobalStateProvider';
import { useContext } from 'react';

function useGlobal() {
  return useContext(GlobalStateContext);
}

export default useGlobal;

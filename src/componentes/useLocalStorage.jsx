import { useLocalStorage } from 'react-use';

function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useLocalStorage(key, defaultValue);
  const setLocalStorageValue = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setLocalStorageValue];
}

export default useLocalStorageState;

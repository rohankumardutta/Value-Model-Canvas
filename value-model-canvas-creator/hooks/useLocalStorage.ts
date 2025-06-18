
import { useState, useEffect } from 'react';

function useLocalStorage<T,>(key: string, initialValue: T | (() => T)): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : (typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue);
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”:", error);
      return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error setting localStorage key “" + key + "”:", error);
    }
  };

  useEffect(() => {
    // This effect can be used to synchronize changes from other tabs/windows if needed,
    // but for this simple case, it's not strictly necessary.
    // For now, it ensures that if initialValue changes, it updates the stored value.
    // However, this typically isn't how useLocalStorage is used with dynamic initialValues.
    // The main purpose is to load from localStorage once and then manage state.
  }, [key]);


  return [storedValue, setValue];
}

export default useLocalStorage;

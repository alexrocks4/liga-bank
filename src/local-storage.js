const saveToLocalStorage = (storageKey, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (error) {
    return error;
  }
};

const loadFromLocalStorage = (storageKey) => {
  try {
    const serializedState = localStorage.getItem(storageKey);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (_) {
    return undefined;
  }
};

export {
  saveToLocalStorage,
  loadFromLocalStorage
};

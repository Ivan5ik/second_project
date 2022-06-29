import React, { createContext, useState } from "react";

export const StoreContext = createContext<any>(null);

export default ({ children }: any) => {
  const [check, setCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <StoreContext.Provider
      value={{ check, setCheck, modalVisible, setModalVisible }}
    >
      {children}
    </StoreContext.Provider>
  );
};

import React, { memo } from "react";
import { Spinner } from "@heroui/react";

const App = () => {
  return <Spinner label="กำลังโหลด..." color="primary" />;
};

export default memo(App);

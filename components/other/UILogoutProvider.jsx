"use client";

import React, { memo } from "react";
import { signOut } from "next-auth/react";
import { useIdleTimer } from "react-idle-timer";

const UILogoutProvider = ({ children }) => {
  const timeout = 60 * 60 * 1000;

  const handleOnIdle = () => {
    signOut({ callbackUrl: "/" });
  };

  useIdleTimer({
    timeout,
    onIdle: handleOnIdle,
  });

  return <>{children}</>;
};

export default memo(UILogoutProvider);

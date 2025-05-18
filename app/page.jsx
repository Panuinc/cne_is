"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/components/other/UILoading";
import UIIndex from "@/components/ui/index/UIIndex";

function useLogin(empUserUsername, isPinMode) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const autoLoginTriggered = useRef(false);

  const performLogin = useCallback(
    async (credential) => {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          username: empUserUsername,
          password: credential,
          loginType: isPinMode ? "pin" : "password",
        });
        if (result?.error) {
          throw new Error(result.error);
        }
        toast.success("Login Success");
        if (!session?.user?.isFirstLogin) {
          localStorage.setItem("hasLoggedInBefore", "true");
          localStorage.setItem("empUserUsername", empUserUsername);
        }
      } catch (err) {
        toast.error(err.message || "Login failed");
        throw err;
      }
    },
    [empUserUsername, isPinMode, session]
  );

  useEffect(() => {
    if (status === "authenticated") {
      const nextPath = session?.user?.isFirstLogin ? "/changPassPin" : "/home";
      router.push(nextPath);
    }
  }, [status, session, router]);

  return { session, status, performLogin, autoLoginTriggered };
}

export default function Index() {
  const [empUserUsername, setEmpUserUsername] = useState("");
  const [empUserCredential, setEmpUserCredential] = useState("");
  const [pinDigits, setPinDigits] = useState(["", "", "", "", "", ""]);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [isPinMode, setIsPinMode] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { session, status, performLogin, autoLoginTriggered } = useLogin(
    empUserUsername,
    isPinMode
  );

  useEffect(() => {
    const hasLogged = localStorage.getItem("hasLoggedInBefore") === "true";
    setIsPinMode(hasLogged);
    if (hasLogged) {
      const stored = localStorage.getItem("empUserUsername") || "";
      setEmpUserUsername(stored);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const credential = isPinMode ? pinDigits.join("") : empUserCredential;

    if (isPinMode && credential.length !== 6) {
      toast.error("กรุณากรอก PIN ให้ครบ 6 หลัก");
      return;
    }

    try {
      setIsLoggingIn(true);
      await performLogin(credential);
    } catch {
      if (isPinMode) {
        setPinDigits(["", "", "", "", "", ""]);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  useEffect(() => {
    const filled = pinDigits.every((d) => d !== "");
    const credential = pinDigits.join("");
    if (
      isPinMode &&
      filled &&
      credential.length === 6 &&
      !isLoggingIn &&
      !autoLoginTriggered.current
    ) {
      autoLoginTriggered.current = true;
      handleLogin({ preventDefault: () => {} });
      autoLoginTriggered.current = false;
    }
  }, [pinDigits, isPinMode, isLoggingIn]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <Loading />
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <Toaster position="top-right" />
        <UIIndex
          isPinMode={isPinMode}
          setIsPinMode={setIsPinMode}
          empUserUsername={empUserUsername}
          setEmpUserUsername={setEmpUserUsername}
          empUserCredential={empUserCredential}
          setEmpUserCredential={setEmpUserCredential}
          pinDigits={pinDigits}
          setPinDigits={setPinDigits}
          keepLoggedIn={keepLoggedIn}
          setKeepLoggedIn={setKeepLoggedIn}
          handleLogin={handleLogin}
          isLoggingIn={isLoggingIn}
        />
      </>
    );
  }
  return null;
}

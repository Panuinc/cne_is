"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import UIChangPassPin from "@/components/ui/changPassPin/UIChangPassPin";

const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function ChangePasswordPage() {
  const { data: session } = useSession();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      toast.error("Password and Confirm Password do not match");
      return;
    }

    if (!/^\d{6}$/.test(pin)) {
      setError("PIN must be exactly 6 digits");
      toast.error("PIN must be exactly 6 digits");
      return;
    }

    try {
      const response = await fetch("/api/other/changPassPin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "secret-token": SECRET_TOKEN || "",
        },
        body: JSON.stringify({
          userId: Number(session?.user?.id),
          newPassword,
          pin,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        toast.error(data.error || "Something went wrong");
      } else {
        toast.success("Update success. Please log in again.");
        signOut({ redirect: false }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <UIChangPassPin
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        pin={pin}
        setPin={setPin}
        error={error}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

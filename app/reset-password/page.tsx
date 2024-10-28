import { ResetPasswordForm } from "@/components/password/ResetPasswordForm";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="xl:w-1/4 md:w-1/2 w-full px-10 sm:px-0">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

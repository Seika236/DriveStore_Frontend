"use client";

import { toaster } from "@/components/ui/toaster";

export function UseToaster() {
  function successMassage(massage: string) {
    toaster.create({
      title: massage,
      type: "success",
    });
  }

  function errorMassage(massage: string) {
    toaster.create({
      title: massage,
      type: "error",
    });
  }

  function warningMassage(massage: string) {
    toaster.create({
      title: massage,
      type: "warning",
    });
  }

  function infoMassage(massage: string) {
    toaster.create({
      title: massage,
      type: "info",
    });
  }

  return {
    successMassage,
    errorMassage,
    warningMassage,
    infoMassage,
  };
}

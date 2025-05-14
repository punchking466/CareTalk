"use client";

import { useEffect } from "react";

export default function MswProvider() {
  useEffect(() => {
    import("../mocks/browser").then(({ worker }) => {
      worker.start();
    });
  }, []);

  return null;
}

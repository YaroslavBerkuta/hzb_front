"use client";
import React, { FC } from "react";
import * as Sentry from "@sentry/react";

export const SentryProvider: FC<{ children: any }> = ({ children }) => {
  Sentry.init({
    dsn: "https://7eec044eeb9145b799a9dcd8126820f1@o4505448164360192.ingest.sentry.io/4505448173207552",
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ["localhost"],
      }),
      new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
  return <>{children}</>;
};

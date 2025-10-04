"use client";

import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper() {
  return (
    <Analytics 
      beforeSend={(event) => {
        // 개인정보 보호를 위한 IP 주소 마스킹
        if (event.url) {
          event.url = event.url.replace(/\?.*$/, '');
        }
        return event;
      }}
    />
  );
}





"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 650);
    const removeTimer = window.setTimeout(() => setVisible(false), 980);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-loader${leaving ? " site-loader-leaving" : ""}`} role="status" aria-label="Loading Kokeb Excellence">
      <div className="site-loader-mark">
        <span className="site-loader-ring" aria-hidden="true" />
        <img src="/images/logo-navbar.png" alt="" />
      </div>
      <strong><span>Kokeb</span> Excellence</strong>
      <small>Language Academy</small>
    </div>
  );
}

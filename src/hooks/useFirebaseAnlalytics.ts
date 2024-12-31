import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect, useMemo } from "react";

const useFirebaseAnalytics = () => {
  const firebaseConfig = useMemo(
    () => ({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      authDomain: "min-s-portfolio.firebaseapp.com",
      projectId: "min-s-portfolio",
      storageBucket: "min-s-portfolio.firebasestorage.app",
      messagingSenderId: "359158303870",
      appId: "1:359158303870:web:2304670015c6ceb0671c2f",
      measurementId: "G-W84SB17DXN",
    }),
    [],
  );

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    logEvent(analytics, "page_opend");
  }, [firebaseConfig]);
};

export default useFirebaseAnalytics;

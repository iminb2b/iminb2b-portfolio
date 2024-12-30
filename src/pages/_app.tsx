import ErrorPageContent from "@/components/ErrorPageContent";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import stringsEn from "@/strings/stringsEn";
import stringsVi from "@/strings/stringsVi";
import { useRouter } from "next/router";
import { AppContextType, AppProvider } from "@/context/AppContext";
import useFirebaseAnalytics from "@/hooks/useFirebaseAnlalytics";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const localeInfo = router.asPath.slice(1, 3);

  const localeStrings = localeInfo === "vi" ? stringsVi : stringsEn;

  const [initialContextValue, setIntialContextValue] = useState<AppContextType>(
    {
      strings: localeStrings,
      lang: localeInfo === "vi" ? "vi" : "en",
      darkmode: true,
    },
  );

  useFirebaseAnalytics();

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem("darkmode");

    if (localStorageDarkMode) {
      setIntialContextValue((prev) => ({
        ...prev,
        darkmode: localStorageDarkMode === "true",
      }));
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIntialContextValue((prev) => ({
        ...prev,
        darkmode: mediaQuery.matches,
      }));
    }
  }, []);

  if (pageProps.error) {
    return (
      <AppProvider initialState={initialContextValue}>
        <Layout>
          <ErrorPageContent />
        </Layout>
      </AppProvider>
    );
  }

  return (
    <AppProvider initialState={initialContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

'use client';

import HomePage from "@/components/Home/HomePage";
import { LoadingImage } from "@/components/LoadingIndicator";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }

    handleRouteChange();
    return;
  }, [pathname])
  return (
    <>
    {loading && <LoadingImage />}
      <HomePage />
    </>
    // https://www.youtube.com/watch?v=LgTan_NZnAg
  );
}

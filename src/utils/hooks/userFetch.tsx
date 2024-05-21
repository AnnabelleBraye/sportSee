/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

type FetchProps = {
  url: string,
}

export type FetchType<T> = {
  data: T | null,
  isLoading: boolean,
  error: boolean
}

/**
 * Hook used to fetch api data
 * @param url { String } Url to call
 * @returns {any, Boolean, Boolean}
 */
export const useFetch = <T,>({
  url
}: FetchProps): FetchType<T> => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data);
      } catch(e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url])
    
  return {data, error, isLoading};
}
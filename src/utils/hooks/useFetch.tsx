/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { errorMessage } from "../../constants"

type FetchProps = {
  url: string,
}

export type FetchType<T> = {
  data: T | null,
  isLoading: boolean,
  isError: boolean,
  message: string
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
  const [data, setData] = useState<T | null>(null);
  const [isError, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(errorMessage['NONE']);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.data) {
          setError(true);
          setMessage(errorMessage['USER_NOT_FOUND']);
          console.log(data)
        }

        setData(data.data);
      } catch(e) {
        setError(true);
        setMessage(errorMessage['SERVICE_UNAVAILABLE'])
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url])
    
  return {data, isError, message, isLoading};
}
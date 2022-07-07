import { useState, useEffect, useCallback, useRef } from "react";

const useQuery = ({ query, load = false }) => {
  const loadingRef = useRef({ load, loading: false, query });

  const [queryState, setQueryState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  const runQuery = useCallback(
    async (newQuery = null) => {
      try {
        if (loadingRef.current.loading) return;

        if (!query) throw new Error("No query provided");

        loadingRef.current.loading = true;
        setQueryState(() => ({ ...queryState, loading: true }));
        const response = newQuery ? await newQuery() : await query();
        setQueryState(() => ({
          ...queryState,
          data: response,
          loading: false,
        }));
      } catch (error) {
        console.error(error);
        setQueryState(() => ({
          ...queryState,
          error: `${error.message}`,
          loading: false,
        }));
      }
      loadingRef.current = {
        loading: false,
        load: false,
      };
    },
    [query, queryState]
  );

  useEffect(() => {
    const runEffect = async () => {
      loadingRef.current.load &&
        !loadingRef.current.loading &&
        (await runQuery());
    };
    runEffect();
    return () => {};
  }, [runQuery]);

  return {
    ...queryState,
    loading: loadingRef.current.loading || queryState.loading,
    runQuery,
  };
};

export default useQuery;

import React, { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  // TODO: any
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = {
        todos: [
          { id: 0, task: "Gym", isComplete: true },
          { id: 1, task: "Tan", isComplete: true },
          { id: 2, task: "Laundry", isComplete: false },
        ],
      };
      setData(response);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

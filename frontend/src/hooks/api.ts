import { useEffect, useState } from "react";
import { healthCheck } from "../api";

// @todo check if api connection is still healthy on an interval
export const useHealthCheck = () => {
  const [healthy, setHealthy] = useState(false);

  useEffect(() => {
    const checkHealth = async () => {
      const isHealthy = await healthCheck();
      setHealthy(isHealthy);
    };
    checkHealth();
  }, []);

  return healthy;
};

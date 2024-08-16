import { useMemo } from "react";
import { Workers } from "./types";

export function useWorkersTable(workers: Workers) {
  return useMemo(() => {
    return workers.map(([key, value]) => {
      return {
        name: key,
        workers: value.workers,
        waiting: value.waiting,
        idle: value.idle,
        wait_time: value.wait_time,
        ttr: value.time_to_return,
      };
    });
  }, [workers]);
}

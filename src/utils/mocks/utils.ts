import { Workers } from "../types";
import { randAwsService, randNumber, randAlpha } from "@ngneat/falso";

export function generateMockWorker(): Workers[number] {
  return [
    randAwsService(),
    {
      idle: randNumber(),
      recently_blocked_keys: [randAlpha()],
      time_to_return: randNumber(),
      top_keys: [randAlpha()],
      wait_time: randNumber(),
      waiting: randNumber(),
      workers: randNumber(),
    },
  ];
}

export function generateMockWorkers(num: number): Workers {
  const workers = [];
  for (let i = 0; i < num; i++) {
    workers.push(generateMockWorker());
  }
  return workers;
}

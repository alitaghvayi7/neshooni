export const fetcher = (...args: Parameters<typeof fetch>): ReturnType<typeof fetch> =>
  fetch(...args).then((res) => res.json());

export function throttle(cb: (...args: any[]) => any, delay: number = 5000) {
  let shouldWait: boolean = false;
  let lastArgs: any[];

  return (...args: any[]) => {
    if (shouldWait) {
      lastArgs = args;
      return;
    }
    shouldWait = true;
    cb(args);
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

export function debounce(cb: (...args: any[]) => any, delay: number = 500) {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
      clearTimeout(timeout);
    }, delay);
  };
}

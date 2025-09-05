function throttle(fn, delay) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      fn(...args);
      last = now;
    }
  };
}

const throttled = throttle(() => console.log("Scroll..."), 1000);
throttled(); throttled(); throttled(); // runs at most once/sec
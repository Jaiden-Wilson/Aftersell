export const createIntersectionObserver = async (
  el: HTMLElement,
  cb: () => void,
) => {
  if (!window.IntersectionObserver) {
    await import('intersection-observer');
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (el === entry.target) {
          // Check if element is within viewport, remove listener, destroy observer, and run link callback.
          // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(el);
            io.disconnect();
            cb();
          }
        }
      });
    },
    {
      rootMargin: '400px',
    },
  );

  if (!el) {
    return null;
  }

  // Add element to the observer
  io.observe(el);

  return io;
};

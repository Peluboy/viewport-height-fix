let initialized = false;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function setVhVar() {
  if (!isBrowser()) return;
  requestAnimationFrame(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function(this: any, ...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  } as T;
}

export function initViewportHeightFix() {
  if (!isBrowser() || initialized) return;
  initialized = true;
  const debouncedSetVhVar = debounce(setVhVar, 100);

  setVhVar();

  window.addEventListener('resize', debouncedSetVhVar);
  window.addEventListener('orientationchange', debouncedSetVhVar);
  window.addEventListener('focus', debouncedSetVhVar);
  window.addEventListener('pageshow', debouncedSetVhVar);
  document.addEventListener('visibilitychange', debouncedSetVhVar);
  window.addEventListener('touchend', debouncedSetVhVar);
}
'use client';

import { useSyncExternalStore } from 'react';

// The browser's current time, read once per page load. It is null during server
// rendering and hydration, so date-dependent UI starts from the server's view and
// then corrects itself without a hydration mismatch.
let clientNow = null;
const getNow = () => (clientNow ??= Date.now());
const subscribe = () => () => {};

export default function useClientNow() {
  return useSyncExternalStore(subscribe, getNow, () => null);
}

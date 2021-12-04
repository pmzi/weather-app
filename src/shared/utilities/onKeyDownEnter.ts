import { KeyboardEvent } from 'react';

export default function onKeyDownEnter<T>(e: KeyboardEvent<T>, cb: ()=>void) {
  if (e.code === 'Enter') cb();
}

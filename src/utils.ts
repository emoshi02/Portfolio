import { FunctionComponent, SVGAttributes } from 'react';

export function assertHTMLElement<T>(elem: any): asserts elem is T {
  if (!elem) throw new Error('Not an HTMLElement');
}

export function convertSVGToString(
  elem: FunctionComponent<SVGAttributes<SVGElement>>,
): string {
  return elem.toString();
}

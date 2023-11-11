export function assertHTMLElement<T>(elem: any): asserts elem is T {
    if (!elem) throw new Error('Not an HTMLElement')
}

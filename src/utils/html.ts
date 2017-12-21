/**
 * Create html tag
 * @param tag html tag
 * @param text text content
 * @param attrs attributes
 */
export function tag(tag: string = 'div', text: string = '', attrs?: string) {
	tag = tag.trim()
	return attrs ? `<${tag} ${attrs}>${text}</${tag}>` : `<${tag}>${text}</${tag}>`
}
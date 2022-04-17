export function createElement(
  prop: {
    tag: string;
    namespaceURI?: string;
    attrs?: { [attr: string]: any };
    options?: ElementCreationOptions;
    text?: string;
  },
  parent?: Element
): Element {
  const { tag, namespaceURI, attrs, options, text } = prop;
  const ele = namespaceURI
    ? document.createElementNS(namespaceURI, tag, options)
    : document.createElement(tag, options);
  if (attrs) {
    for (const attr in attrs) {
      ele.setAttribute(attr, attrs[attr]);
    }
  }
  if (text) {
    ele.appendChild(document.createTextNode(text));
  }
  if (parent) {
    parent.appendChild(ele);
  }
  return ele;
}

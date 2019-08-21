import { PLACEHOLDER_TAG } from '../constants';

export const hasPlaceholderAttribute = (attribute: Attr): boolean => attribute.name.startsWith(PLACEHOLDER_TAG);

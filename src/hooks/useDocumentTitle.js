import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function getPageTitle(page) {
  return `${page} | ${siteConfig.name}`;
}
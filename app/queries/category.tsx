import { ProductContent } from "./fragments/product-contents"

export const CategoryQuery = `
  query DOCUMENT_PAGE($language: String!, $path: String) {
    document: catalogue(language: $language, path: $path) {
      ...item
        children {
            ...product
          }
      }
  }

  ${ProductContent}
`

import { HomeQuery } from "./fragments/item"

export const Hquery = `
  query DOCUMENT_PAGE($language: String!, $path: String) {
    document: catalogue(language: $language, path: $path) {
      ...on Item {
        publishedAt
        ...item 
        children {
            name
        }
      }
    }
  }
  ${HomeQuery}
`

import itemFragment from 'lib/graph/fragments/item';

export default `
  query DOCUMENT_PAGE($language: String!, $path: String) {
    document: catalogue(language: $language, path: $path) {
      ...on Item {
        publishedAt
        ...item 
      }
    }
  }

  ${itemFragment}
`;

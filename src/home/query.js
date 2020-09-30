import itemFragment from 'lib/graph/fragments/item';
import productFragment from 'lib/graph/fragments/product';

export default `
query FOLDER_PAGE($language: String!, $path: String, $gridId: ID!) {
    folder: catalogue(language: $language, path: $path) {
      ...item

      children {
        ...item
        ...product
      }
    }
    grid: grid(id: $gridId, language: $language) {
      id
      name
      rows {
        columns {
          layout {
            rowspan
            colspan
          }
          itemType
          itemId
          item {
            ... on Item {
              ...item
              ...product
            }
          }
        }
      }
    }
  }

  ${itemFragment}
  ${productFragment}
`;

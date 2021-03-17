export const componentContents = `
  fragment singleLine on SingleLineContent {
    text
  }
  fragment richText on RichTextContent {
    json
    plainText
  }
  fragment image on Image {
    url
    altText
    variants {
      url
      width
    }
  }
  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }
  fragment itemRelation on ItemRelationsContent {
    items {
      id
      name
      path
      type
      ...on Product {
        variants {
          price
          isDefault
          name
          image {
            ...image
          }
        }
      }
    }
  }
  fragment propertiesTableContent on PropertiesTableContent {
    sections {
      title
      properties {
        key
        value
      }
    }
  }
`

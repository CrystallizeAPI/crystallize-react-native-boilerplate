export const ProductContent = `
fragment content on ComponentContent {
    ...singleLine
    ...richText
    ...imageContent
    ...paragraphCollection
    ...itemRelations
    ...gridRelations
    ...location
    ...propertiesTable
    ...dateTime
    ...videoContent
    ...numeric
  }
  
  fragment component on Component {
    id
    name
    type
    content {
      ...content
      ...componentChoice
      ...contentChunk
    }
  }
  
  fragment dateTime on DatetimeContent {
    datetime
  }
  
  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
  
  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      key
    }
  }
  
  fragment item on Item {
    id
    name
    type
    path
    components {
      ...component
    }
  }
  
  fragment location on LocationContent {
    lat
    long
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
  
  
  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }
  
  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
      components {
        id
        name
        content {
          ...singleLine
          ...richText
          ...imageContent
          ...paragraphCollection
          ...contentItems
        }
      }
    }
  }
  
  fragment contentItems on ComponentContent {
    ... on ItemRelationsContent {
      items {
        ... on Product {
          id
          name
          variants {
            id 
            name
            stock 
            priceVariants {
              currency
              price
              name
            }
            images {
              url
              
            }
          }
        }
      }
    }
  }

  fragment product on Product {
    id
    name
    type
    language
    path
    isVirtual
    isSubscriptionOnly
    components {
      ...component
    }
    variants {
      id
      name
      sku
      price
      priceVariants {
        identifier
        name
        price
        currency
      }
      stock
      isDefault
      images {
        url
        altText
        key
        variants {
          key
          width
          url
        }
      }
      subscriptionPlans {
        id
        name
        initialPeriod
        initialPrice
        recurringPeriod
        recurringPrice
      }
    }
    vatType {
      name
      percent
    }
  }
  
  fragment gridRelations on GridRelationsContent {
    grids {
      id
      name
    }
  }
  
  fragment richText on RichTextContent {
    json
    html
    plainText
  }
  
  fragment singleLine on SingleLineContent {
    text
  }
  
  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }
  
  fragment video on Video {
    id
    playlists
    title
    thumbnails {
      ...image
    }
  }
  
  fragment numeric on NumericContent {
    number
    unit
  }
  
  fragment componentChoice on ComponentChoiceContent {
    selectedComponent {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment contentChunk on ContentChunkContent {
    chunks {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  

`

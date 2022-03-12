import React from "react"
import { ProductTable } from "./product-table"

export const ProductTableContent = ({ data }) => {
  const components = data.components
  const properties = components?.find((c) => c.type === "propertiesTable")?.content?.sections

  return <ProductTable data={properties}></ProductTable>
}

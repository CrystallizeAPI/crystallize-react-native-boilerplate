// import { CRYSTALLIZE_TENANT_IDENTIFIER } from "env"

import { string } from "mobx-state-tree/dist/internal"

const CRYSTALLIZE_TENANT_IDENTIFIER = "furniture"

interface types {
  uri?: string
  query: string
  variables?: string
}

export async function simplyFetchFromGraph({
  uri = `https://api.crystallize.com/${CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`,
  query,
  variables,
}: types) {
  const body = JSON.stringify({ query, variables })

  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body,
  })

  if (!response.ok) {
    throw new Error(await response.text())
  }

  return response.json()
}

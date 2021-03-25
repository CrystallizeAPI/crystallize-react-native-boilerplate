import { SERVICE_API_URL } from "@env"

interface serviceAPIProps {
  uri?: string
  query: string
  variables?: any
}

export default async function serviceApi({
  uri = SERVICE_API_URL,
  query,
  variables,
}: serviceAPIProps) {
  const body = JSON.stringify({ query, variables })

  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body,
  })

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const json = await response.json()

  if (json.errors) {
    console.error("Service API encountered an error", json.errors)
  }

  return json
}

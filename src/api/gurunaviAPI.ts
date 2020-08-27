const API_KEY = '7060418792615728d5ab9f6a719df4b5'

export type Shop = {
  rest: Rest[]
}
export type Rest = {
  id: string
  name: string
}

export async function getData<T>(parameter: string) {
  try {
    const res = await fetch(
      `https://api.gnavi.co.jp/RestSearchAPI/v3?keyid=${API_KEY}&name=${parameter}`
    )
    const data = (await res.json()) as T
    return data
  } catch (e) {
    throw new Error(e)
  }
}

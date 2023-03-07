import API from './api'

export interface LocalityResponse {
  latitude: number
  longitude: number
}

export async function getLocality(route: string): Promise<LocalityResponse> {
  try {
    const { data } = await API.get<LocalityResponse>(`monitor/location/${route}`)
    console.debug(data)
    if(data.latitude == 0){}
    return {
      latitude: data.latitude,
      longitude: data.longitude,
    }
  } catch (error) {
    console.error(error)
    return {
      latitude: 0,
      longitude: 0
    }
  }

}

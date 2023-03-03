import API from './api'

export interface LocalityResponse {
  latitude: number
  longitude: number
}

export async function getLocality(): Promise<LocalityResponse> {
  try {
    const {data} = await API.get(`monitor/location/route_code`)
    return {
      latitude: data.latitude,
      longitude: data.longitude,
    }
  } catch (error) {
    console.error(error)
  }
  return {
    latitude: 0,
    longitude: 0
  }
}

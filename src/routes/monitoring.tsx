import React, { useEffect, useState } from 'react'
import { useSubscription } from '@apollo/client'
import { MapContainer, TileLayer } from 'react-leaflet'
import ReactLeafletDriftMarker from 'react-leaflet-drift-marker'
import { TCourierLocation } from '@/types'
import { COURIERS_LOCATIONS } from '@/graphql/subscriptions'

type TMapInitials = {
  center: [number, number]
  zoom?: number
}

interface IMonitoring {
  couriersLocations?: TCourierLocation[]
}

export const Monitoring: React.FC<IMonitoring> = () => {
  const { data } = useSubscription<{ locationAdded: TCourierLocation[] }>(
    COURIERS_LOCATIONS
  )
  const [mapInitials, setMapInitials] = useState<TMapInitials | null>(null)

  useEffect(() => {
    setMapInitials({ center: [46.3078, 44.2558], zoom: 14 })
  }, [])

  useEffect(() => {
    console.log('data >>>', data)
  }, [data])

  return (
    mapInitials && (
      <MapContainer
        {...mapInitials}
        style={{ height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.locationAdded &&
          data?.locationAdded.map(({ sessionId, longitude, latitude }) => (
            <ReactLeafletDriftMarker
              key={sessionId}
              position={[longitude, latitude]}
              duration={500}
            />
          ))}
      </MapContainer>
    )
  )
}

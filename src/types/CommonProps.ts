import React from "react"

export interface CommonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface CommonChilden {
  children: React.ReactNode
}

export interface StyleProps {
  className?: string
  style?: React.CSSProperties
}

export interface ImageObject {
  src: string
  width: number
  height: number
  objectFit?: 'cover' | 'contain'
}
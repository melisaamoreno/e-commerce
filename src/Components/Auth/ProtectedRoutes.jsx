import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const user = true

  if (!user) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

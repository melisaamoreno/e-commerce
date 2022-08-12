import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const user = false

  if (!user) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

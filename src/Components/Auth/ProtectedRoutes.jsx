import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.auth)

  if (!user) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

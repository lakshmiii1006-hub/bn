// src/hooks/useTestimonials.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${API_URL}/testimonials`)
      // Only show APPROVED testimonials
      const approved = data.filter(t => t.isApproved)
      setTestimonials(approved)
    } catch (err) {
      console.error('Fetch error:', err)
      setError('Failed to load testimonials')
    } finally {
      setLoading(false)
    }
  }

  const submitTestimonial = async (formData) => {
    try {
      await axios.post(`${API_URL}/testimonials`, formData)
      fetchTestimonials() // Refresh
      return { success: true }
    } catch (err) {
      return { success: false, error: err.response?.data?.message || 'Submission failed' }
    }
  }

  return { testimonials, loading, error, submitTestimonial, refetch: fetchTestimonials }
}

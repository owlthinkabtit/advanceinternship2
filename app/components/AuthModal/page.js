'use client'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase"
import { useAuth } from "@/context/AuthContext"
import '@/app/authModal.css'

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      setShowAuthModal(false)
      setEmail('')
      setPassword('')
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGuestLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, 'guest@gmail.com', 'guest123')
      setShowAuthModal(false)
    } catch (err) {
      setError(err.message)
    }
  }

  if (!showAuthModal) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={() => setShowAuthModal(false)}>
          ✕
        </button>

        <h2>{isRegistering ? 'Register' : 'Login'}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        <button className="toggle-mode" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>

        <button className="guest-button" onClick={handleGuestLogin}>
          Continue as Guest
        </button>
      </div>
    </div>
  )
}
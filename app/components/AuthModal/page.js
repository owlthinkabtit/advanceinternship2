'use client'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase"
import { useAuth } from "@/context/AuthContext"
import '@/app/authModal.css'
import { FcGoogle } from "react-icons/fc";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      setShowAuthModal(false)
    } catch (err) {
      setError(err.message)
    }
  }

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
    <div className="auth-modal">
      <h2 className="auth-title">Log in to Summarist</h2>

      <button className="guest-btn">
        <span>👤</span> Login as a Guest
      </button>

      <div className="auth-divider">or</div>

      <button className="google-btn">
        <FcGoogle /> Login with Google
      </button>

      <div className="auth-divider">or</div>

      <input type="email" placeholder="Email Address" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />

      <button className="login-btn">Login</button>

      <a href="#" className="forgot-link">Forgot your password?</a>
      <p className="switch-mode">
        Don’t have an account? <a href="#">Register</a>
      </p>
    </div>

  )
}
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// =====================
// Auth State — update nav on every page
// =====================
onAuthStateChanged(auth, (user) => {
  const navRight = document.querySelector(".nav-right");
  if (!navRight) return;

  if (user) {
    const displayName = user.displayName || user.email.split("@")[0];
    navRight.innerHTML = `
      <span class="nav-user">Hi, ${displayName}</span>
      <button class="btn-signin" id="signout-btn">Sign Out</button>
    `;
    document.getElementById("signout-btn").addEventListener("click", handleSignOut);
  } else {
    navRight.innerHTML = `<a href="login.html" class="btn-signin">Sign In</a>`;
  }
});

// =====================
// Sign Up
// =====================
export async function handleSignUp(name, email, password) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName: name });
  return credential.user;
}

// =====================
// Sign In
// =====================
export async function handleSignIn(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

// =====================
// Sign Out
// =====================
export async function handleSignOut() {
  await signOut(auth);
  window.location.href = "index.html";
}

// =====================
// Password Reset
// =====================
export async function handlePasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to:", email);
  } catch (err) {
    console.error("Password reset error:", err.code, err.message);
    throw err;
  }
}

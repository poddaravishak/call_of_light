"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { KeyRound, Mail, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import Link from "next/link";

// Validation Schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the quiet guidelines." }),
  }),
});

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors, isSubmitting: isLoginSubmitting },
    reset: resetLoginForm,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors, isSubmitting: isSignupSubmitting },
    reset: resetSignupForm,
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const onLoginSubmit = async (data: LoginValues) => {
    // Simulated auth flow
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccessMsg("Welcome back to your sanctuary. Logging you in...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const onSignupSubmit = async (data: SignupValues) => {
    // Simulated signup flow
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccessMsg("Your patron account is created. Welcome to the Light.");
    setTimeout(() => {
      setIsLogin(true);
      setSuccessMsg("");
      resetLoginForm();
    }, 2000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setSuccessMsg("");
    resetLoginForm();
    resetSignupForm();
  };

  return (
    <section className="min-h-screen bg-[#F8F5F0] pt-24 sm:pt-32 flex items-center justify-center px-4 sm:px-6 pb-16">
      <div className="max-w-4xl w-full bg-white border border-[#E5E0D8] shadow-[0_20px_50px_rgba(28,28,28,0.06)] grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[550px]">
        
        {/* Left Side: Interactive Forms Panel */}
        <div className="p-8 sm:p-12 flex flex-col justify-between relative bg-white">
          <div>
            {/* Mode Switcher */}
            <div className="flex items-center gap-6 border-b border-[#E5E0D8] pb-4 mb-8">
              <button
                onClick={() => !isLogin && toggleMode()}
                className={`font-mono-ui text-[11px] tracking-[0.2em] uppercase font-semibold pb-1.5 transition-colors relative cursor-pointer ${
                  isLogin ? "text-[#1C1C1C]" : "text-[#4A4A4A]/50 hover:text-[#1C1C1C]"
                }`}
              >
                Sign In
                {isLogin && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A017]"
                  />
                )}
              </button>

              <button
                onClick={() => isLogin && toggleMode()}
                className={`font-mono-ui text-[11px] tracking-[0.2em] uppercase font-semibold pb-1.5 transition-colors relative cursor-pointer ${
                  !isLogin ? "text-[#1C1C1C]" : "text-[#4A4A4A]/50 hover:text-[#1C1C1C]"
                }`}
              >
                Sign Up
                {!isLogin && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A017]"
                  />
                )}
              </button>
            </div>

            {/* Success notification banner */}
            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#f2ede4] border border-[#D4A017] text-xs font-serif text-[#1C1C1C] flex items-center gap-3 italic"
              >
                <CheckCircle size={16} className="text-[#D4A017] shrink-0" />
                <span>{successMsg}</span>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {isLogin ? (
                /* LOGIN FORM */
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLoginSubmit(onLoginSubmit)}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h2 className="font-display italic text-2xl text-[#1C1C1C] font-normal">
                      Welcome back, Reader
                    </h2>
                    <p className="text-[12px] font-serif text-[#4A4A4A] italic">
                      Enter the sanctuary to resume your quiet reading.
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 relative">
                    <label className="font-mono-ui text-[9px] text-[#4A4A4A]/70 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...registerLogin("email")}
                        className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none pl-10 pr-4 py-2.5 text-sm text-[#1C1C1C] transition-all font-sans"
                      />
                      <Mail size={14} className="absolute left-3.5 top-3.5 text-[#4A4A4A]/40" />
                    </div>
                    {loginErrors.email && (
                      <p className="text-[10px] text-red-500 font-mono-ui">{loginErrors.email.message}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5 relative">
                    <div className="flex justify-between items-center">
                      <label className="font-mono-ui text-[9px] text-[#4A4A4A]/70 uppercase tracking-widest block">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Restoring credentials silently...")}
                        className="font-mono-ui text-[9px] text-[#D4A017] hover:underline uppercase tracking-wider"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...registerLogin("password")}
                        className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none pl-10 pr-10 py-2.5 text-sm text-[#1C1C1C] transition-all font-sans"
                      />
                      <KeyRound size={14} className="absolute left-3.5 top-3.5 text-[#4A4A4A]/40" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-[#4A4A4A]/40 hover:text-[#1C1C1C] transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {loginErrors.password && (
                      <p className="text-[10px] text-red-500 font-mono-ui">{loginErrors.password.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoginSubmitting}
                    className="w-full bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase py-3.5 transition-colors cursor-pointer disabled:opacity-50 mt-4"
                  >
                    {isLoginSubmitting ? "Entering..." : "Enter Sanctuary"}
                  </button>
                </motion.form>
              ) : (
                /* SIGNUP FORM */
                <motion.form
                  key="signup"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSignupSubmit(onSignupSubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <h2 className="font-display italic text-2xl text-[#1C1C1C] font-normal">
                      Become a Patron
                    </h2>
                    <p className="text-[12px] font-serif text-[#4A4A4A] italic">
                      Support slower literature and printable photopoetry.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5 relative">
                    <label className="font-mono-ui text-[9px] text-[#4A4A4A]/70 uppercase tracking-widest block">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...registerSignup("name")}
                        className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none pl-10 pr-4 py-2 text-sm text-[#1C1C1C] transition-all font-sans"
                      />
                      <User size={14} className="absolute left-3.5 top-3 text-[#4A4A4A]/40" />
                    </div>
                    {signupErrors.name && (
                      <p className="text-[10px] text-red-500 font-mono-ui">{signupErrors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 relative">
                    <label className="font-mono-ui text-[9px] text-[#4A4A4A]/70 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...registerSignup("email")}
                        className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none pl-10 pr-4 py-2 text-sm text-[#1C1C1C] transition-all font-sans"
                      />
                      <Mail size={14} className="absolute left-3.5 top-3 text-[#4A4A4A]/40" />
                    </div>
                    {signupErrors.email && (
                      <p className="text-[10px] text-red-500 font-mono-ui">{signupErrors.email.message}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5 relative">
                    <label className="font-mono-ui text-[9px] text-[#4A4A4A]/70 uppercase tracking-widest block">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...registerSignup("password")}
                        className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none pl-10 pr-10 py-2 text-sm text-[#1C1C1C] transition-all font-sans"
                      />
                      <KeyRound size={14} className="absolute left-3.5 top-3 text-[#4A4A4A]/40" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-[#4A4A4A]/40 hover:text-[#1C1C1C] transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {signupErrors.password && (
                      <p className="text-[10px] text-red-500 font-mono-ui">{signupErrors.password.message}</p>
                    )}
                  </div>

                  {/* Guideline Agreement */}
                  <div className="flex items-start gap-2 pt-1.5">
                    <input
                      type="checkbox"
                      id="agree"
                      {...registerSignup("agree")}
                      className="mt-0.5 border-[#E5E0D8] accent-[#D4A017] rounded cursor-pointer"
                    />
                    <label htmlFor="agree" className="text-[11px] text-[#4A4A4A] leading-relaxed cursor-pointer select-none">
                      I agree to the quiet journal guidelines, promising to read slowly and engage in peaceful discussions.
                    </label>
                  </div>
                  {signupErrors.agree && (
                    <p className="text-[10px] text-red-500 font-mono-ui">{signupErrors.agree.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSignupSubmitting}
                    className="w-full bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase py-3.5 transition-colors cursor-pointer disabled:opacity-50 mt-4"
                  >
                    {isSignupSubmitting ? "Registering..." : "Become Patron"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-4 border-t border-[#E5E0D8] text-center">
            <Link
              href="/"
              className="font-mono-ui text-[9px] text-[#4A4A4A]/60 hover:text-[#D4A017] uppercase tracking-[0.25em] transition-colors"
            >
              ← Return Home
            </Link>
          </div>
        </div>

        {/* Right Side: Contemplative Visual & Literary Panel */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-[#1C1C1C] text-[#F8F5F0] relative overflow-hidden">
          {/* Subtle parallax ambient background overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 filter grayscale sepia-[15%]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1000&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono-ui text-[9px] text-[#D4A017] tracking-[0.3em] uppercase block mb-1">
              Devotions
            </span>
            <span className="font-display uppercase tracking-[0.2em] text-[15px] font-semibold text-[#F8F5F0]">
              The Call of Light
            </span>
          </div>

          <div className="relative z-10 space-y-6">
            <span className="text-[#D4A017] text-2xl font-mono-ui">✦</span>
            
            <blockquote className="font-display italic text-2xl sm:text-3xl text-[#F8F5F0] leading-relaxed select-none">
              “A quiet space is not built in haste. We write to remember, we read to pause.”
            </blockquote>
            
            <p className="font-serif text-sm text-[#E5E0D8]/80 leading-relaxed italic">
              Join a dedicated group of readers who explore visual poems, slow philosophical reflections, and domestic journals in peace.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono-ui text-[#E5E0D8]/50 tracking-widest uppercase">
            <span>Volume I</span>
            <span>Issue 01</span>
          </div>
        </div>

      </div>
    </section>
  );
}

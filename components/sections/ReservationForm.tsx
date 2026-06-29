"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { rooms } from "@/lib/data";
import GoldDivider from "@/components/ui/GoldDivider";

interface FormState {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  requests: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  requests: "",
};

const fieldClasses =
  "w-full border border-charcoal/20 bg-white px-4 py-3 font-inter text-sm text-charcoal transition-colors duration-300 placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus-visible:outline-none";
const labelClasses =
  "mb-2 block font-inter text-xs uppercase tracking-widest text-charcoal/70";

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    if (!values.checkIn) next.checkIn = "Select a check-in date.";
    if (!values.checkOut) {
      next.checkOut = "Select a check-out date.";
    } else if (values.checkIn && values.checkOut <= values.checkIn) {
      next.checkOut = "Check-out must be after check-in.";
    }
    if (!values.roomType) next.roomType = "Please choose a room type.";
    return next;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center border-2 border-gold bg-white px-8 py-16 text-center"
        role="status"
      >
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold"
          aria-hidden="true"
        >
          ✓
        </span>
        <h3 className="mt-6 font-cormorant text-3xl font-light text-charcoal">
          Thank You, {form.name.split(" ")[0]}
        </h3>
        <GoldDivider className="my-5" width="w-16" />
        <p className="max-w-md font-inter text-sm font-light leading-relaxed text-charcoal/70">
          Your enquiry has been received. A member of our reservations team will
          be in touch within 24 hours to confirm the details of your stay.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 font-inter text-xs uppercase tracking-widest text-gold underline-offset-4 hover:underline"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
          className={fieldClasses}
          placeholder="Eleanor Whitfield"
        />
        {errors.name && <p className="mt-1.5 font-inter text-xs text-rose">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={fieldClasses}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 font-inter text-xs text-rose">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            className={fieldClasses}
            placeholder="+39 089 555 0142"
          />
          {errors.phone && (
            <p className="mt-1.5 font-inter text-xs text-rose">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className={labelClasses}>
            Check-in
          </label>
          <input
            id="checkIn"
            type="date"
            value={form.checkIn}
            onChange={(e) => update("checkIn", e.target.value)}
            aria-invalid={!!errors.checkIn}
            className={fieldClasses}
          />
          {errors.checkIn && (
            <p className="mt-1.5 font-inter text-xs text-rose">{errors.checkIn}</p>
          )}
        </div>
        <div>
          <label htmlFor="checkOut" className={labelClasses}>
            Check-out
          </label>
          <input
            id="checkOut"
            type="date"
            value={form.checkOut}
            onChange={(e) => update("checkOut", e.target.value)}
            aria-invalid={!!errors.checkOut}
            className={fieldClasses}
          />
          {errors.checkOut && (
            <p className="mt-1.5 font-inter text-xs text-rose">{errors.checkOut}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="roomType" className={labelClasses}>
          Room Type
        </label>
        <select
          id="roomType"
          value={form.roomType}
          onChange={(e) => update("roomType", e.target.value)}
          aria-invalid={!!errors.roomType}
          className={fieldClasses}
        >
          <option value="" disabled>
            Select a room or suite
          </option>
          {rooms.map((r) => (
            <option key={r.slug} value={r.name}>
              {r.name} — from ${r.price}/night
            </option>
          ))}
        </select>
        {errors.roomType && (
          <p className="mt-1.5 font-inter text-xs text-rose">{errors.roomType}</p>
        )}
      </div>

      <div>
        <label htmlFor="requests" className={labelClasses}>
          Special Requests
        </label>
        <textarea
          id="requests"
          rows={4}
          value={form.requests}
          onChange={(e) => update("requests", e.target.value)}
          className={`${fieldClasses} resize-none`}
          placeholder="Anniversary celebration, dietary preferences, airport transfer…"
        />
      </div>

      <button
        type="submit"
        className="w-full border border-gold bg-gold px-8 py-4 font-inter text-sm uppercase tracking-widest text-white transition-colors duration-500 ease-smooth hover:bg-transparent hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Request Reservation
      </button>
    </form>
  );
}

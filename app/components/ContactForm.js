"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { Send } from "lucide-react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/send-email", data);

      if (res.data.success) {
        toast.success("✅ Thanks! Your message has been sent successfully.");

        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <h3 className="mb-8 text-2xl font-bold text-white">Send Me a Message</h3>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            placeholder="First Name"
            className="w-full rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-teal-400"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("lastName", {
              required: "Last name is required",
            })}
            placeholder="Last Name"
            className="w-full rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-teal-400"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <input
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-teal-400"
        />
      </div>

      <div className="mt-5">
        <input
          {...register("subject", {
            required: "Subject is required",
          })}
          placeholder="Subject"
          className="w-full rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-teal-400"
        />
      </div>

      <div className="mt-5">
        <textarea
          {...register("message", {
            required: "Message is required",
          })}
          rows={6}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-teal-400"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 disabled:opacity-50"
      >
        <Send size={18} />

        {isSubmitting ? "Sending Message..." : "Send Message"}
      </button>

      <p className="mt-5 text-center text-sm text-slate-400">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}

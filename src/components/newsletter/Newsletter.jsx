"use client";

import { useMemo, useState } from "react";
import ActionBtn from "../ui/buttons/ActionBtn";

const INITIAL_VALUES = {
  email: "",
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email er påkrævet.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Indtast en gyldig emailadresse, fx navn@email.com.";
  }

  return errors;
}

export default function Newsletter() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }

    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState("error");
      return;
    }

    setErrors({});
    setSubmitState("success");
    setValues(INITIAL_VALUES);
  };

  const baseFieldClass =
    "w-full rounded-xl bg-secondary px-4 py-3 text-primary font-sans placeholder:text-primary/70 outline-none ring-1 ring-transparent transition focus:ring-primary";

  return (
    <section className="w-full max-w-80 p-4 md:p-6">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="text-center">
          <h2 className="text-secondary text-2xl font-semibold">Nyhedsbrev</h2>
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-secondary mb-2 block text-base"
          >
            <span className="text-red-600">*</span> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="fx. loremdaipsum@gmail.com"
            value={values.email}
            onChange={handleChange}
            className={`${baseFieldClass} ${errors.email ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "newsletter-email-error" : undefined
            }
          />
          {errors.email && (
            <p
              id="newsletter-email-error"
              className="text-primary mt-1 text-sm"
            >
              {errors.email}
            </p>
          )}
        </div>

        {submitState === "error" && hasErrors && (
          <div
            role="alert"
            aria-live="polite"
            className="text-light rounded-xl bg-red-500 px-4 py-3"
          >
            Der er fejl i formularen. Gennemgå feltet markeret med fejl og prøv
            igen.
          </div>
        )}

        {submitState === "success" && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-xl bg-green-100 px-4 py-3 text-green-900"
          >
            Tak for din tilmelding. Du er nu på nyhedsbrevet.
          </div>
        )}

        <div className="flex justify-center">
          <ActionBtn type="submit" btnSize="medium">
            Lorem
          </ActionBtn>
        </div>
      </form>
    </section>
  );
}

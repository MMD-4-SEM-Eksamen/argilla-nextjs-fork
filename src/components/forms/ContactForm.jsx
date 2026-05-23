"use client";

import { useMemo, useState } from "react";
import ActionBtn from "../ui/buttons/ActionBtn";

const TOPIC_OPTIONS = [
  { value: "", label: "Vælg Emne" },
  { value: "support", label: "Support" },
  { value: "sales", label: "Salg" },
  { value: "partnership", label: "Samarbejde" },
  { value: "other", label: "Andet" },
];

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  cvrOrRole: "",
  topic: "",
  message: "",
};

const REQUIRED_LABELS = {
  firstName: "Fornavn",
  lastName: "Efternavn",
  email: "Email",
  phone: "Telefon Nr",
  topic: "Vælg Emne",
  message: "Indtast Besked",
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[+\d()\-\s]{8,}$/.test(phone);
}

function validateForm(values) {
  const errors = {};

  Object.entries(REQUIRED_LABELS).forEach(([key, label]) => {
    if (!values[key].trim()) {
      errors[key] = `${label} er påkrævet.`;
    }
  });

  if (values.email && !isValidEmail(values.email)) {
    errors.email = "Indtast en gyldig emailadresse, fx navn@email.com.";
  }

  if (values.phone && !isValidPhone(values.phone)) {
    errors.phone = "Indtast et gyldigt telefonnummer med mindst 8 tegn.";
  }

  if (values.message.trim() && values.message.trim().length < 10) {
    errors.message =
      "Din besked skal være mindst 10 tegn, så vi kan hjælpe dig bedre.";
  }

  return errors;
}

export default function ContactForm() {
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

    // Placeholder submit flow until API endpoint is connected.
    setValues(INITIAL_VALUES);
  };

  const baseFieldClass =
    "w-full rounded-xl bg-secondary px-4 py-3 text-primary font-sans placeholder:text-primary/70 outline-none ring-1 ring-transparent transition focus:ring-primary";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-light w-full max-w-230 p-3 md:p-4"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="text-dark mb-2 block text-[1rem]"
          >
            <span className="text-primary">*</span> Fornavn
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="fx. Lorem"
            value={values.firstName}
            onChange={handleChange}
            className={`${baseFieldClass} ${errors.firstName ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-primary mt-1 text-sm">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="text-dark mb-2 block text-[1rem]"
          >
            <span className="text-primary">*</span> Efternavn
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="fx. Ipsum"
            value={values.lastName}
            onChange={handleChange}
            className={`${baseFieldClass} ${errors.lastName ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-primary mt-1 text-sm">
              {errors.lastName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-dark mb-2 block text-[1rem]">
            <span className="text-primary">*</span> Email
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
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-primary mt-1 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-dark mb-2 block text-[1rem]">
            <span className="text-primary">*</span> Telefon Nr
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="fx. +420691337"
            value={values.phone}
            onChange={handleChange}
            className={`${baseFieldClass} ${errors.phone ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-primary mt-1 text-sm">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="text-dark mb-2 block text-[1rem]"
          >
            Firma Navn
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            placeholder="fx. McLorem & Co"
            value={values.companyName}
            onChange={handleChange}
            className={baseFieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="cvrOrRole"
            className="text-dark mb-2 block text-[1rem]"
          >
            CVR Nr / Stilling
          </label>
          <input
            id="cvrOrRole"
            name="cvrOrRole"
            type="text"
            placeholder="fx. 42069 / Da Baus"
            value={values.cvrOrRole}
            onChange={handleChange}
            className={baseFieldClass}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="topic" className="text-dark mb-2 block text-[1rem]">
            <span className="text-primary">*</span> Vælg Emne
          </label>
          <select
            id="topic"
            name="topic"
            value={values.topic}
            onChange={handleChange}
            className={`${baseFieldClass} ${errors.topic ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "topic-error" : undefined}
          >
            {TOPIC_OPTIONS.map((option) => (
              <option
                key={option.value || "default-topic"}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p id="topic-error" className="text-primary mt-1 text-sm">
              {errors.topic}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-dark mb-2 block text-[1rem]">
            <span className="text-primary">*</span> Indtast Besked
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="Indsæt dit besked her ..."
            value={values.message}
            onChange={handleChange}
            className={`${baseFieldClass} min-h-55 resize-y ${errors.message ? "ring-primary ring-2" : ""}`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-primary mt-1 text-sm">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {submitState === "error" && hasErrors && (
        <div
          role="alert"
          aria-live="polite"
          className="text-light mt-4 rounded-xl bg-red-500 px-4 py-3"
        >
          Der er fejl i formularen. Gennemgå felterne markeret med fejl og prøv
          igen.
        </div>
      )}

      {submitState === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="bg-dark text-secondary mt-4 rounded-xl px-4 py-3"
        >
          Tak for din besked. Vi vender tilbage hurtigst muligt.
        </div>
      )}

      <ActionBtn
        type="submit"
        themeVariant="secondary"
        initSize="medium"
        btnClass="mt-4"
      >
        Send Besked
      </ActionBtn>
    </form>
  );
}

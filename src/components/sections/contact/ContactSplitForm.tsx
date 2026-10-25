"use client";

import { useState } from "react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ParallaxImage from "@/components/animation/ParallaxImage";
import WordByWordReveal from "@/components/animation/WordByWordReveal";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type TextareaField = {
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

type ContactSplitFormProps = {
  tag: string;
  title: string;
  description?: string;
  inputs: InputField[];
  textarea?: TextareaField;
  buttonText: string;
  onSubmit?: (data: Record<string, string>) => void;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ContactSplitForm = ({
  tag,
  title,
  description,
  inputs,
  textarea,
  buttonText,
  onSubmit,
  imageSrc,
  videoSrc,
  textAnimation,
}: ContactSplitFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputs.forEach((input) => {
      initial[input.name] = "";
    });
    if (textarea) {
      initial[textarea.name] = "";
    }
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      onSubmit?.(formData);
      const reset: Record<string, string> = {};
      inputs.forEach((input) => {
        reset[input.name] = "";
      });
      if (textarea) {
        reset[textarea.name] = "";
      }
      setFormData(reset);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative h-72 md:h-auto card rounded overflow-hidden order-first">
            <ParallaxImage src={imageSrc} videoSrc={videoSrc} className="rounded" />
          </div>

          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2 text-left">
                <AppearOnScroll variant="fade">
                  <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                    <p>{tag}</p>
                  </div>
                </AppearOnScroll>

                <WordByWordReveal
                  text={title}
                  variant={textAnimation}
                  tag="h2"
                  className="text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-balance"
                />

                {description && (
                  <WordByWordReveal
                    text={description}
                    variant={textAnimation}
                    tag="p"
                    className="text-base md:text-lg 2xl:text-xl leading-snug text-balance text-muted-foreground"
                  />
                )}
              </div>

              <div className="flex flex-col gap-3">
                {inputs.map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                    required={input.required}
                    aria-label={input.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded"
                  />
                ))}

                {textarea && (
                  <textarea
                    placeholder={textarea.placeholder}
                    value={formData[textarea.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [textarea.name]: e.target.value })}
                    required={textarea.required}
                    rows={textarea.rows || 5}
                    aria-label={textarea.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none resize-none card rounded"
                  />
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center w-full h-10 px-6 text-sm btn-primary bg-primary text-primary-foreground rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : buttonText}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
              </div>
            </form>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default ContactSplitForm;

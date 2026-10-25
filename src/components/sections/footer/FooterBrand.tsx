"use client";

import { ChevronRight } from "lucide-react";
import AutoFillText from "@/components/animation/AutoFillText";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type FooterColumn = {
  items: FooterLink[];
};

const FooterLinkItem = ({ label, href, onClick }: FooterLink) => {
  return (
    <div className="flex items-center gap-2 text-base">
      <ChevronRight className="size-4" strokeWidth={3} aria-hidden="true" />
      <a
        href={href}
        onClick={onClick}
        className="text-base text-primary-foreground font-semibold hover:opacity-75 transition-opacity cursor-pointer"
      >
        {label}
      </a>
    </div>
  );
};

const FooterBrand = ({
  brand,
  columns,
}: {
  brand: string;
  columns: FooterColumn[];
}) => {
  return (
    <footer
      data-section="footer"
      aria-label="Site footer"
      className="w-full py-15 mt-20 rounded-t-lg overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-10 md:gap-20">
        <AutoFillText className="font-semibold">{brand}</AutoFillText>

        <div
          className={cn(
            "flex flex-col gap-8 mb-10 md:flex-row",
            columns.length === 1 ? "md:justify-center" : "md:justify-between"
          )}
        >
          {columns.map((column, index) => (
            <AppearOnScroll key={index} variant="slide-up" delay={index * 0.08}>
              <div className="flex flex-col items-start gap-3">
                {column.items.map((item) => (
                  <FooterLinkItem key={item.label} label={item.label} href={item.href} onClick={item.onClick} />
                ))}
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterBrand;

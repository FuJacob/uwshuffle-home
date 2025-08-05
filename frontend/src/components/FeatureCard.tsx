import React from "react";
import Image from "next/image";
import { Feature } from "@/constants/features";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  if (index % 2 !== 0) {
    return (
      <article className="flex flex-col lg:flex-row items-center justify-center w-full mb-8 sm:mb-16 p-4 sm:p-8 gap-6 lg:gap-0">
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-full lg:w-3/5 h-auto rounded-xl order-1 lg:order-none"
          style={{ borderRadius: "var(--radius-lg)" }}
        />
        <div className="flex flex-col w-full lg:w-2/5 px-4 lg:px-8 text-center lg:text-left hover:-translate-y-2 transition-transform duration-300 order-2 lg:order-none">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="flex flex-col lg:flex-row items-center justify-center w-full mb-8 sm:mb-16 p-4 sm:p-8 gap-6 lg:gap-0">
        <div className="flex flex-col w-full lg:w-2/5 px-4 lg:px-8 text-center lg:text-left hover:-translate-y-2 transition-transform duration-300 order-2 lg:order-1">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-full lg:w-3/5 h-auto rounded-xl order-1 lg:order-2"
          style={{ borderRadius: "var(--radius-lg)" }}
        />
      </article>
    );
  }
};
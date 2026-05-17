import {
  Globe2,
  Banknote,
  Cloud,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      label: "Global-ready",
      icon: Globe2,
      highlight: true,
    },
    {
      label: "Multi-currency setup",
      icon: Banknote,
    },
    {
      label: "Cloud based",
      icon: Cloud,
    },
    {
      label: "Secure access",
      icon: ShieldCheck,
    },
    {
      label: "Onboarding support",
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-slate-950 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-slate-800
                  bg-slate-900
                  px-4 py-2
                  text-xs
                  text-slate-300
                  transition
                  hover:border-emerald-500/40
                  hover:bg-slate-800
                  sm:text-sm
                "
              >
                <Icon
                  size={16}
                  className={
                    item.highlight ? "text-emerald-500" : "text-slate-400"
                  }
                />

                <span
                  className={
                    item.highlight ? "font-medium text-emerald-500" : ""
                  }
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import {
    MapPin,
    Banknote,
    Cloud,
    ShieldCheck,
    Headphones,
  } from "lucide-react";
  
  export default function TrustBar() {
    const items = [
      {
        label: "Built for Pakistan",
        icon: MapPin,
        highlight: true,
      },
      {
        label: "PKR Billing",
        icon: Banknote,
      },
      {
        label: "Cloud Based",
        icon: Cloud,
      },
      {
        label: "Secure & Encrypted",
        icon: ShieldCheck,
      },
      {
        label: "Local Support",
        icon: Headphones,
      },
    ];
  
    return (
      <section className="bg-slate-950 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {items.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-slate-800
                    bg-slate-900
                    px-4 py-2
                    text-xs
                    text-slate-300
                    sm:text-sm
                    transition
                    hover:border-emerald-500/40
                    hover:bg-slate-800
                  "
                >
                  <Icon
                    size={16}
                    className={
                      item.highlight
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }
                  />
                  <span
                    className={
                      item.highlight
                        ? "text-emerald-500 font-medium"
                        : ""
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
  
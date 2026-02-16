const features = [
    {
      title: "Front Desk",
      desc: "Check-in, check-out, room changes and walk-ins with full audit control.",
    },
    {
      title: "Reservations",
      desc: "Company bookings, OTA, direct reservations and rate control.",
    },
    {
      title: "Housekeeping",
      desc: "Live room status tracking between FD and HK teams.",
    },
    {
      title: "Night Audit",
      desc: "Automatic business date control and revenue posting.",
    },
    {
      title: "Accounts & AR",
      desc: "Folio management, company ledger and outstanding tracking.",
    },
    {
      title: "Owner Dashboard",
      desc: "Live occupancy, ADR, RevPAR and financial insights.",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="px-6 py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Built for Real Hotel Operations
          </h2>
  
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-slate-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
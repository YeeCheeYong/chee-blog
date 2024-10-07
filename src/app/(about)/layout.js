import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Over 6 years of coding experience in C++ & Java",
    "Over 3 years in Python & JS",
    "20+ projects completed",
    "Active contributor in AI engineering space 👩‍💻",
    "Recipient of OC-ACM Awards for Excellence in Computing Sciences 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

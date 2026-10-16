import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-900 transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <img
        src="/logo.png"
        alt="Brilliantly Bright Laundry"
        className="w-28 h-auto object-contain mb-6"
      />
      <div className="w-48 h-1 bg-brand-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-400 rounded-full transition-all duration-[1800ms] ease-out"
          style={{ width: '100%' }}
        />
      </div>
      <p className="mt-4 text-brand-200 text-sm tracking-wide">Brilliantly Bright Laundry</p>
    </div>
  );
}

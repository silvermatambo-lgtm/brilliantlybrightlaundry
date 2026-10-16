import { useMemo, useState } from 'react';
import { MessageCircle, X, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

type Step = 'welcome' | 'name' | 'phone' | 'service' | 'message' | 'review';

const SERVICES = [
  'Laundry & Ironing',
  'Dry Cleaning – Suits & Gowns',
  'Alterations',
  'Shoe Repair',
  'Carpet Cleaning',
  'General Enquiry',
];
const WHATSAPP_NUMBER = '27725475041';
const BUSINESS_NAME = 'Brilliantly Bright Laundry';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState({ name: '', phone: '', service: '', message: '' });

  const canContinue = useMemo(() => {
    if (step === 'name') return data.name.trim().length > 1;
    if (step === 'phone') return data.phone.trim().length > 6;
    if (step === 'service') return !!data.service;
    if (step === 'message') return data.message.trim().length > 2;
    return true;
  }, [step, data]);

  const next = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.min(order.indexOf(step) + 1, order.length - 1)]);
  };
  const back = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.max(order.indexOf(step) - 1, 0)]);
  };
  const sendToWhatsApp = () => {
    const text = `Hi ${BUSINESS_NAME}, I would like assistance.%0A%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AService: ${encodeURIComponent(data.service)}%0AMessage: ${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
    setStep('welcome');
    setData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="fixed bottom-[76px] right-4 z-50 md:bottom-8">
      {open && (
        <div className="animate-chat-slide mb-3 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
          <div className="bg-gradient-to-r from-brand-600 to-teal-500 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Brilliantly Bright</p>
                <p className="text-white/80 text-xs">We reply quickly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-5 min-h-[280px] flex flex-col">
            {step === 'welcome' && (
              <div className="flex-1 flex flex-col justify-center text-center">
                <p className="text-stone-700 text-sm mb-4">
                  Hello! Need laundry, dry cleaning, alterations or carpet cleaning? Let’s get your details.
                </p>
                <button onClick={next} className="w-full py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-sm">
                  Start Chat
                </button>
              </div>
            )}

            {step === 'name' && (
              <div className="flex-1 flex flex-col">
                <p className="text-stone-700 text-sm mb-3 font-medium">What’s your name?</p>
                <input
                  autoFocus
                  className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Your name"
                />
                <div className="mt-auto flex gap-2">
                  <button onClick={back} className="px-4 py-2 text-stone-500 text-sm"><ArrowLeft size={16} /></button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-brand-600 disabled:opacity-40 text-white font-semibold rounded-xl text-sm">Continue</button>
                </div>
              </div>
            )}

            {step === 'phone' && (
              <div className="flex-1 flex flex-col">
                <p className="text-stone-700 text-sm mb-3 font-medium">Your phone number?</p>
                <input
                  autoFocus
                  className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  placeholder="e.g. 072 547 5041"
                />
                <div className="mt-auto flex gap-2">
                  <button onClick={back} className="px-4 py-2 text-stone-500 text-sm"><ArrowLeft size={16} /></button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-brand-600 disabled:opacity-40 text-white font-semibold rounded-xl text-sm">Continue</button>
                </div>
              </div>
            )}

            {step === 'service' && (
              <div className="flex-1 flex flex-col">
                <p className="text-stone-700 text-sm mb-3 font-medium">Which service do you need?</p>
                <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, service: s })}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm border transition-colors ${
                        data.service === s ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-stone-200 hover:border-brand-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="mt-auto flex gap-2">
                  <button onClick={back} className="px-4 py-2 text-stone-500 text-sm"><ArrowLeft size={16} /></button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-brand-600 disabled:opacity-40 text-white font-semibold rounded-xl text-sm">Continue</button>
                </div>
              </div>
            )}

            {step === 'message' && (
              <div className="flex-1 flex flex-col">
                <p className="text-stone-700 text-sm mb-3 font-medium">Any extra details?</p>
                <textarea
                  autoFocus
                  rows={4}
                  className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  placeholder="e.g. Collection needed, number of items..."
                />
                <div className="mt-auto flex gap-2">
                  <button onClick={back} className="px-4 py-2 text-stone-500 text-sm"><ArrowLeft size={16} /></button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-brand-600 disabled:opacity-40 text-white font-semibold rounded-xl text-sm">Continue</button>
                </div>
              </div>
            )}

            {step === 'review' && (
              <div className="flex-1 flex flex-col">
                <p className="text-stone-700 text-sm mb-3 font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" /> Review your message
                </p>
                <div className="bg-stone-50 rounded-xl p-4 text-sm space-y-1 mb-4">
                  <p><span className="text-stone-500">Name:</span> {data.name}</p>
                  <p><span className="text-stone-500">Phone:</span> {data.phone}</p>
                  <p><span className="text-stone-500">Service:</span> {data.service}</p>
                  <p><span className="text-stone-500">Message:</span> {data.message}</p>
                </div>
                <div className="mt-auto flex gap-2">
                  <button onClick={back} className="px-4 py-2 text-stone-500 text-sm"><ArrowLeft size={16} /></button>
                  <button onClick={sendToWhatsApp} className="flex-1 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2">
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

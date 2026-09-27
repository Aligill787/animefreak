import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { CartItem, Product, PageRoute } from '../types';
import { siteConfig } from '../config/siteConfig';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% estimated digital tax
  const total = subtotal + tax;

  const handleStartCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleCompleteSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutEmail || !checkoutEmail.includes('@')) return;

    const generatedId = `AF-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderComplete(true);
    onClearCart();
  };

  const handleCloseAll = () => {
    setIsCheckingOut(false);
    setOrderComplete(false);
    setCheckoutEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={handleCloseAll}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a0c14] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-purple-400" />
              <h2 className="font-display text-lg font-bold text-white">
                Your Digital Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={handleCloseAll}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              /* Order Success & Secure Download Information */
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Order #{orderId} Confirmed
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                  A receipt and your secure, time-limited digital download links have been dispatched to <strong>{checkoutEmail}</strong>.
                </p>

                {/* Digital Download Security Architecture Note */}
                <div className="p-4 rounded-xl border border-white/8 bg-white/5 text-left text-xs space-y-2 mt-4">
                  <div className="flex items-center gap-1.5 font-semibold text-purple-300">
                    <Download className="h-3.5 w-3.5 text-purple-400" />
                    <span>Secure Download Architecture</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Direct storage URLs are never exposed. Downloads are delivered via cryptographically signed temporary tokens that expire after 48 hours or 5 downloads to prevent unauthorized hotlinking.
                  </p>
                </div>

                <button
                  onClick={handleCloseAll}
                  className="w-full mt-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Payment Provider Integration Layer */
              <div className="space-y-4 animate-fadeIn">
                <div className="p-3.5 rounded-xl border border-purple-500/30 bg-purple-950/20 text-xs text-purple-200">
                  <strong>Production Payment Gateway Layer:</strong> Configured for <code>{siteConfig.paymentProvider}</code> (Stripe / PayPal sandbox). No real charges occur in this preview mode.
                </div>

                <form onSubmit={handleCompleteSimulatedCheckout} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Digital Delivery Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#06070a] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                    <p className="text-[11px] text-slate-500">
                      Download links and license keys are tied to this email.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Card Details (Simulated Test Mode)
                    </label>
                    <input
                      type="text"
                      disabled
                      value="•••• •••• •••• 4242  (Stripe Test Account)"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/5 bg-[#06070a]/60 text-xs font-mono text-slate-400 cursor-not-allowed"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/8 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-slate-200">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Digital VAT / Sales Tax</span>
                      <span className="font-mono text-slate-200">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold pt-1.5 border-t border-white/8 text-sm">
                      <span>Total</span>
                      <span className="font-mono text-purple-300">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="w-1/3 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all cursor-pointer"
                    >
                      Authorize & Download
                    </button>
                  </div>
                </form>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-500">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  Your cart is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Browse our digital manga volumes and creator art packs to begin your collection.
                </p>
                <button
                  onClick={() => {
                    handleCloseAll();
                    onNavigate({ type: 'shop' });
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 text-xs font-semibold transition-colors"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              /* Itemized Cart List */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3.5 p-3.5 rounded-xl border border-white/8 bg-white/5 hover:border-white/12 transition-colors"
                  >
                    <img
                      src={item.product.cover}
                      alt={item.product.title}
                      className="h-18 w-14 rounded-lg object-cover bg-black shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white leading-tight">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-0.5"
                            aria-label={`Remove ${item.product.title}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {item.product.format} · {item.product.fileSize}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-white/10 rounded-lg bg-black/40 overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-mono text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="font-mono text-sm font-bold text-purple-300">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!orderComplete && !isCheckingOut && cartItems.length > 0 && (
            <div className="p-6 border-t border-white/8 space-y-4 bg-[#08090e]">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-200">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Tax</span>
                  <span className="font-mono text-slate-200">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white font-bold pt-1.5 border-t border-white/8 text-sm">
                  <span>Order Total</span>
                  <span className="font-mono text-purple-300">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleStartCheckout}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Digital Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                <span>DRM-Free · High-Speed Cloud Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

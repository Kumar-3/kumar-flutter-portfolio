import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import React from "react";

interface SnackbarProps {
  status: "sent" | "error" | null;
  message: string;
}

const Snackbar: React.FC<SnackbarProps> = ({ status, message }) => {
  return (
    <AnimatePresence>
      {status && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl glass-card border shadow-2xl max-w-[90vw] sm:max-w-sm ${
            status === "sent" ? "border-teal-500/30" : "border-red-500/30"
          }`}
        >
          {status === "sent" ? (
            <CheckCircle2 className="text-teal-400 shrink-0" size={22} />
          ) : (
            <XCircle className="text-red-400 shrink-0" size={22} />
          )}
          <span className="text-sm font-medium text-white">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;

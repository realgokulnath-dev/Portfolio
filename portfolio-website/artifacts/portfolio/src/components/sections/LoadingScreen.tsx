import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary">
          GOKUL NATH S
        </h1>
        <p className="mt-4 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
          Initializing Portfolio...
        </p>

        <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-secondary">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </motion.div>
    </div>
  );
}

import { Suspense } from "react";
import { Quote } from "@/components/sections/Quote";

export default function QuotePage() {
  return (
    <div className="pt-20">
      <Suspense fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
        </div>
      }>
        <Quote />
      </Suspense>
    </div>
  );
}

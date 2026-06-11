import type { Metadata } from "next";
import { FabricCatalog } from "@/components/sections/FabricCatalog";

export const metadata: Metadata = {
  title: "Fabrics & Colors Catalog",
  description: "Explore our full Wintopia collection of premium Korean blinds fabrics — Combi, Blackout, Triple Shade, Sunscreen, Honeycomb, Wood Blinds, and more. Browse available colors and request a free quote.",
  keywords: [
    "korean blinds fabric catalog",
    "combi blinds philippines",
    "blackout blind fabric",
    "triple shade blinds",
    "sunscreen blinds",
    "honeycomb shade",
    "wood blinds",
    "wintopia blinds collection",
    "js lux blinds colors"
  ]
};

export default function FabricsPage() {
  return (
    <div className="pt-20">
      <FabricCatalog />
    </div>
  );
}

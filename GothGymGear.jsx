import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Goth Skull Hoodie",
    description: "Black oversized hoodie with white skull print.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1615887081263-520e4e3cf845?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://buy.stripe.com/test_gothskullhoodie"
  },
  {
    id: 2,
    name: "Heavy Metal Leggings",
    description: "Black compression leggings with gothic cross design.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1571900061924-2664f6d4f10a?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://buy.stripe.com/test_heavymetalleggings"
  },
  {
    id: 3,
    name: "Dark Mode Tank Top",
    description: "Muscle tank with 'Train in Darkness' graphic.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://buy.stripe.com/test_darkmodetank"
  },
];

export default function GothGymGear() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">🖤 GOTH GYM GEAR 🖤</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-gray-900">
            <CardContent className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-4">{product.price}</p>
              <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Buy Now
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

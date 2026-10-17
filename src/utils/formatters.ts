// Utility helper functions for TravelInOne

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
}

export function calculateFamilyDiscount(adults: number, children: number, basePrice: number): {
  subtotal: number;
  discount: number;
  discountPercent: number;
  total: number;
} {
  const totalPeople = adults + children;
  // Children pay 70% of base price
  const adultsTotal = adults * basePrice;
  const childrenTotal = children * (basePrice * 0.7);
  const subtotal = adultsTotal + childrenTotal;

  // 10% group discount for 4 or more people
  let discountPercent = 0;
  if (totalPeople >= 4) {
    discountPercent = 10;
  }

  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discount;

  return {
    subtotal,
    discount,
    discountPercent,
    total,
  };
}

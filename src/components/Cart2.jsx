import { useMemo, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function RightSideCheckoutRail({cart ,setshow }) {
  console.log(cart);
  if (!cart.length) return null;
  const [pin, setPin] = useState("");
  const [coupon, setCoupon] = useState("");
  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);
  console.log(subtotal);
  

  // example promo logic
  const discount = coupon.trim().toUpperCase() === "SAVE10" ? Math.round(subtotal * 0.10) : 0;
  const delivery = subtotal - discount >= 999 ? 0 : 49;
  const total = Math.max(0, subtotal - discount) + delivery;

  // free shipping progress (unlock at ₹999)
  const target = 999;
  const progress = Math.min(100, Math.round(((subtotal - discount) / target) * 100));
  const remaining = Math.max(0, target - (subtotal - discount));

  return (  //
    <aside className=" pt-5 lg:w-90 px-5 ">
      <div className=" bg-white lg:bg-[#AED6CF] lg:border-0 border rounded-xl relative lg:space-y-4">
        {/* Delivery/Pincode */}
        <div className="lg:bg-white rounded-xl lg:shadow  p-4">
      {/* <div className="lg:hidden absolute right-5 text-xl" onClick={()=>setshow(false)}><MdOutlineCancel/></div> */}
          <h3 className="font-semibold mb-2">Delivery</h3>
          <div className="flex">
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0,6))}
              placeholder="Enter Pincode"
              className="border rounded-l px-3 py-2 flex-1 outline-none"
            />
            <button className="bg-blue-500 text-white px-4 rounded-r">Check</button>
          </div>
          {pin.length === 6 && (
            <p className="text-sm text-green-600 mt-2">Est. delivery: 3–5 days</p>
          )}
        </div>

        {/* Free shipping progress */}
        <div className="lg:bg-white rounded-xl lg:shadow p-4">
          <p className="text-sm mb-2">
            {remaining > 0
              ? <>Add <span className="font-semibold">₹{remaining}</span> more for <span className="text-green-600 font-semibold">FREE delivery</span></>
              : <span className="text-green-600 font-semibold">You unlocked FREE delivery!</span>}
          </p>
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 rounded bg-green-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Coupon */}
        <div className="lg:bg-white rounded-xl lg:shadow p-4">
          <h3 className="font-semibold mb-2">Apply Coupon</h3>
          <div className="flex">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="e.g., SAVE10"
              className="border rounded-l px-3 py-2 flex-1 outline-none"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 rounded-r">
              Apply
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Try <span className="font-medium">SAVE10</span> for 10% off</p>
        </div>

        {/* Price Details */}
        <div className="lg:bg-white rounded-xl lg:shadow p-4">
          <h3 className="font-semibold mb-3">Price Details</h3>
          <Row label="Subtotal" value={`₹${subtotal}`} />
          <Row label="Discount" value={`-₹${discount}`} valueClass={discount ? "text-green-600" : ""} />
          <Row label="Delivery" value={delivery === 0 ? "Free" : `₹${delivery}`} valueClass={delivery === 0 ? "text-green-600" : ""} />
          <hr className="my-3" />
          <Row label={<span className="font-semibold text-lg">Total</span>} value={<span className="font-semibold text-lg">₹{total}</span>} />
          <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg">
            Proceed to Checkout
          </button>
        </div>

        {/* EMI + Trust */}
        <div className="lg:bg-white rounded-xl lg:shadow p-4">
          <ul className="space-y-2 text-sm">
            <li>💳 <b>No Cost EMI</b> available on select cards</li>
            <li>🔁 <b>7-day replacement</b> on eligible items</li>
            <li>🛡️ <b>Secure payments</b> via SSL</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

function Row({ label, value, valueClass = "" }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-600">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
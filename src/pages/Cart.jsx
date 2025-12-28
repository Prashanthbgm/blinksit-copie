import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../services/api";
import { calculateDistance } from "../utils/distance";
import SuccessAnimation from "../components/SuccessAnimation";
import { FaMapMarkerAlt } from "react-icons/fa";

const STORE = {
  name: "Blinkit Store – MG Road",
  lat: 12.9716,
  lng: 77.5946,
};

export default function Cart() {
  const { cart, increaseQty, decreaseQty, clearCart } =
    useContext(CartContext);

  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const deliveryCharge =
    distance !== null ? Math.ceil(distance) * 5 : 0;
  const handlingCharge = distance !== null ? 10 : 0;
  const grandTotal =
    cartTotal + deliveryCharge + handlingCharge;

  // 📍 Ask for location ONLY on click
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        const km = calculateDistance(
          userLat,
          userLng,
          STORE.lat,
          STORE.lng
        );

        setUserLocation({
          lat: userLat,
          lng: userLng,
        });
        setDistance(km);
      },
      () => alert("Location permission denied")
    );
  };

  const handleOrder = async () => {
    if (!userLocation) {
      alert("Please enable location");
      return;
    }

    if (!address) {
      alert("Please enter delivery address");
      return;
    }

    try {
      setLoading(true);

      await placeOrder({
        items: cart.map((i) => ({
          productId: i._id,
          name: i.name,
          price: i.price,
          qty: i.qty,
        })),
        cartTotal,
        deliveryCharge,
        handlingCharge,
        totalAmount: grandTotal,
        address,
        distance: distance.toFixed(2),
        store: STORE.name,
        paymentMode: "COD",
      });

      clearCart();
      setSuccess(true);
    } catch {
      alert("Order failed");
    } finally {
      setLoading(false);
    }
  };

  if (success) return <SuccessAnimation />;

  if (cart.length === 0)
    return (
      <div className="p-10 text-center text-lg">
        Your cart is empty 🛒
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* 📍 LOCATION CARD */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              Delivery Location
            </p>
            {userLocation ? (
              <>
                <p className="text-sm text-gray-600">
                  Distance: {distance.toFixed(2)} km
                </p>
                <p className="text-sm text-gray-600">
                  Store: {STORE.name}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Location not enabled
              </p>
            )}
          </div>

          <button
            onClick={handleGetLocation}
            className="border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-600 hover:text-white"
          >
            Enable Location
          </button>
        </div>
      </div>

      {/* CART ITEMS */}
      {cart.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center mb-3 bg-white p-3 rounded shadow"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => decreaseQty(item._id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item._id)}>+</button>
          </div>
        </div>
      ))}

      {/* PRICE BREAKDOWN */}
      {userLocation && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <p>Cart Total: ₹{cartTotal}</p>
          <p>Delivery Charge: ₹{deliveryCharge}</p>
          <p>Handling Charge: ₹{handlingCharge}</p>
          <hr className="my-2" />
          <p className="font-bold text-lg">
            Grand Total: ₹{grandTotal}
          </p>
        </div>
      )}

      {/* ADDRESS */}
      <input
        className="border w-full p-3 mt-4 rounded"
        placeholder="House / Flat / Landmark"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* PLACE ORDER */}
      <button
        onClick={handleOrder}
        disabled={loading}
        className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg"
      >
        {loading ? "Placing Order..." : "Place Order (COD)"}
      </button>
    </div>
  );
}

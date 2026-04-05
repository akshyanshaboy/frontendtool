export default function App() {
  return (
    <div style={{ fontFamily: "serif", margin: 0, padding: 0 }}>

      {/* 🔥 HERO SECTION */}
      <section style={{
        height: "100vh",
        background: "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b') center/cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Hotel Relax Inn
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Luxury Stay • Fine Dining • Comfort Redefined
        </p>
        <button style={{
          padding: "15px 30px",
          fontSize: "18px",
          background: "gold",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer"
        }}>
          Book Now
        </button>
      </section>

      {/* 🍽️ ABOUT */}
      <section style={{
        padding: "80px 5%",
        textAlign: "center",
        background: "#fff"
      }}>
        <h2 style={{ fontSize: "40px" }}>Welcome to Relax Inn</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", color: "#555" }}>
          Experience luxury and comfort with world-class hospitality.
          Enjoy our premium rooms and delicious cuisine crafted by top chefs.
        </p>
      </section>

      {/* 🖼️ GALLERY */}
      <section style={{
        padding: "80px 5%",
        background: "#f4faff"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Gallery
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {[
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          ].map((img, i) => (
            <img key={i}
              src={img}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />
          ))}
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section style={{
        padding: "80px 5%",
        textAlign: "center",
        background: "#fff"
      }}>
        <h2>Contact Us</h2>
        <p>📍 Khar, Mumbai</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 relaxinn@email.com</p>
      </section>

      {/* 🔥 FLOATING BUTTON */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px"
      }}>
        <button style={{
          padding: "15px 20px",
          borderRadius: "50px",
          background: "#25D366",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          WhatsApp
        </button>
      </div>

    </div>
  )
}

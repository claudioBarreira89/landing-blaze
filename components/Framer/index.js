const Framer = ({ left, top, color }) => {
  return (
    <div
      className="absolute h-auto w-auto -z-20 pointer-events-none	"
      style={{ left, top }}
    >
      <div
        style={{
          background:
            color ||
            "radial-gradient(50% 50% at 50% 50%, rgba(241, 39, 17, 0.28) 0%, rgba(245, 175, 25, 0) 100%)",
          opacity: 0.8,
          width: "1845px",
          height: "1230px",
        }}
      />
    </div>
  );
};

export default Framer;

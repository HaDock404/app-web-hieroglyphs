import { useInView } from 'react-intersection-observer';

function LazyVideo({ src }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <video src={src} autoPlay loop muted playsInline preload="auto" />
      ) : (
        <div style={{ height: '100px', backgroundColor: '#eee' }} />
      )}
    </div>
  );
}

export default LazyVideo
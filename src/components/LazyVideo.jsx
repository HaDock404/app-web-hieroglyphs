import { useInView } from 'react-intersection-observer';

function LazyVideo({ src }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {inView ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      ) : (
        <div style={{ height: '100px', backgroundColor: '#eee' }} />
      )}
    </div>
  );
}


export default LazyVideo
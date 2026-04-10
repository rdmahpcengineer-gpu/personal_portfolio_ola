import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

function getTimeDigits(): { hh: [string, string]; mm: [string, string] } {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  return {
    hh: [h[0], h[1]],
    mm: [m[0], m[1]],
  };
}

interface FlipCardProps {
  digit: string;
  flipKey: number;
}

function FlipCard({ digit, flipKey }: FlipCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevDigit = useRef(digit);
  const [display, setDisplay] = useState({ old: digit, next: digit });

  useEffect(() => {
    if (prevDigit.current === digit && flipKey === 0) return;

    const el = wrapperRef.current;
    if (!el) return;

    const topFlap = el.querySelector(".fc-flap-top") as HTMLElement;
    const bottomFlap = el.querySelector(".fc-flap-bottom") as HTMLElement;
    if (!topFlap || !bottomFlap) return;

    setDisplay({ old: prevDigit.current, next: digit });

    // Reset flaps
    gsap.set(topFlap, { rotationX: 0, zIndex: 4 });
    gsap.set(bottomFlap, { rotationX: 90, zIndex: 3 });

    const tl = gsap.timeline({
      onComplete: () => {
        prevDigit.current = digit;
        setDisplay({ old: digit, next: digit });
        gsap.set(topFlap, { rotationX: 0, zIndex: 4 });
        gsap.set(bottomFlap, { rotationX: 0, zIndex: 3 });
      },
    });

    // Top flap falls down revealing new digit behind it
    tl.to(topFlap, {
      rotationX: -90,
      duration: 0.35,
      ease: "power2.in",
    });

    // Bottom flap swings into place
    tl.to(
      bottomFlap,
      {
        rotationX: 0,
        duration: 0.45,
        ease: "bounce.out",
      },
      "-=0.08"
    );

    return () => { tl.kill(); };
  }, [digit, flipKey]);

  return (
    <div ref={wrapperRef} className="fc-card">
      {/* Static back face — always shows next digit */}
      <div className="fc-static-top">
        <span>{display.next}</span>
      </div>
      <div className="fc-static-bottom">
        <span>{display.next}</span>
      </div>

      {/* Animated top flap — shows OLD digit, flips down */}
      <div className="fc-flap-top">
        <span>{display.old}</span>
      </div>

      {/* Animated bottom flap — shows NEW digit, flips into place */}
      <div className="fc-flap-bottom">
        <span>{display.next}</span>
      </div>

      {/* Center axle line */}
      <div className="fc-axle" />
    </div>
  );
}

function DigitPair({
  digits,
  flipKeys,
}: {
  digits: [string, string];
  flipKeys: [number, number];
}) {
  return (
    <div className="fc-pair">
      <FlipCard digit={digits[0]} flipKey={flipKeys[0]} />
      <FlipCard digit={digits[1]} flipKey={flipKeys[1]} />
    </div>
  );
}

export default function FlipClock() {
  const [time, setTime] = useState(getTimeDigits);
  const [keys, setKeys] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const queueRef = useRef<ReturnType<typeof getTimeDigits>[]>([]);

  const tick = useCallback(() => {
    const fresh = getTimeDigits();

    // unshift(pop()) rotation
    if (queueRef.current.length > 0) {
      queueRef.current.unshift(queueRef.current.pop()!);
    }
    queueRef.current.push(fresh);
    if (queueRef.current.length > 4) queueRef.current.splice(0, queueRef.current.length - 4);

    const target = queueRef.current[queueRef.current.length - 1];

    setTime((prev) => {
      const flat = [...prev.hh, ...prev.mm];
      const next = [...target.hh, ...target.mm];
      setKeys((k) => [
        flat[0] !== next[0] ? k[0] + 1 : k[0],
        flat[1] !== next[1] ? k[1] + 1 : k[1],
        flat[2] !== next[2] ? k[2] + 1 : k[2],
        flat[3] !== next[3] ? k[3] + 1 : k[3],
      ]);
      return target;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <div className="fc-housing">
      {/* Left gear decoration */}
      <div className="fc-gear fc-gear-left">
        <div className="fc-gear-inner" />
      </div>

      {/* Clock body */}
      <div className="fc-body">
        <DigitPair digits={time.hh} flipKeys={[keys[0], keys[1]]} />
        <div className="fc-colon">
          <span />
          <span />
        </div>
        <DigitPair digits={time.mm} flipKeys={[keys[2], keys[3]]} />
      </div>

      {/* Right gear decoration */}
      <div className="fc-gear fc-gear-right">
        <div className="fc-gear-inner" />
      </div>

      {/* Stand / base */}
      <div className="fc-stand">
        <div className="fc-pillar fc-pillar-left" />
        <div className="fc-pillar fc-pillar-right" />
        <div className="fc-base" />
      </div>
    </div>
  );
}

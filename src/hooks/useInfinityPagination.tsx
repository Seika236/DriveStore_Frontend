import { ReactElement, useEffect, useRef } from "react";

type Props = {
  parentRef: React.MutableRefObject<Element | null>;
  childRef: React.MutableRefObject<Element>;
  cb: () => void;
};

export function UseInfinityPagination({ childRef, parentRef, cb }: Props) {
  const observer = useRef<IntersectionObserver>(null);
  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        cb();
      }
    }, options);
    if (childRef.current) {
      observer.current.observe(childRef.current);
    }

    return () => {
      if (childRef.current) observer.current.unobserve(childRef.current);
    };
  }, [cb]);
}

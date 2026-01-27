// observer.ts
type Callback = () => void;

const callbacks = new Map<Element, Callback>();

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cb = callbacks.get(entry.target);
                if (cb) {
                    cb();
                    observer.unobserve(entry.target); // trigger only once
                    callbacks.delete(entry.target);
                }
            }
        });
    },
    { threshold: 0.2 },
);

export function observeElement(el: Element, cb: Callback) {
    callbacks.set(el, cb);
    observer.observe(el);
}

export function unobserveElement(el: Element) {
    observer.unobserve(el);
    callbacks.delete(el);
}

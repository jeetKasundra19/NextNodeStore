import Marquee from "react-fast-marquee";

const offerList = [
  {
    offer: "Size Exchange Guarantee",
  },
  {
    offer: "Free Ship & Returns",
  },
  {
    offer: "24/7 Customer Support",
  },
  {
    offer: "Size Exchange Guarantee",
  },
  {
    offer: "Free Ship & Returns",
  },
  {
    offer: "24/7 Customer Support",
  },
  {
    offer: "Size Exchange Guarantee",
  },
  {
    offer: "Free Ship & Returns",
  },
  {
    offer: "24/7 Customer Support",
  },
  {
    offer: "Size Exchange Guarantee",
  },
  {
    offer: "Free Ship & Returns",
  },
  {
    offer: "24/7 Customer Support",
  },
];

export default function OfferMarquee() {
  return (
    <div className="offer-scroller">
      <Marquee>
        {offerList.map((offer, i) => (
          <div className="offer--item" key={i}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3694 24.5H9.57962V14.8694H0V10.0796H9.57962V0.5H14.3694V10.0796H24V14.8694H14.3694V24.5Z"
                fill="#060707"
              />
            </svg>

            <h4>{offer.offer}</h4>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

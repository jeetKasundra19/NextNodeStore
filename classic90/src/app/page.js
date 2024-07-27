import LayoutWrapper from "@/components/LayoutWrapper";
import { BlogBox, OfferMarquee, ProductBox, Section } from "@/components";

export default function Home() {
  return (
    <LayoutWrapper>
      <OfferMarquee />
      <Section container="regular" p={20} space={40}>
        <h3 className="section-title">Payday Deals</h3>
        <div className="four-col">
          <ProductBox />
        </div>
      </Section>
      <Section container="regular" p={20} space={40}>
        <h3 className="section-title">Lifestyle</h3>
        <div className="two-col">
          <BlogBox />
        </div>
      </Section>
    </LayoutWrapper>
  );
}

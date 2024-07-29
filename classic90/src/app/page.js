import LayoutWrapper from "@/components/LayoutWrapper";
import {
  BlogBox,
  OfferMarquee,
  ProductBox,
  Section,
  BannerSection,
  CollectionList,
  NewsLetterSection
} from "@/components";

export default function Home() {
  return (
    <LayoutWrapper>
      <Section container="regular">
        <BannerSection />
      </Section>
      <OfferMarquee />
      <Section container="regular" p={20} space={40}>
        <h3 className="section-title">Payday Deals</h3>
        <div className="four-col">
          <ProductBox />
        </div>
      </Section>
      <Section container="regular" p={60} space={46}>
        <h3 className="section-title">Top Collection</h3>
        <CollectionList />
      </Section>
      <Section container="regular" p={20} space={40}>
        <h3 className="section-title">Best Seller</h3>
        <div className="four-col">
          <ProductBox />
        </div>
      </Section>
      <Section container="fill" py={62}>
        <NewsLetterSection />
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

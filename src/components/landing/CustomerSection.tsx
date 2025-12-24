import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    storeName: "Modern Thread",
    category: "Fashion & Apparel",
    logo: "/image/Modern Thread.jpg",
    quote:
      '"Loukify helped us launch our fashion store in just 2 days. Sales increased 300% in the first month!"',
    revenue: "$10,000+",
    metric: "Monthly Revenue",
  },
  {
    storeName: "Khmer Kitchen",
    category: "Food & Restaurant",
    logo: "/image/HEL-Corner.jpg",
    quote:
      '"Online ordering made easy! Our customers love the seamless experience and we\'ve doubled our reach."',
    revenue: "20,000+",
    metric: "Month Orders",
  },
  {
    storeName: "KDMV",
    category: "Fashion & Apparel",
    logo: "/image/KDMV.png",
    quote:
      '"Loukify helped us launch our fashion store in just 2 days. Sales increased 300% in the first month!"',
    revenue: "$15,000+",
    metric: "Monthly Revenue",
  },
];

const CustomerSection = () => {
  return (
    <section
      id="customer-section"
      className="py-12 sm:py-16 md:py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            See what our customers have built
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
            Real stores created by Cambodian entrepreneurs using Loukify
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.storeName}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#76716D] text-white text-xs px-2 py-1 rounded-full">
                    Live Store
                  </span>
                </div>
                <img
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={`${testimonial.storeName} logo`}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.storeName} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900">
                      {testimonial.storeName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.category}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {testimonial.metric}
                  </span>
                  <span className="font-semibold text-base sm:text-lg text-gray-900">
                    {testimonial.revenue}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-[#D9D9D9] border border-[#D9D9D9] hover:text-primary transition-colors text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
          >
            View More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;

import { useState } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[150px] font-bold text-[#090922] leading-none mb-4">FAQs</h1>
        <h3 className="text-black text-xl font-semibold mb-6">Answering Your Questions</h3>

        {/* Question 1 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer1')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">What brands do you offer?</h5>
        </div>
        {openQuestion === 'answer1' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>We work with well-known brands like Nike, Adidas, Zara, H&M, and many more.</p>
          </div>
        )}

        {/* Question 2 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer2')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">How can I make a purchase?</h5>
        </div>
        {openQuestion === 'answer2' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Just add the products to your cart and follow the secure checkout steps on our platform.</p>
          </div>
        )}

        {/* Question 3 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer3')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">How long does shipping take?</h5>
        </div>
        {openQuestion === 'answer3' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Delivery time depends on your location but typically ranges from 3 to 7 business days.</p>
          </div>
        )}

        {/* Question 4 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer4')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Can I return a product if it doesn’t fit?</h5>
        </div>
        {openQuestion === 'answer4' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Yes, we accept returns within the first 30 days after your purchase.</p>
          </div>
        )}

        {/* Question 5 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer5')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Do you offer discounts or promotions?</h5>
        </div>
        {openQuestion === 'answer5' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Yes, check our deals section and subscribe to our newsletter to get exclusive discounts.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;

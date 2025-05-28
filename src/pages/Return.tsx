import { useState } from 'react';

const Return = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[140px] font-bold text-[#090922] leading-none mb-4">RETURN</h1>
        <h4 className="text-black text-xl font-semibold mb-2">Return Policies</h4>
        <h5 className="text-lg mb-6 text-stone-700">
          At AN&Co., we want you to be completely satisfied with your purchase. If you need to return a product, please follow these guidelines:
        </h5>

        {/* Question 1 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer1')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Return Period</h5>
        </div>
        {openQuestion === 'answer1' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>You have up to 30 days from the purchase date to return a product.</p>
          </div>
        )}

        {/* Question 2 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer2')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Product Condition</h5>
        </div>
        {openQuestion === 'answer2' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>The product must be in its original condition, unused, and with tags attached.</p>
          </div>
        )}

        {/* Question 3 */}
        <div
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer3')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Return Process</h5>
        </div>
        {openQuestion === 'answer3' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Returns can be made at our physical stores or by mail.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Return;


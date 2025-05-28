import { useState } from 'react';

const Shipping = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[140px] font-bold text-[#090922] leading-none mb-4">Shipping</h1>
        <h4 className="text-black text-xl font-semibold mb-2">Shipping Policies</h4>
        <h5 className="text-lg mb-6 text-stone-700">Learn about our different shipping options to suit your needs:</h5>

        {/* Question 1 */}
        <div 
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer1')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">Standard Shipping</h5>
        </div>
        {openQuestion === 'answer1' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Standard shipping has a fixed cost and is delivered within 3 to 7 business days.</p>
          </div>
        )}

        {/* Question 2 */}
        <div 
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer text-stone-950 transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer2')}
        >
          <h5 className="text-lg font-medium">Express Shipping</h5>
        </div>
        {openQuestion === 'answer2' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Express shipping guarantees fast delivery within 1 to 3 business days for an additional cost.</p>
          </div>
        )}

        {/* Question 3 */}
        <div 
          className="border border-[#1b1919] rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-[#18286e] hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer3')}
        >
          <h5 className="text-lg font-medium text-stone-950 hover:text-white">International Shipping</h5>
        </div>
        {openQuestion === 'answer3' && (
          <div className="bg-[#e1e8ed] border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>International shipping is available for most countries and takes 7 to 15 business days.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shipping;
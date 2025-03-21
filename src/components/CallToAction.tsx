import React from 'react';

function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="order-2 md:order-1">
              <img
                src="dist/assets/2.jpeg"
                alt="Online therapy session illustration"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              
              {/* Payment Methods */}
              <div className="mt-12 flex items-center justify-center space-x-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png"
                  alt="PayPal"
                  className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 text-right">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-10 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold mb-6">
                  لا تتردد في بدء رحلتك نحو صحة نفسية أفضل!
                </h2>
                <p className="text-xl mb-10 opacity-90">
                  اشترك الآن وابدأ أولى جلساتك مع طبيبك المفضل
                </p>
                <button className="bg-white text-cyan-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  اشترك الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
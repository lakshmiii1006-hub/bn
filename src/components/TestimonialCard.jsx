// src/components/TestimonialCard.jsx - FIXED

const CreateCard = ({ card }) => (
  <div className="p-6 rounded-2xl mx-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-80 shrink-0 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 hover:-translate-y-1 h-64 flex flex-col justify-between">
    <div className="flex gap-3 items-start">
      <img 
        className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg" 
        src={card.image} 
        alt={card.name}
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-semibold text-gray-900 text-lg truncate">{card.name}</p>
          <svg className="w-5 h-5 text-rose-500 mt-0.5" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"/>
          </svg>
        </div>
        <span className="text-sm text-rose-500 font-medium mb-4 block">{card.handle}</span>
        <p className="text-gray-700 leading-relaxed text-base flex-1 overflow-hidden line-clamp-4">"{card.text}"</p>
      </div>
    </div>
    <div className="flex items-center justify-between text-xs text-rose-500 pt-2 border-t border-rose-200 mt-4">
      <div className="flex items-center gap-1">
        <span>Posted on</span>
        <svg width="12" height="11" viewBox="0 0 11 10" fill="currentColor">
          <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"/>
        </svg>
      </div>
      <p>{card.date}</p>
    </div>
  </div>
)

// ✅ FIXED: Proper named export
export { CreateCard }
export default CreateCard

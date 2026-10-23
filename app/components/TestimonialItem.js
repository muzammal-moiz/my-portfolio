import Image from "next/image";

export default function TestimonialItem({ name, role, testimonial, image }) {
  return (
    <div className="bg-gray-900 border border-teal-500/20 rounded-lg shadow-sm p-4 sm:p-6 mx-2 sm:mx-4 text-left transition-transform duration-300 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/50">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-teal-500 object-cover"
        />
        {/* <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-teal-500 object-cover"
        /> */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-100">{name}</h3>
          <p className="text-sm text-teal-400">{role}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-100">{testimonial}</p>
    </div>
  );
}

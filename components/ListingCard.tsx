import React from 'react';
import { Listing } from '../types';
import { Bed, Bath, Square } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="group relative bg-black-800 rounded-none border border-white/10 hover:border-accent-600/50 transition-all duration-500 overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black-700">
        <img
          src={listing.imageUrl}
          alt={listing.address}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-black-900/90 backdrop-blur-sm text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
            {listing.type}
          </span>
        </div>
        
        {listing.featured && (
          <div className="absolute top-4 right-4">
             <span className="bg-accent-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
               Exclusive
             </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-black-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
              View Property
            </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="font-serif text-2xl text-white font-medium">
            ${listing.price.toLocaleString()}
          </p>
        </div>
        
        <h3 className="text-sm font-medium text-gray-300 mb-1 truncate">{listing.address}</h3>
        <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">{listing.city}, {listing.province}</p>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-gray-400">
          <div className="flex items-center gap-1.5" title="Bedrooms">
            <Bed size={16} strokeWidth={1.5} className="text-accent-600" />
            <span className="text-xs font-medium">{listing.beds}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Bathrooms">
            <Bath size={16} strokeWidth={1.5} className="text-accent-600" />
            <span className="text-xs font-medium">{listing.baths}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Square Footage">
            <Square size={16} strokeWidth={1.5} className="text-accent-600" />
            <span className="text-xs font-medium">{listing.sqft.toLocaleString()} <span className="text-[10px]">SF</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
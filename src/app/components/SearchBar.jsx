import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';
import { FaSearch } from 'react-icons/fa';
import app from '@/app/Shared/firebaseConfig';
import { useRouter } from 'next/navigation';

function SearchBar() {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    // const handleSearch = () => {
    //     // Redirect to the dynamic route with the search term
    //     if (searchInput.trim() !== '') {
    //         router.push(`/results/${encodeURIComponent(searchInput)}/page`);
    //     }
    // };

    // Add an event listener to handle the enter key
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="bg-[#e9e9e9] p-3 w-full gap-3 items-center rounded-full hidden md:flex">
            <FaSearch className="text-[25px] text-red-400" 
            // onClick={handleSearch} 
            />
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default SearchBar;
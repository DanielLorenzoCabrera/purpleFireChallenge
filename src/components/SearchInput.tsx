import Image from "next/image";
import search_icon from "@/assets/img/search.svg";

interface SearchInputProps {
  onSearch?: (search: string) => void;
  placeholder?: string;
}

const SearchInput = ({ placeholder }: SearchInputProps): JSX.Element => {
  return (
    <div className="search-input">
      <input type="text" placeholder={placeholder} />
      <figure>
        <Image
          src={search_icon}
          width={20}
          height={20}
          alt="search input icon"
        />
      </figure>
    </div>
  );
};

export default SearchInput;

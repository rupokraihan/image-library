import { FaCheckSquare } from "react-icons/fa";

const Header = ({ selectedImg, onDelete }) => {
  // Handle delete images by selected id
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <div className="border-b-2">
        {selectedImg?.length > 0 ? (
          <div className="p-5 flex items-center justify-between">
            {/* Selected Files */}
            <h1 className="text-xl font-bold flex items-center">
              <span className="mr-2 text-blue-600">
                <FaCheckSquare></FaCheckSquare>
              </span>
              <span>{selectedImg?.length} files selected</span>
            </h1>
            {/* Delete Button */}
            <div>
              <button onClick={handleDelete} className="text-lg text-red-600">
                Delete files
              </button>
            </div>
          </div>
        ) : (
          // Default Header
          <h1 className="text-xl font-bold py-5 ps-5">Gallery</h1>
        )}
      </div>
    </div>
  );
};

export default Header;

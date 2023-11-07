import { FaCheckSquare } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Image = ({ id, image, selectedImg, setSelectedImg, className }) => {
  const isSelected = selectedImg.includes(id);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const handleClick = () => {
    if (isDragging) return;

    if (isSelected) {
      setSelectedImg(selectedImg.filter((imgId) => imgId !== id));
    } else {
      setSelectedImg([...selectedImg, id]);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isSelected || isDragging ? 2 : 1,
      }}
      {...attributes}
      {...listeners}
      className={`relative rounded-lg overflow-hidden border border-gray-500 ${className}`}
    >
      {isSelected ? (
        <>
          <FaCheckSquare
            className="absolute top-2 left-2 text-xl rounded-lg text-blue-600 cursor-pointer z-40"
            onMouseUp={handleClick}
          />
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-50 transition-opacity"
          />
        </>
      ) : (
        <>
          <div className="relative">
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
              <FaRegSquareFull
                className="absolute top-2 left-2 text-xl cursor-pointer z-10 bg-white"
                onMouseUp={handleClick}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Image;

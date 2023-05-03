const SearchUserModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div
      onClick={() => setShowModal(false)}
      className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm p-20 z-[200] flex flex-col'
    >
      <div className='w-full max-w-2xl m-auto bg-white rounded-lg shadow-lg'>
        modal
      </div>
    </div>
  );
};

export default SearchUserModal;

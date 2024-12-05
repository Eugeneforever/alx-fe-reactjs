
const UserProfile = () => {
  return (
   <div className="bg-gray-100 sm:text-lg max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 md:text-xl md:max-w-sm sm:max-w-xs">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24"/>
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  )
}

export default UserProfile


function Header() {
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-red-60">
      {/* Container chứa các ô */}
      <div className="flex items-center space-x-4">
        {/* Ô nhỏ bên trái */}
        <div className="w-60 h-80 rounded-lg shadow-md flex items-center justify-center text-white font-bold"></div>

        {/* Ô lớn ở giữa */}
        <div className="w-100 h-175 rounded-lg shadow-md flex items-center justify-center text-white font-bold"></div>

        {/* Ô nhỏ bên phải */}
        <div className="w-60 h-80 rounded-lg shadow-md flex items-center justify-center text-white font-bold"></div>
      </div>
    </div>
    </>
  )
}

export default Header
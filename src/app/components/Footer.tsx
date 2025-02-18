export const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <div className="w-full bg-gray-700 text-white py-2 shadow-md z-50 fixed bottom-0">
            <div className="flex justify-center">
                <span>CSTrainer Copyright &copy; {year}</span>
            </div>
      </div>
    )
}
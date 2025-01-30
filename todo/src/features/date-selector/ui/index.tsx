export const DateSelector = ({ selectedDate, setSelectedDate }: { selectedDate: string; setSelectedDate: (date: string) => void }) => {
  return (
    <div className="w-full max-w-lg bg-white p-4 rounded-md shadow-md mb-6">
      <label htmlFor="date" className="block text-lg font-medium mb-2 text-gray-700">Выберите дату</label>
      <input
        id="date"
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
};
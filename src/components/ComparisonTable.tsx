function ComparisonTable() {

  return (
    <table className="text-xl mx-auto w-[730px]">
      <thead className="text-center border-b border-gray-500">
        <tr>
          <th className="pb-3"></th>
          <th className="pb-3">窩窩系統模組家具</th>
          <th className="text-gray-600 pb-3">組合式家具</th>
          <th className="text-gray-600 pb-3">實木家具</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center border-b border-gray-500">
          <th className="py-3 text-left">可單人自行組裝</th>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
          <td className="py-3 text-gray-600">不一定</td>
          <td className="py-3"></td>
        </tr>
        <tr className="text-center border-b border-gray-500">
          <th className="py-3 text-left">可多次重複拆裝</th>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
          <td className="py-3"></td>
          <td className="py-3"></td>
        </tr>
        <tr className="text-center border-b border-gray-500">
          <th className="py-3 text-left">床墊規格彈性大</th>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
          <td className="py-3 text-gray-600">不一定</td>
          <td className="py-3 text-gray-600">不一定</td>
        </tr>
        <tr className="text-center border-b border-gray-500">
          <th className="py-3 text-left">材質可長久使用</th>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
          <td className="py-3"></td>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
        </tr>
        <tr className="text-center border-b border-gray-500">
          <th className="py-3 text-left">小客車即可搬運</th>
          <td className="py-3">
            <i className="bi bi-check-lg text-primary text-4xl" />
          </td>
          <td className="py-3"></td>
          <td className="py-3"></td>
        </tr>
      </tbody>
    </table>
  )
}

export default ComparisonTable
import Title from './Title'
import ComparisonTable from './ComparisonTable'

function Comparison() {
  return (
    <div className="bg-gray-300 pt-12 pb-16 px-4">
      <Title title={'家具比較'} />
      <div className="overflow-auto">
        <ComparisonTable />
      </div>
    </div>
  )
}

export default Comparison
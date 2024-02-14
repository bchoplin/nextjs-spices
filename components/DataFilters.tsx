const DataFilters = ({
  search,
  setPrice,
  setHeat,
  setSearch,
}: {
  search: string,
  setPrice: (newValue: string) => void,
  setHeat: (newValue: number) => void,
  setSearch: (newValue: string) => void,
}) => {

  const fieldWrapperClassNames = "basis-full md:basis-1/3"
  const fieldClassNames = "w-full p-[7px] border-2 text-black"

  const handlePriceSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setPrice(e.target.value)
  }

  const handleHeatSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const heatNumber = parseInt(e.target.value)
    setHeat(heatNumber)
  }

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="mb-12 p-8 border-2">
      <h3 className="text-lg mb-6">Spice Filters</h3>
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className={fieldWrapperClassNames}>
          <label>
            <div className="mb-2">Price:</div>
            <select
              className={fieldClassNames}
              name="price-select"
              onChange={handlePriceSelectChange}
            >
              <option value="">All</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
              <option value="$$$$$">$$$$$</option>
            </select>
          </label>
        </div>
        <div className={fieldWrapperClassNames}>
          <label>
            <div className="mb-2">Heat:</div>
            <select
              className={fieldClassNames}
              name="heat-select"
              onChange={handleHeatSelectChange}
            >
              <option value="">All</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <div className={fieldWrapperClassNames}>
          <label>
            <div className="mb-2">Search:</div>
            <input
              type="search"
              className={`${fieldClassNames} py-[6px]`}
              name="search-input"
              value={search}
              onChange={handleSearchInputChange}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default DataFilters
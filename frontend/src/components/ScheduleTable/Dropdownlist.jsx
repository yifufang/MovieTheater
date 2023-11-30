
export default  function Dropdownlist({HandleSetTheater}) {
    return (
        <div>
            <select className="border-2 border-gray-300 rounded-md mb-4 p-2 w-1/2" onChange={(e) => {HandleSetTheater(e.target.value)}}>
                <option value="">Select Theater</option>
                <option value="a">theater a</option>
                <option value="b">theater b</option>
                <option value="c">theater c</option>
                <option value="d">theater d</option>
            </select>
        </div>
    )
}
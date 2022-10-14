import React from 'react'
function RenderingArrayOfObjects() {
	const data = [
        
		{
			"Name": "rohit",
			"Standard": "first",
            "Mobile": "5678765678",
            "Blood": "A-"
		},
		{
			"Name": "mohit",
			"Standard": "second",
            "Mobile": "5678765678",
            "Blood": "A-"
		},{
			"Name": "shobhit",
			"Standard": "third",
            "Mobile": "5678765678",
            "Blood": "A-"
		},{
			"Name": "kumar",
			"Standard": "fourth",
            "Mobile": "5678765678",
            "Blood": "A-"
		}
	]
	const listItems = data.map(
		(element) => {
			return (
                <table>
                    <tr>
                        <td>{element.Name}</td>
                        <td>{element.Standard}</td>
                        <td>{element.Mobile}</td>
                        <td>{element.Blood}</td>
                    </tr>
                </table>
			)
		}
	)
	return (
		<div>
			{listItems}
		</div>
	)
}
function AppList() {
	return (
		<div className="AppList">
			<div>
				
				<h3>Rendering List of Students</h3>
                <table>
                    <tr>
                    <tr>
                        <th>Name</th>
                        <th>Standard</th>
                        <th>Mobile Number</th>
                        <th>Blood Group</th>
                    </tr>
                    </tr>
                </table>
				<br></br>
				<RenderingArrayOfObjects />
			</div>
		</div>
	);
}

export default AppList;

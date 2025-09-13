import "./table.css"

const studentsData = [
    {
        name: "John",
        age: "21",
        subject: "Maths",
        score: "89"
    },
    {
        name: "Alice",
        age: "21",
        subject: "Maths",
        score: "84"
    },
    {
        name: "Martin",
        age: "22",
        subject: "Maths",
        score: "92"
    },
    {
        name: "Kane",
        age: "19",
        subject: "Maths",
        score: "81"
    },
    {
        name: "Johnson",
        age: "20",
        subject: "Maths",
        score: "79"
    }
]

export default function Students() {
    return (
        <div>
            <h2>Students Information</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Subject</th>
                        <th>Marks/100</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.subject}</td>
                            <td>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}